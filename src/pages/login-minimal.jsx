import SEO from "../components/seo";
import { Wrapper } from "../layout";
import LoginMinimalMain from '../components/login-page-com/login-minimal';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Login Standard'} />
      <LoginMinimalMain/>
    </Wrapper>
  )
}
