import SEO from "../components/seo";
import { Wrapper } from "../layout";
import BlogDefaultMain from '../components/blog-page-com/blog-default';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Default'} />
      <BlogDefaultMain/>
    </Wrapper>
  )
}
