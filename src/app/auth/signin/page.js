"use client";

import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function () {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  async function onSubmit(data) {
    try {
      setLoading(true);
      // Removed Firebase authentication code
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
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your credentials to sign in
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              {...register("username", { required: true })}
              type="text"
              size="lg"
              label="User Name"
              name="username"
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
            {loading ? `Loading...` : `Sing In`}
          </Button>
        </form>
      </Card>
    </main>
  );
}
