import SEO from "../components/seo";
import { Wrapper } from "../layout";
import AboutUsStandardMain from '../components/about-standard';

export default function AboutUsStandard() {
  return (
    <Wrapper>
      <SEO pageTitle={'About Standard'} />
      <AboutUsStandardMain/>
    </Wrapper>
  )
}
