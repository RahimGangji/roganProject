import SEO from "../components/seo";
import { Wrapper } from "../layout";
import HomeSevenMain from "../components/homes/home-7";

export default function HomeSeven() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Seven'} />
      <HomeSevenMain/>
    </Wrapper>
  )
}
