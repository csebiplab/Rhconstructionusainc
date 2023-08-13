import { PageWrapper } from "@/components/Theme";
import About from "./About";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <main>
      <PageWrapper>
        <About />
      </PageWrapper>
    </main>
  );
}
