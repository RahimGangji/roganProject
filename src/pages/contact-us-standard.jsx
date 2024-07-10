import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ContactUsStandardMain from '../components/contact-page-com/contact-us-standard';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact us standard'} />
      <ContactUsStandardMain/>
    </Wrapper>
  )
}
