import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ContactUsAgencyMain from '../components/contact-page-com/contact-us-agency';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact us agency'} />
      <ContactUsAgencyMain/>
    </Wrapper>
  )
}
