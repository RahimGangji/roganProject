import SEO from "../components/seo";
import { Wrapper } from "../layout";
import FeatureMain from '../components/feature-page-com';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Features'} />
      <FeatureMain/>
    </Wrapper>
  )
}
