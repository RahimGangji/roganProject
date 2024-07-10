import { Wrapper } from "../../layout";
import BlogDetailsMain from '../../components/blog-page-com/blog-details';
import { blog_data } from "../../data";
import SEO from "../../components/seo";
import { useRouter } from "next/router";

export default function DynamicBlogDetails() {
  const router = useRouter();
  const {id} = router.query;
  const blog = blog_data.find(item => Number(item.id) === Number(id))
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details'} />
      <BlogDetailsMain blog={blog} />
    </Wrapper>
  )
}


export async function getServerSideProps(context) {
  return {
      props: {},
  };
}