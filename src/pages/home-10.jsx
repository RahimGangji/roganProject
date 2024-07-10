import SEO from "../components/seo";
import { Wrapper } from "../layout";
import HomeTenMain from "../components/homes/home-10";

export default function HomeTen() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Ten'} />
      <HomeTenMain/>
    </Wrapper>
  )
}
