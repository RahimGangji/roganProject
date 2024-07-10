import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ShopFullWidthMain from '../components/shop/product-full-width';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop Full Width'} />
      <ShopFullWidthMain/>
    </Wrapper>
  )
}
