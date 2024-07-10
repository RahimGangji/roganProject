import SEO from "../components/seo";
import { Wrapper } from "../layout";
import HomeMain from "../components/homes/home";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Default'} />
      <HomeMain/>
    </Wrapper>
  )
}
