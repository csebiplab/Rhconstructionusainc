"use client";
import { Typography } from "@material-tailwind/react";

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
  return (
    <>
      <section>
        <div className="container-fluid pt-4">
          <h1>Pages Settings</h1>
        </div>
      </section>

      <section>
        <div className="container-fluid py-5">
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
              {TABLE_ROWS.map(({ title, keywords, description }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
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
    </>
  );
};

export default PagesSettings;
