import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiTeam from '../ui/team';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Team'} />
      <UiTeam/>
    </Wrapper>
  )
}
