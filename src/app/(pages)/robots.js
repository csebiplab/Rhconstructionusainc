import { robotTxt } from "@/config/api.endpoints";
import axios from "axios";

export default async function robots() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LIVE_API}/api${robotTxt}`);
        const robotTxts = response?.data?.robotTxts ?? [];

        const formattedData = robotTxts?.map((singleRobot) => ({
            userAgent: singleRobot?.user_agent,
            allow: singleRobot?.allow,
            disallow: singleRobot?.disallow,
        }));


        return {
            rules: formattedData?.length > 0 ? formattedData : null,
            sitemap: robotTxts[0]?.sitemap_url,
        }

    } catch (error) {
        console.error("Error fetching robot.txt data:", error);
        return null;
    }
}
