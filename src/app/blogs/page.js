import { PageWrapper } from "@/components/Theme";
import Blogs from "./Blogs";

export const metadata = {
  title: "Blogs",
};

export default function Page() {
  return (
    <main>
      <PageWrapper>
        <Blogs />
      </PageWrapper>
    </main>
  );
}
