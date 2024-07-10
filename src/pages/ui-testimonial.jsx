import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiTestimonialMain from '../ui/testimonial';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Testimonial'} />
      <UiTestimonialMain/>
    </Wrapper>
  )
}
