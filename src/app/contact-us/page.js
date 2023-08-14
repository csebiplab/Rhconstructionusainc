import { PageWrapper } from "@/components/Theme";
import ContactUs from "./ContactUs";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <main>
      <PageWrapper>
        <ContactUs />
      </PageWrapper>
    </main>
  );
}
