const SingleBlog = ({ params }: { params: { blogId: string } }) => {
  return (
    <>
      <h1>View a particular blog posts</h1>
      <p>The id of the blog post is {params.blogId}</p>
    </>
  );
};

export default SingleBlog;
