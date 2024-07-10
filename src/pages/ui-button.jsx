import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiButton from '../ui/buttons';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Button'} />
      <UiButton/>
    </Wrapper>
  )
}
