import BlogHeroGrid from "@/components/BlogHeroGrid/BlogHeroGrid";

const Layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="big-container">
      <h1 className="heading">Featured Articles</h1>
      <BlogHeroGrid />
      {children}
    </section>
  );
};

export default Layout;
