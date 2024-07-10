import SEO from "../components/seo";
import { Wrapper } from "../layout";
import TeamMinimalMain from '../components/team-page-com/team-minimal';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Team Minimal'} />
      <TeamMinimalMain/>
    </Wrapper>
  )
}
