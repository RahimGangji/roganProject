import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ProjectMinimalMain from '../components/project-page-com/project-minimal';

export default function ProjectMinimal() {
  return (
    <Wrapper>
      <SEO pageTitle={'Project Minimal'} />
      <ProjectMinimalMain/>
    </Wrapper>
  )
}
