import SEO from "../components/seo";
import { Wrapper } from "../layout";
import HomeSixMain from "../components/homes/home-6";

export default function HomeSix() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Six'} />
      <HomeSixMain/>
    </Wrapper>
  )
}
