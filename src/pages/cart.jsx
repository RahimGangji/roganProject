import SEO from "../components/seo";
import { Wrapper } from "../layout";
import CartMain from '../components/cart';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Checkout'} />
      <CartMain/>
    </Wrapper>
  )
}
