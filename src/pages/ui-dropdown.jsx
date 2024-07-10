import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiDropdown from '../ui/dropdown';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Pricing Table'} />
      <UiDropdown/>
    </Wrapper>
  )
}
