import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ProjectStandardMain from '../components/project-page-com/project-standard';

export default function ProjectStandard() {
  return (
    <Wrapper>
      <SEO pageTitle={'Project Standard'} />
      <ProjectStandardMain/>
    </Wrapper>
  )
}
