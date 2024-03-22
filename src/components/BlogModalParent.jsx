// Parent component
import BlogModal from "./BlogModal";
import bgImg1 from "../assets/image/blog-model-img1.png";
import bgImg2 from "../assets/image/blog-model-img2.png";
import bgImg3 from "../assets/image/blog-model-img3.png";
const BlogModalParent = () => {
  const blogData = [
    {
      id: "blog-model-1",
      author: "Elina Parker",
      date: "Mar 8, 2022",
      title: "Quis autem vea eum iure reprehenderit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.",
      imgSrc: bgImg1,
    },
    {
      id: "blog-model-2",
      author: "Elina Parker",
      date: "Mar 9, 2022",
      title: "Reprehenderit in vouta velit esse cillum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.",
      imgSrc: bgImg2,
    },
    {
      id: "blog-model-3",
      author: "Elina Parker",
      date: "Mar 10, 2022",
      title: "Soluta nobis ose aligen optio cumue",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.",
      imgSrc: bgImg3,
    },
  ];

  return (
    <>
      {blogData.map((blog) => (
        <BlogModal
          key={blog.id}
          id={blog.id}
          author={blog.author}
          date={blog.date}
          title={blog.title}
          content={blog.content}
          imageSrc={blog.imgSrc}
        />
      ))}
    </>
  );
};

export default BlogModalParent;
