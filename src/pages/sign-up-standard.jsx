import SEO from "../components/seo";
import { Wrapper } from "../layout";
import SignUpStandardMain from '../components/login-page-com/sign-up-standard';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Sign Up Standard'} />
      <SignUpStandardMain/>
    </Wrapper>
  )
}
