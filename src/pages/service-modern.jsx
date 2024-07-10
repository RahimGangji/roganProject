import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ServiceModernMain from '../components/service-page-com/service-modern';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Modern'} />
      <ServiceModernMain/>
    </Wrapper>
  )
}
