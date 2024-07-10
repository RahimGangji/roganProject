import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiTabs from '../ui/ui-tabs';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Tabs'} />
      <UiTabs/>
    </Wrapper>
  )
}
