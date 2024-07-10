import SEO from "../components/seo";
import { Wrapper } from "../layout";
import TeamStandardMain from '../components/team-page-com/team-standard';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Team Standard'} />
      <TeamStandardMain/>
    </Wrapper>
  )
}
