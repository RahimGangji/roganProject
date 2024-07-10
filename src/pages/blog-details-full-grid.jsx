import SEO from "../components/seo";
import { Wrapper } from "../layout";
import BlogFullGridDetailsMain from '../components/blog-page-com/blog-details-full-grid';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details Full Grid'} />
      <BlogFullGridDetailsMain/>
    </Wrapper>
  )
}
