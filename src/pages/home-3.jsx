import SEO from "../components/seo";
import { Wrapper } from "../layout";
import HomeThreeMain from "../components/homes/home-3";

export default function HomeThree() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Three'} />
      <HomeThreeMain/>
    </Wrapper>
  )
}
