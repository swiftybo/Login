import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <main className="background">
      <section className="content with-blur">
        <Outlet />
      </section>
    </main>
  );
}
