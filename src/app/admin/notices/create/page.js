import NoticeForm from "../NoticeForm";

export const metadata = {
  title: "Notices | Admin",
};

export default function () {
  return (
    <main>
      <section>
        <div className="container py-10">
          <h2 className="mb-4"> Create Notice</h2>

          <NoticeForm />
        </div>
      </section>
    </main>
  );
}
