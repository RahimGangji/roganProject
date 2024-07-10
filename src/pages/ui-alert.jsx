import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiAlert from '../ui/alert';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Alert'} />
      <UiAlert/>
    </Wrapper>
  )
}
