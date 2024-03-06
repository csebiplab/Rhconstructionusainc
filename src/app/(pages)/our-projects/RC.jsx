"use client";
import PageHeader from "@/components/common/PageHeader";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const IMAGES = [
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-2.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-3.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-4.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-5.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-6.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-7.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-8.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-11.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-12.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-13.png",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-14.png",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-15.png",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-16.png",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-17.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-18.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-19.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-20.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-21.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-22.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-23.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-24.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-25.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-26.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-27.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-28.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-29.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-30.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-31.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-32.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-33.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-34.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-35.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-36.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-37.jpeg",
  "https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-1.jpeg",
];

const Notice = () => {
  return (
    <>
      <PageHeader
        title="Our Projects Gallery"
        bg="url(/assets/images/contact-us.webp)"
        page={{
          title: "Our Projects",
          route: "/our-projects",
        }}
      />

      <section className="py-16">
        <div className="container">
          <Gallery>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {IMAGES.map((item) => (
                <Item original={item} thumbnail={item} width={'100%'} height={'100%'}>
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={item} className="object-cover" />
                  )}
                </Item>
              ))}
            </div>
          </Gallery>
        </div>
      </section>
    </>
  );
};

export default Notice;
