import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ProjectMasonryGridMain from '../components/project-page-com/project-ms-grid';

export default function ProjectMasonryGrid() {
  return (
    <Wrapper>
      <SEO pageTitle={'Project Masonry Grid'} />
      <ProjectMasonryGridMain/>
    </Wrapper>
  )
}
