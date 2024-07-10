import SEO from "../components/seo";
import { Wrapper } from "../layout";
import BlogMasonryMain from '../components/blog-page-com/blog-masonry';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Full Grid'} />
      <BlogMasonryMain/>
    </Wrapper>
  )
}
