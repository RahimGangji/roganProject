import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ProjectFullWidthMain from '../components/project-page-com/project-full-width';

export default function ProjectFullWidth() {
  return (
    <Wrapper>
      <SEO pageTitle={'Project Full Width'} />
      <ProjectFullWidthMain/>
    </Wrapper>
  )
}
