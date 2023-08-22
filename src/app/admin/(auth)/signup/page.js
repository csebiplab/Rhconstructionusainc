"use client";
import firebase_app from "@/config/firebase";
import { errorMessage } from "@/libs/utils";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const metadata={
    title:'Sign Up | Admin'
}

export default function () {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  async function onSubmit(data) {
    try {
      setLoading(true);
      const userCred = await createUserWithEmailAndPassword(
        getAuth(firebase_app),
        data?.email,
        data?.password
      );
      updateProfile(userCred.user,{
        displayName:data.name
      })
      reset();
      router.push("/admin");
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: errorMessage(error),
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="min-h-screen flex justify-center items-center px-2 py-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to sign up.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              {...register("name", { required: true })}
              type="text"
              size="lg"
              label="Name"
              name="name"
            />
            <Input
              {...register("email", { required: true })}
              type="email"
              size="lg"
              label="Email"
              name="email"
            />
            <Input
              {...register("password", { required: true })}
              type="password"
              size="lg"
              label="Password"
              name="password"
            />
          </div>
          <Button className="mt-6" type="submit" disabled={loading} fullWidth>
            {loading ? `Loading...` : `Sing Up`}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            New Admin Account?{" "}
            <Link href="/admin/signin" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </main>
  );
}
