import SEO from "../components/seo";
import { Wrapper } from "../layout";
import FaqMain from '../components/faq-page-com';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Faq'} />
      <FaqMain/>
    </Wrapper>
  )
}
