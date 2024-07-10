import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import ProjectDetailsStandardMain from '../../components/project-details-page-com/project-standard-details';
import { project_standard } from "../../data";

const projectItem = project_standard[0];

export default function ProjectDetailsStandard() {
  return (
    <Wrapper>
      <SEO pageTitle={'Project Details Standard'} />
      <ProjectDetailsStandardMain item={projectItem}/>
    </Wrapper>
  )
}
