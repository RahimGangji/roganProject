import SEO from "../components/seo";
import { Wrapper } from "../layout";
import BlogFullGridMain from '../components/blog-page-com/blog-full-grid';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Full Grid'} />
      <BlogFullGridMain/>
    </Wrapper>
  )
}
