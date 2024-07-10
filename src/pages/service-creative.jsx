import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ServiceCreativeMain from '../components/service-page-com/service-creative';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Creative'} />
      <ServiceCreativeMain/>
    </Wrapper>
  )
}
