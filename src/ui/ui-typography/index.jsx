import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Typography'} />
      {/* heading style start */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Heading Style</div>
          <h1 className="h1">Default Heading .h1</h1>
          <h2 className="h2 pt-15">Default Heading .h2</h2>
          <h3 className="h3 pt-15">Default Heading .h3</h3>
          <h4 className="h4 pt-15">Default Heading .h4</h4>
          <h5 className="h5 pt-15">Default Heading .h5</h5>
          <h6 className="h6 pt-15">Default Heading .h6</h6>
        </div>
      </div>
      {/* heading style end */}

      {/* display heading style start */}
      <div className="element-section mb-150">
				<div className="container">
					<div className="element-tile-two">Display Heading Styles</div>
					<p className="pb-70">Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <b>display heading</b>—a larger, slightly more opinionated heading style.</p>
					<h1 className="display-1">Display 1</h1>
					<h1 className="display-2 pt-15">Display 2</h1>
					<h1 className="display-3 pt-15">Display 3</h1>
					<h1 className="display-4 pt-15">Display 4</h1>
				</div>
			</div>
      {/* display heading style end */}

      {/* inline text element start */}
      <div className="element-section mb-150">
				<div className="container">
					<div className="element-tile-two">Inline text elements</div>
					<p className="pb-70">Styling for common inline HTML5 elements.</p>

					<p>You can use the mark tag to <mark>highlight</mark> text. <code>{`className="mark"`}</code></p> <br/>
					<p><del>This line of text is meant to be treated as deleted text.</del> <code>{`className="del"`}</code></p> <br/>
					<p><s>This line of text is meant to be treated as no longer accurate.</s> <code>{`className="s"`}</code></p> <br/>
					<p><ins>This line of text is meant to be treated as an addition to the document.</ins> <code>{`className="ins"`}</code></p><br/>
					<p><u>This line of text will render as underlined</u> <code>{`className="u"`}</code></p> <br/>
					<p><small>This line of text is meant to be treated as fine print.</small> <code>{`className="small"`}</code></p> <br/>
					<p><strong>This line rendered as bold text.</strong> <code>{`className="strong"`}</code></p> <br/>
					<p><em>This line rendered as italicized text.</em> <code>{`className="em"`}</code></p>
				</div>
			</div>
      {/* inline text element end */}

      {/* text alignment start */}
      <div className="element-section mb-150">
				<div className="container">
					<div className="element-tile-two">Text alignment</div>
					<p className="pb-70">Easily realign text to components with text alignment classes.</p>

					<p className="text-start">Left aligned text. <code>{`className="text-start"`}</code></p> <br/>
					<p className="text-center">Center aligned text. <code>{`className="text-center"`}</code></p> <br/>
					<p className="text-end">Right aligned text. <code>{`className="text-end"`}</code></p> <br/>
					<p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum. <code>{`className="text-justify"`}</code></p>
				</div>
			</div>
      {/* text alignment end */}

      {/* text wrapping style start */}
      <div className="element-section mb-150">
				<div className="container">
					<div className="element-tile-two">Text wrapping and overflow</div>
					<p className="pb-70">For longer content, you can add a <code className="highlighter-rouge">.text-truncate</code> class to truncate the text with an ellipsis. <strong>Requires <code className="highlighter-rouge">display: inline-block</code> or <code className="highlighter-rouge">display: block</code>.</strong></p>

					{/* <!-- Block level --> */}
					<div className="row">
					  <div className="col-2 text-truncate">
					    Praeterea iter est quasdam res quas ex communi.
					  </div>
					</div>

					{/* <!-- Inline level --> */}
					<span className="d-inline-block text-truncate" style={{maxWidth:'150px'}}>
					  Praeterea iter est quasdam res quas ex communi.
					</span>

					<div className="highlight">
	<pre>
	<code className="language-html" data-lang="html">
<span className="c">&lt;!-- Block level --&gt;</span><br/>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"row"`}</span><span className="nt">&gt;</span><br/>
	<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"col-2 text-truncate"`}</span><span className="nt">&gt;</span><br/>
		         Praeterea iter est quasdam res quas ex communi.<br/>
	<span className="nt">&lt;/div&gt;</span><br/>
<span className="nt">&lt;/div&gt;</span><br/>

<span className="c">&lt;!-- Inline level --&gt;</span><br/>
<span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">{`"d-inline-block text-truncate"`}</span> <span className="na">style=</span><span className="s">{`{{maxWidth: '150px'}}`}</span><span className="nt">&gt;</span><br/>
	Praeterea iter est quasdam res quas ex communi.<br/>
<span className="nt">&lt;/span&gt;</span>
	</code>
	</pre>
					</div>
				</div>
			</div>
      {/* text wrapping style end */}

      {/* text transform start */}
      <div className="element-section mb-150">
				<div className="container">
					<div className="element-tile-two">Text transform</div>
					<p className="pb-70">Transform text in components with text capitalization classes.</p>

					<p className="text-lowercase">Lowercased text.</p> <br/>
					<p className="text-uppercase">Uppercased text.</p> <br/>
					<p className="text-capitalize">CapiTaliZed text.</p>

<div className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{`"text-lowercase"`}</span><span className="nt">&gt;</span>Lowercased text.<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{`"text-uppercase"`}</span><span className="nt">&gt;</span>Uppercased text.<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{`"text-capitalize"`}</span><span className="nt">&gt;</span>CapiTaliZed text.<span className="nt">&lt;/p&gt;</span></code></pre></div>
				</div>
			</div>
      {/* text transform end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;