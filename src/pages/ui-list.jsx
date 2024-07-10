import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiList from '../ui/lists';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui List'} />
      <UiList/>
    </Wrapper>
  )
}
