import SEO from "../components/seo";
import { Wrapper } from "../layout";
import HomeFiveMain from "../components/homes/home-5";

export default function HomeFive() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Five'} />
      <HomeFiveMain/>
    </Wrapper>
  )
}
