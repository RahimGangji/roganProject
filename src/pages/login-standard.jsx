import SEO from "../components/seo";
import { Wrapper } from "../layout";
import LoginStandardMain from '../components/login-page-com/login-standard';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Login Standard'} />
      <LoginStandardMain/>
    </Wrapper>
  )
}
