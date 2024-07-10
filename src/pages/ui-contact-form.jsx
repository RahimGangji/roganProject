import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiContactForm from '../ui/contact-form';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Contact Form'} />
      <UiContactForm/>
    </Wrapper>
  )
}
