import { siteMap } from "@/config/api.endpoints";
import axios from "axios";

export default async function sitemap() {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_LIVE_API}/api${siteMap}`);
        const sitemapData = data?.sitemap?.map((singleData) => ({
            url: singleData.url,

            priority: 1,
            changeFrequency: "yearly",
            lastModified: singleData.updatedAt,
        }));
        return sitemapData;
    } catch (error) {
        console.error("Error fetching sitemap data:", error);
        return [];
    }
}
