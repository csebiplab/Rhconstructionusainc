"use client";
import API from "@/config/API.config";
import firebase_app from "@/config/firebase";
import { errorMessage } from "@/libs/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  DocumentPlusIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Input,
  Spinner,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import Swal from "sweetalert2";
import useSwr from "swr";

const TABLE_HEAD = [
  "ID",
  "Title",
  "Banner",
  "keywords",
  "Description",
  "Blog",
  "Action",
];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

export default function AdminBlogs() {
  const { data, error, isLoading,mutate } = useSwr("/blogs", async (key) => {
    try {
      const { data } = await API.get(key);
      return data;
    } catch (error) {
      throw errorMessage(error);
    }
  });

  async function onDelete(id) {
    try {
      const { isConfirmed } = await Swal.fire({
        title: "Want to delete?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
      });
      if (!isConfirmed) return;
      await API.delete(`/blogs/${id}`,{
        headers:{
          Authorization: getAuth(firebase_app)?.currentUser?.accessToken
        }
      });
      Swal.fire({
        title: "Deleted",
        icon: "success",
      });
      mutate(data,{revalidate:true})
    } catch (error) {
      Swal.fire({
        title: "Failed",
        icon: "error",
        text: errorMessage(error),
      });
    }
  }

  return (
    <section>
      <div className="container-fluid">
        <Card className="h-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Manage Blogs
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  See information about all blogs
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link href="/admin/blogs/create">
                  <Button className="flex items-center gap-3" size="sm">
                    <DocumentPlusIcon strokeWidth={2} className="h-4 w-4" />
                    Create Blogs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            {error && (
              <Alert variant="ghost" color="red">
                {error}
              </Alert>
            )}
            {isLoading ? (
              <div className="py-10 text-center">
                <Spinner />
              </div>
            ) : (
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 font-semibold"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((item, index) => {
                    const isLast = index === data.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Typography>{item?.id}</Typography>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {item?.title}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {item?.slug}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item?.banner}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max flex gap-1 flex-wrap">
                            {(item?.keywords || "")
                              ?.split(",")
                              ?.filter((e) => !!e)
                              .map((e) => (
                                <span className="text-white bg-black px-2 py-1 text-xs rounded-lg">
                                  {e}
                                </span>
                              ))}
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {(item?.description || "").slice(0, 50)}...
                          </Typography>
                        </td>
                        <td className={`${classes} gap-1 flex flex-wrap`}>
                          <Tooltip content="Edit">
                            <Link href={`/admin/blogs/${item?.id}`}>
                              <IconButton variant="filled" color="gray">
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Link>
                          </Tooltip>
                          <Tooltip content="Delete">
                            <IconButton
                              variant="filled"
                              color="red"
                              onClick={async () => await onDelete(item?.id)}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          {/* <Tooltip content="Toggle">
                            <IconButton variant="filled" color="yellow">
                              <EyeIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip> */}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page {data?.currentPage} of {data?.pages}
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
