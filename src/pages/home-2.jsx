import SEO from "../components/seo";
import { Wrapper } from "../layout";
import HomeTwoMain from "../components/homes/home-2";

export default function HomeTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Two'} />
      <HomeTwoMain/>
    </Wrapper>
  )
}
