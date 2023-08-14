import { PageWrapper } from "@/components/Theme";
import CustomerReviews from "./CustomerReviews";

export const metadata = {
  title: "Customer Reviews",
};

export default function Page() {
  return (
    <main>
      <PageWrapper>
        <CustomerReviews />
      </PageWrapper>
    </main>
  );
}
