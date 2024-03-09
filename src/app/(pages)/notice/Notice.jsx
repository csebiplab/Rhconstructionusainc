"use client";
import API from "@/config/API.config";
import { errorMessage } from "@/lib/utils";
import {
    BellIcon
} from "@heroicons/react/24/solid";
import {
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography,
} from "@material-tailwind/react";
import useSwr from "swr";

const Notice = () => {
  const { data, error, isLoading } = useSwr("/notices", async (url) => {
    try {
      const { data } = await API.get(url);
      return data;
    } catch (error) {
      throw errorMessage(error);
    }
  });
  return (
    <>
      <section>
        <div className="container text-center py-10">
          <img
            src="/assets/images/notice.png"
            alt="Notice"
            className="h-44 w-44 object-cover object-center mx-auto"
          />
          <h2 className="underline underline-offset-2 decoration-wavy decoration-yellow-900 text-yellow-800 italic">
            <span className="text-primary">IMPORTANT</span> NOTICE!
          </h2>
          <div className="max-w-3xl text-left rounded-lg mx-auto mt-10 p-3 bg-yellow-50 text-primary border border-yellow-300">
            <Timeline>
              {data?.map((item) => (
                <TimelineItem key={item?.id}>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <BellIcon className="h-4 w-4" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      {item?.title}
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <div
                      className="font-normal text-gray-700"
                      dangerouslySetInnerHTML={{ __html: item?.notice }}
                    />
                  </TimelineBody>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notice;
