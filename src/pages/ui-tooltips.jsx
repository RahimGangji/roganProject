import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiTooltips from '../ui/tooltip';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Testimonial'} />
      <UiTooltips/>
    </Wrapper>
  )
}
