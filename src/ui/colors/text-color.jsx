import React from 'react';

const TextColor = () => {
  return (
    <div className="element-section mb-150">
				<div className="container">
					<div className="element-tile-two">Text Color</div>
					<p className="pb-70">Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.</p>

					<p className="text-primary">.text-primary</p> <br/>
					<p className="text-secondary">.text-secondary</p> <br/>
					<p className="text-success">.text-success</p> <br/>
					<p className="text-danger">.text-danger</p> <br/>
					<p className="text-warning">.text-warning</p> <br/>
					<p className="text-info">.text-info</p> <br/>
					<p className="text-light bg-dark">.text-light</p> <br/>
					<p className="text-dark">.text-dark</p> <br/>
					<p className="text-muted">.text-muted</p> <br/>
					<p className="text-white bg-dark">.text-white</p>

					<div className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{`"text-primary"`}</span><span className="nt">&gt;</span>.text-primary<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{`"text-secondary"`}</span><span className="nt">&gt;</span>.text-secondary<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{`"text-success"`}</span><span className="nt">&gt;</span>.text-success<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{`"text-danger"`}</span><span className="nt">&gt;</span>.text-danger<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{"text-warning"}</span><span className="nt">&gt;</span>.text-warning<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{"text-info"}</span><span className="nt">&gt;</span>.text-info<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{"text-light bg-dark"}</span><span className="nt">&gt;</span>.text-light<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{"text-dark"}</span><span className="nt">&gt;</span>.text-dark<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{"text-muted"}</span><span className="nt">&gt;</span>.text-muted<span className="nt">&lt;/p&gt;</span><br/>
<span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">{"text-white bg-dark"}</span><span className="nt">&gt;</span>.text-white<span className="nt">&lt;/p&gt;</span></code></pre></div>


				<p className="pb-70">Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code className="highlighter-rouge">.text-white</code> and <code className="highlighter-rouge">.text-muted</code> class has no link styling.</strong></p>

				<p><a href={`"#"`} className="text-primary">Primary link</a></p> <br/>
				<p><a href={`"#"`} className="text-secondary">Secondary link</a></p> <br/>
				<p><a href={`"#"`} className="text-success">Success link</a></p> <br/>
				<p><a href={`"#"`} className="text-danger">Danger link</a></p> <br/>
				<p><a href={`"#"`} className="text-warning">Warning link</a></p> <br/>
				<p><a href={`"#"`} className="text-info">Info link</a></p> <br/>
				<p><a href={`"#"`} className="text-light bg-dark">Light link</a></p> <br/>
				<p><a href={`"#"`} className="text-dark">Dark link</a></p> <br/>
				<p><a href={`"#"`} className="text-muted">Muted link</a></p> <br/>
				<p><a href={`"#"`} className="text-white bg-dark">White link</a></p>

				<div className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">{`"#"`}</span> <span className="na">className=</span><span className="s">{`"text-primary"`}</span><span className="nt">&gt;</span>Primary link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span><br/>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">{`"#"`}</span> <span className="na">className=</span><span className="s">{`"text-secondary"`}</span><span className="nt">&gt;</span>Secondary link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span><br/>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">{`"#"`}</span> <span className="na">className=</span><span className="s">{`"text-success"`}</span><span className="nt">&gt;</span>Success link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span><br/>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">{`"#"`}</span> <span className="na">className=</span><span className="s">{`"text-danger"`}</span><span className="nt">&gt;</span>Danger link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span><br/>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">{`"#"`}</span> <span className="na">className=</span><span className="s">{`"text-warning"`}</span><span className="nt">&gt;</span>Warning link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span><br/>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">{`"#"`}</span> <span className="na">className=</span><span className="s">{`"text-info"`}</span><span className="nt">&gt;</span>Info link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span><br/>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">{`"#"`}</span> <span className="na">className=</span><span className="s">{`"text-light bg-dark"`}</span><span className="nt">&gt;</span>Light link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span><br/>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">{`"#"`}</span> <span className="na">className=</span><span className="s">{`"text-dark"`}</span><span className="nt">&gt;</span>Dark link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span><br/>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">{`"#"`}</span> <span className="na">className=</span><span className="s">{`"text-muted"`}</span><span className="nt">&gt;</span>Muted link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span><br/>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">{`"#"`}</span> <span className="na">className=</span><span className="s">{`"text-white bg-dark"`}</span><span className="nt">&gt;</span>White link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span></code></pre></div>
				</div> 
			</div>
  );
};

export default TextColor;