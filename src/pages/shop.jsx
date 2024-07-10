import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ShopMain from '../components/shop/shop-standard';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop'} />
      <ShopMain/>
    </Wrapper>
  )
}
