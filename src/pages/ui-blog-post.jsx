import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiBlogPost from '../ui/post';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Blog Post'} />
      <UiBlogPost/>
    </Wrapper>
  )
}
