import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiBreadcrumbs from '../ui/breadcrumbs';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Breadcrumbs'} />
      <UiBreadcrumbs/>
    </Wrapper>
  )
}
