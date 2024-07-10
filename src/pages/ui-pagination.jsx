import SEO from "../components/seo";
import { Wrapper } from "../layout";
import UiPagination from '../ui/ui-pagination';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ui Pagination'} />
      <UiPagination/>
    </Wrapper>
  )
}
