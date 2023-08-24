import API from "@/config/API.config";
import firebase_app from "@/config/firebase";
import { errorMessage } from "@/libs/utils";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PageForm({ open, handleClose, onSuccess, page }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(page)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onSubmit(data) {
    try {
      setLoading(false);
      setError(null);
      const form_data = { ...data };
      if (data?.id) {
        delete form_data.id;
        await API.patch(`/pages/${data?.id}`, form_data,{
          headers:{
           Authorization:getAuth(firebase_app)?.currentUser?.accessToken 
          }
        });
      } else {
        delete form_data.id;
        await API.post(`/pages`, form_data,{
          headers:{
           Authorization:getAuth(firebase_app)?.currentUser?.accessToken 
          }
        });
      }
      onSuccess();
      reset();
      handleClose();
    } catch (error) {
      setError(errorMessage(error));
    } finally {
      setLoading(false);
    }
  }
  return (
    <Dialog open={open} handler={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <DialogHeader>{page?.title || "Create Page"}</DialogHeader>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            {page?.id && <Input {...register("id")} defaultValue={page?.id} label="id" readOnly />}
            <Input defaultValue={page?.title} {...register("title", { required: true })} label="title" />
            <Input defaultValue={page?.route} {...register("route", { required: true })} label="route" />
            <Textarea
             defaultValue={page?.keywords}
              {...register("keywords", { required: true })}
              label="keywords"
            />
            <Textarea
             defaultValue={page?.description}
              {...register("description", { required: true })}
              label="description"
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="outlined"
            type="reset"
            size="sm"
            color="red"
            onClick={() => {
              handleClose();
              reset();
            }}
          >
            close
          </Button>
          <Button
            type="submit"
            variant="gradient"
            size="sm"
            color="blue"
            className="text-black"
            disabled={loading}
          >
            {loading ? "Loading..." : `SAVE`}
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
}
