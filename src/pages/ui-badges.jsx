import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiBadges from '../ui/badges';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Badges'} />
      <UiBadges/>
    </Wrapper>
  )
}
