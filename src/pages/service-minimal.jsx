import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ServiceMinimalMain from '../components/service-page-com/service-minimal';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Minimal'} />
      <ServiceMinimalMain/>
    </Wrapper>
  )
}
