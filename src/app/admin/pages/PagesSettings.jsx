"use client";
import API from "@/config/API.config";
import { errorMessage } from "@/libs/utils";
import { Alert, Button, Spinner, Typography } from "@material-tailwind/react";
import { useState } from "react";
import useSwr from 'swr';
import PageForm from "./Form";

const TABLE_HEAD = ["Title", "Keyword", "Description", ""];

const TABLE_ROWS = [
  {
    title: "Home",
    keywords: "One, Two, Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, molestias?",
  },
  {
    title: "Contact Us",
    keywords: "One, Two, Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, molestias?",
  },
  {
    title: "About Us",
    keywords: "One, Two, Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, molestias?",
  },
  {
    title: "Blog",
    keywords: "One, Two, Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, molestias?",
  },
  {
    title: "Review",
    keywords: "One, Two, Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, molestias?",
  },
];

const PagesSettings = () => {
  const {data,isLoading,error,mutate}=useSwr('/pages',async(key)=>{
    try {
      const {data}= await API.get(key);
      return data;
    } catch (error) {
      throw errorMessage(error);
    }
  })
  const [editOrCreate,setEditOrCreate]=useState(null);
  const handleClose=()=>setEditOrCreate(null);
  const handleOpen=(data)=>setEditOrCreate(data);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center ">
        <Spinner height={30} width={30} />
      </div>
    );
  }
  return (
    <>
      <section>
        <div className="container-fluid pt-4 flex gap-3 flex-wrap items-center justify-between">
          <h1>Pages Settings</h1>
          <Button variant="gradient" color="blue" onClick={()=>setEditOrCreate(true)}>
              CREATE
          </Button>
        </div>
      </section>

      <section>
        <div className="container-fluid py-5">
          {error && <Alert variant="ghost" color="red">{error}</Alert>}
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
              {data?.map((page, index,array) => {
                const { title, keywords, description }=page;
                const isLast = index === array.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={title}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {title}
                      </Typography>
                    </td>
                    <td
                      className={`${classes} flex gap-1 flex-wrap bg-blue-gray-50/50`}
                    >
                      {keywords.split(", ").map((keyword) => (
                        <Typography
                          className="text-xs font-normal py-1 px-2 rounded-md bg-black text-white"
                        >
                          {keyword}
                        </Typography>
                      ))}
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {description}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                        onClick={()=>setEditOrCreate(page)}
                      >
                        Edit
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* MODAL */}
      <PageForm onSuccess={()=>mutate(data)} page={editOrCreate} open={!!editOrCreate} handleClose={()=>setEditOrCreate(null)} />
    </>
  );
};

export default PagesSettings;
