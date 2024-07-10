import SEO from "../components/seo";
import { Wrapper } from "../layout";
import HomeFourMain from "../components/homes/home-4";

export default function HomeFour() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Four'} />
      <HomeFourMain/>
    </Wrapper>
  )
}
