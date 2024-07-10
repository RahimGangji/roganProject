import Link from "next/link";
import SEO from "../components/seo";
import { Header, Wrapper } from "../layout";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'404 Page'} />
      <div className="page-404">
        <div className="main-page-wrapper">
          <Header />
          <div className="error-creative-content">
            <div className="inner-wrapper">
              <h2>Page Not Found</h2>
              <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do </p>
              <Link href={'/'}>
                <a className="back-button solid-button-one">Go Back</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
