"use client";
import { BlogCard } from "@/components/cards/Blog.Card";
import PageHeader from "@/components/common/PageHeader";

const STATIC_BLOGS=[
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


const Blogs = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...STATIC_BLOGS,...STATIC_BLOGS,...STATIC_BLOGS].map((item, key) => (
              <BlogCard data={item} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
