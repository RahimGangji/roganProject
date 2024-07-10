import SEO from "../components/seo";
import { Wrapper } from "../layout";
import HomeEightMain from "../components/homes/home-8";

export default function HomeEight() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Eight'} />
      <HomeEightMain/>
    </Wrapper>
  )
}
