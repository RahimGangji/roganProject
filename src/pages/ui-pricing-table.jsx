import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiPricingTable from '../ui/ui-pricing';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Pricing Table'} />
      <UiPricingTable/>
    </Wrapper>
  )
}
