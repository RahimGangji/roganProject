import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiGallery from '../ui/gallery';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Gallery'} />
      <UiGallery/>
    </Wrapper>
  )
}
