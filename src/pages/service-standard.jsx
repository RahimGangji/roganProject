import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ServiceStandardMain from '../components/service-page-com/service-standard';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Standard'} />
      <ServiceStandardMain/>
    </Wrapper>
  )
}
