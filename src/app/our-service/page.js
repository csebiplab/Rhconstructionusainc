import { PageWrapper } from "@/components/Theme";
import OurService from "./OurService";

export const metadata = {
  title: "Our Service",
};

export default function Page() {
  return (
    <main>
      <PageWrapper>
        <OurService />
      </PageWrapper>
    </main>
  );
}
