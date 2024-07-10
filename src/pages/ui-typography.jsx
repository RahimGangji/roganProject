import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiTypography from '../ui/ui-typography';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Typography'} />
      <UiTypography/>
    </Wrapper>
  )
}
