"use client";

import API from "@/config/API.config";
import { errorMessage } from "@/libs/utils";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import {
  Alert,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Spinner,
  Textarea,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";
import moment from "moment/moment";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiCommentDots } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import Swal from "sweetalert2";
import useSwr from "swr";

const SingleBlog = ({ params }) => {
  const { data, error, isLoading } = useSwr(
    params?.id,
    async (id) => {
      try {
        const { data } = await API.get(`/blogs/${id}`);
        return data;
      } catch (error) {
        throw errorMessage(error);
      }
    },
    {
      keepPreviousData: false,
    }
  );
  const {
    data: comments,
    error: comments_error,
    isLoading: comment_loading,
    mutate: mutate_comment,
  } = useSwr(
    {blog_id:params?.id},
    async ({blog_id}) => {
      try {
        const { data } = await API.get(`/comments/${blog_id}`);
        return data;
      } catch (error) {
        throw errorMessage(error);
      }
    },
    {
      keepPreviousData: false,
    }
  );
  console.log({comments})
  const [open_comments, setOpenComments] = useState(false);
  const [commenting,setCommenting]=useState(false);
  const { register, handleSubmit,reset } = useForm();
  async function onSubmit(data) {
    try {
      setCommenting(true);
      await API.post(`/comments/${params?.id}`,data);
      Swal.fire({
        title: "Success",
        text: 'Successfully commented.',
        icon: "success",
      });
      mutate_comment(comments);
      reset();
    } catch (error) {
    }finally{
      setCommenting(false);
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spinner height={30} width={30} />
      </div>
    );
  }

  return (
    <>
      <div className="bg-white md:p-3 lg:p-5 rounded-xl shadow-lg p-2">
        {error && (
          <Alert variant="ghost" color="red">
            {error}
          </Alert>
        )}
        <img
          src={`${API.getUri()}../${data?.banner}`}
          alt=""
          className="rounded-lg shadow-lg w-full mb-5 max-h-[460px] object-contain object-center"
        />
        <h1 className="mb-2 text-3xl md:text-5xl text-primary">{data?.title}</h1>
        <div className="mb-5 flex flex-wrap gap-3 justify-between items-center">
          <div className="flex gap-2 flex-wrap items-center mb-2">
            <span className="inline-flex font-medium gap-1 py-1 px-2 justify-center items-center">
              <HiUserCircle className="text-primary" />
              <span className="">Admin</span>
            </span>
            <span className="inline-flex font-medium gap-1 py-1 px-2 justify-center items-center">
              <BsCalendar2Date className="text-primary" />
              <span className="">
                {moment(data?.createdAt).format("MMM DD, YYYY")}
              </span>
            </span>
          </div>
          <span className="inline-flex font-medium gap-1 py-1 px-2 justify-center items-center">
            <BiCommentDots className="text-primary" />
            <span className="">{`${comments?.length} comments`}</span>
          </span>
        </div>
        <fieldset className="border-2 border-black/70 bg-primary/5 rounded-md p-2">
          <legend className="text-lg tracking-wider font-semibold px-2 bg-blue-gray-900 rounded-lg text-white">
            Summary
          </legend>
          <p>
            {data?.summary}
          </p>
        </fieldset>
        <div className="mt-5 leading-relaxed text-lg">
          <div dangerouslySetInnerHTML={{ __html: data?.blog }} />
        </div>
      </div>
      <div className="bg-white mt-5 md:p-3 lg:p-5 rounded-xl shadow-lg p-2">
        <div className="flex gap-4 items-center">
          <h3>Comments</h3>
          <div className="h-1 bg-black flex-grow" />
          <Button
            variant="gradient"
            color="amber"
            className="flex gap-1 items-center"
            onClick={() => setOpenComments(true)}
          >
            <BiCommentDots /> ALL COMMENTS
          </Button>
        </div>
        <form className="py-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input
              {...register("name", { required: true })}
              label="Name"
              required
              variant="standard"
              className=""
            />
            <Input
              {...register("email", { required: true })}
              label="Email"
              required
              variant="standard"
              className="md:col-span-2"
            />
            <Input
              {...register("website", { required: true })}
              label="Website"
              required
              variant="standard"
              className=""
            />
          </div>
          <Textarea
            {...register("comment", { required: true })}
            label="Comment * "
            required
            variant="standard"
            size="lg"
          />
          <br />
          <Button type="submit" color="amber" variant="gradient" disabled={commenting}>
            {commenting?'Loading...':'Submit'}
          </Button>
          <Button type="reset" color="red" variant="text" disabled={commenting}>
            Cancel
          </Button>
        </form>
      </div>

      <Dialog
        open={open_comments}
        className="max-h-[80vh] flex flex-col overflow-auto"
      >
        <DialogHeader>Comments</DialogHeader>
        <DialogBody divider className="overflow-auto flex-grow">
          <Timeline>
            {comment_loading && (
              <div className="text-center">
                <Spinner height={30} width={30} />
              </div>
            )}
            {comments_error && (
              <Alert variant="ghost" color="red">
                {comments_error}
              </Alert>
            )}
            {!comments?.length && (
              <Alert variant="ghost" color="amber">
                No comment yet now.
              </Alert>
            )}
            {(comments||[])?.map((e, key, array) => (
              <TimelineItem key={key}>
                {array.length !== key + 1 && <TimelineConnector />}
                <TimelineHeader>
                  <TimelineIcon className="p-2">
                    <ChatBubbleLeftIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    {e?.name}
                  </Typography>
                  <Typography variant="small" color="blue-gray">
                    {moment(e?.createdAt).format("DD MMM, YYYY")}
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    color="gary"
                    className="font-normal text-gray-600"
                  >
                    {e?.comment}
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            ))}
          </Timeline>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="outlined"
            color="red"
            onClick={() => setOpenComments(false)}
          >
            close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default SingleBlog;
