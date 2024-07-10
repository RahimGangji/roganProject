import React from 'react';

const BackgroundColor = () => {
  return (
    <div className="element-section mb-150">
				<div className="container">
					<div className="element-tile-two">Background color</div>
					<p className="pb-70">Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code className="highlighter-rouge">color</code></strong>, so in some cases you’ll want to use <code className="highlighter-rouge">.text-*</code> utilities.</p>


					<div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
					<div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
					<div className="p-3 mb-2 bg-success text-white">.bg-success</div>
					<div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
					<div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
					<div className="p-3 mb-2 bg-info text-white">.bg-info</div>
					<div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
					<div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
					<div className="p-3 mb-2 bg-white text-dark">.bg-white</div>

					<div className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"p-3 mb-2 bg-primary text-white"`}</span><span className="nt">&gt;</span>.bg-primary<span className="nt">&lt;/div&gt;</span><br/>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"p-3 mb-2 bg-secondary text-white"`}</span><span className="nt">&gt;</span>.bg-secondary<span className="nt">&lt;/div&gt;</span><br/>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"p-3 mb-2 bg-success text-white"`}</span><span className="nt">&gt;</span>.bg-success<span className="nt">&lt;/div&gt;</span><br/>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"p-3 mb-2 bg-danger text-white"`}</span><span className="nt">&gt;</span>.bg-danger<span className="nt">&lt;/div&gt;</span><br/>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"p-3 mb-2 bg-warning text-dark"`}</span><span className="nt">&gt;</span>.bg-warning<span className="nt">&lt;/div&gt;</span><br/>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"p-3 mb-2 bg-info text-white"`}</span><span className="nt">&gt;</span>.bg-info<span className="nt">&lt;/div&gt;</span><br/>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"p-3 mb-2 bg-light text-dark"`}</span><span className="nt">&gt;</span>.bg-light<span className="nt">&lt;/div&gt;</span><br/>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"p-3 mb-2 bg-dark text-white"`}</span><span className="nt">&gt;</span>.bg-dark<span className="nt">&lt;/div&gt;</span><br/>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">{`"p-3 mb-2 bg-white text-dark"`}</span><span className="nt">&gt;</span>.bg-white<span className="nt">&lt;/div&gt;</span></code></pre></div>
				</div>
			</div>
  );
};

export default BackgroundColor;