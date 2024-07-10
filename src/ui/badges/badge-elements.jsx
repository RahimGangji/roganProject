import React from 'react';

const BadgeElements = () => {
  return (
    <div className="element-section mb-150">
      <div className="container">
        <p className="pb-70">Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>
        <h1>Example heading <span className="badge bg-secondary">New</span></h1>
        <h2>Example heading <span className="badge bg-secondary">New</span></h2>
        <h3>Example heading <span className="badge bg-secondary">New</span></h3>
        <h4>Example heading <span className="badge bg-secondary">New</span></h4>
        <h5>Example heading <span className="badge bg-secondary">New</span></h5>
        <h6>Example heading <span className="badge bg-secondary">New</span></h6>

        <figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;h1&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">{`"badge badge-secondary"`}</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h1&gt;</span><br />
          <span className="nt">&lt;h2&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">{`"badge bg-secondary"`}</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h2&gt;</span><br />
          <span className="nt">&lt;h3&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">{`"badge bg-secondary"`}</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h3&gt;</span><br />
          <span className="nt">&lt;h4&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">{`"badge bg-secondary"`}</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h4&gt;</span><br />
          <span className="nt">&lt;h5&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">{`"badge bg-secondary"`}</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h5&gt;</span><br />
          <span className="nt">&lt;h6&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">{`"badge bg-secondary"`}</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h6&gt;</span></code></pre></figure>


        <p className="pb-70">Badges can be used as part of links or buttons to provide a counter.</p>
        <button type="button" className="btn btn-primary">
          Notifications <span className="badge text-bg-secondary">4</span>
        </button>

        <div className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">{`"button"`}</span> <span className="na">className=</span><span className="s">{`"btn btn-primary"`}</span><span className="nt">&gt;</span>
          Message <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">{`"badge text-bg-secondary"`}</span><span className="nt">&gt;</span>4<span className="nt">&lt;/span&gt;</span>
          <span className="nt">&lt;/button&gt;</span></code></pre></div>


      </div>
    </div>
  );
};

export default BadgeElements;