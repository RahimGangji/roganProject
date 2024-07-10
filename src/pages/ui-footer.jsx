import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiFooter from '../ui/ui-footer';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Footer'} />
      <UiFooter/>
    </Wrapper>
  )
}
