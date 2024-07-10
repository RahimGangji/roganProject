import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ProjectMasonryFullWidthMain from '../components/project-page-com/project-ms-full-width';

export default function ProjectMasonryFullWidth() {
  return (
    <Wrapper>
      <SEO pageTitle={'Project Masonry Full Width'} />
      <ProjectMasonryFullWidthMain/>
    </Wrapper>
  )
}
