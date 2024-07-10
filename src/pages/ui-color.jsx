import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiColor from '../ui/colors';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Color'} />
      <UiColor/>
    </Wrapper>
  )
}
