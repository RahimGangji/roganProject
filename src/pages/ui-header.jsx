import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiHeader from '../ui/ui-header';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Header'} />
      <UiHeader/>
    </Wrapper>
  )
}
