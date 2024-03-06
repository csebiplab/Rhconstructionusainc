"use client";
import { BlogCard } from "@/components/cards/Blog.Card";
import PageHeader from "@/components/common/PageHeader";
import API from "@/config/API.config";
import { errorMessage } from "@/lib/utils";
import { Alert, Spinner } from "@material-tailwind/react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import useSwr from "swr";

const STATIC_BLOGS = [
  {
    image:
      "https://cdn-hbbgd.nitrocdn.com/GXqlIhyLTtxzkyLSNKUPSPNbPDzoicjF/assets/images/optimized/rev-10a5dd0/www.rhconstructionusa.com/wp-content/uploads/2023/07/af92ceab984ce5619ff2c7c9a9a81e37-jpg.webp",
    title: "How to Smooth Walls Without Plastering: A Handy Guide",
    date: "July 12 2023",
    comment: 0,
    short_story:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis pariatur praesentium necessitatibus ea reiciendis quibusdam?",
  },
  {
    image:
      "https://cdn-hbbgd.nitrocdn.com/GXqlIhyLTtxzkyLSNKUPSPNbPDzoicjF/assets/images/optimized/rev-10a5dd0/www.rhconstructionusa.com/wp-content/uploads/2023/07/siding-styles-2022-beyond-Large-jpeg.webp",
    title: "Walls Without Plastering: A Handy Guide",
    date: "July 12 2023",
    comment: 0,
    short_story:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis pariatur praesentium necessitatibus ea reiciendis quibusdam?",
  },
  {
    image:
      "https://cdn-hbbgd.nitrocdn.com/GXqlIhyLTtxzkyLSNKUPSPNbPDzoicjF/assets/images/optimized/rev-10a5dd0/www.rhconstructionusa.com/wp-content/uploads/2023/07/PergoPOLY-TOPClass-1700px-jpg.webp",
    title: "How to Smooth Walls Without Plastering: A Handy Guide",
    date: "July 12 2023",
    comment: 0,
    short_story:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis pariatur praesentium necessitatibus ea reiciendis quibusdam?",
  },
];

async function getBlogs(props) {
  try {
    const { data } = await API.get(props.end_point, {
      params: props.params,
    });
    return data;
  } catch (error) {
    throw errorMessage(error);
  }
}

const Blogs = () => {
  const [page, setPage] = useState(1);
  const params = { page: page, limit: 20 };
  const { data, error, isLoading } = useSwr(
    { end_point: "/blogs", params },
    getBlogs
  );
  const blogs = Array.isArray(data?.data) ? data?.data : [];
  const total_pages = data?.pages;

  return (
    <>
      <PageHeader
        title="Blogs"
        breadcrumbs={[
          {
            title: "Home",
            route: "/",
          },
        ]}
        page={{
          title: "Blogs",
          route: "/blogs",
        }}
        className="bg-black"
        bg={"url(/assets/images/about-header-bg.webp)"}
      />

      <section>
        <div className="container py-16">
          {error && (
            <Alert variant="ghost" color="red">
              {error}
            </Alert>
          )}
          {isLoading && <Spinner height={30} width={30} />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs?.map((item, key) => (
              <BlogCard data={item} key={key} />
            ))}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={({selected})=>setPage(selected+1)}
            pageRangeDisplayed={3}
            pageCount={total_pages}
            previousLabel="previous"
            renderOnZeroPageCount={null}
            containerClassName="flex items-center space-x-2 flex-wrap py-10 justify-center"
            
            pageLinkClassName="flex h-10 min-w-[2.5rem] px-1 text-sm justify-center items-center rounded-md bg-black/10 hover:bg-black/30"
            breakClassName="px-2 py-1"
            previousClassName="px-2 py-1 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white"
            nextClassName="px-2 py-1 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white"
            activeLinkClassName="bg-blue-500 text-white"
          />
        </div>
      </section>
    </>
  );
};

export default Blogs;
