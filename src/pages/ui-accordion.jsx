import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiAccordion from '../ui/accordion';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Accordion'} />
      <UiAccordion/>
    </Wrapper>
  )
}
