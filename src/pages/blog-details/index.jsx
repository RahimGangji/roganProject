import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import BlogDetailsMain from '../../components/blog-page-com/blog-details';
import { blog_data } from "../../data";

const blog = blog_data[0]

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details'} />
      <BlogDetailsMain blog={blog} />
    </Wrapper>
  )
}


