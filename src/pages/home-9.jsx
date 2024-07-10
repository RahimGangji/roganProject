import SEO from "../components/seo";
import { Wrapper } from "../layout";
import HomeNineMain from "../components/homes/home-9";

export default function HomeNine() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Nine'} />
      <HomeNineMain/>
    </Wrapper>
  )
}
