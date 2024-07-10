import SEO from "../components/seo";
import { Wrapper } from "../layout";
import BlogFilterMain from '../components/blog-page-com/blog-filter';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Filter'} />
      <BlogFilterMain/>
    </Wrapper>
  )
}
