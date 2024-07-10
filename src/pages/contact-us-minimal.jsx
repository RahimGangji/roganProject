import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ContactUsMinimalMain from '../components/contact-page-com/contact-us-minimal';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact us minimal'} />
      <ContactUsMinimalMain/>
    </Wrapper>
  )
}
