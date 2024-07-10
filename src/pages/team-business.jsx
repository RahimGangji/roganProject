import SEO from "../components/seo";
import { Wrapper } from "../layout";
import TeamBusinessMain from '../components/team-page-com/team-business';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Team Business'} />
      <TeamBusinessMain/>
    </Wrapper>
  )
}
