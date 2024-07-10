import SEO from "../components/seo";
import { Wrapper } from "../layout";
import SignUpMinimalMain from '../components/login-page-com/sign-up-minimal';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Sign Up Minimal'} />
      <SignUpMinimalMain/>
    </Wrapper>
  )
}
