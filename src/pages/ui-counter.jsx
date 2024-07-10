import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiCounter from '../ui/counter';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Counter'} />
      <UiCounter/>
    </Wrapper>
  )
}
