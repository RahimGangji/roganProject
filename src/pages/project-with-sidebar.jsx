import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ProjectWithSidebarMain from '../components/project-page-com/project-with-sidebar';

export default function ProjectWithSidebar() {
  return (
    <Wrapper>
      <SEO pageTitle={'Project With Sidebar'} />
      <ProjectWithSidebarMain/>
    </Wrapper>
  )
}
