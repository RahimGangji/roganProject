import SEO from "../components/seo";
import { Wrapper } from "../layout";
import CheckoutMain from '../components/checkout';

export default function Checkout() {
  return (
    <Wrapper>
      <SEO pageTitle={'Checkout'} />
      <CheckoutMain/>
    </Wrapper>
  )
}
