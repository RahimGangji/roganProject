import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ShopWithSidebarMain from '../components/shop/shop-with-sidebar';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop Width Sidebar'} />
      <ShopWithSidebarMain/>
    </Wrapper>
  )
}
