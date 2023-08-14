import { PageWrapper } from "@/components/Theme";
import Notice from "./Notice";

export const metadata = {
  title: "Notice",
};

export default function Page() {
  return (
    <main>
      <PageWrapper>
        <Notice />
      </PageWrapper>
    </main>
  );
}
