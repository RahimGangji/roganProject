import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiModal from '../ui/ui-modal';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Modal'} />
      <UiModal/>
    </Wrapper>
  )
}
