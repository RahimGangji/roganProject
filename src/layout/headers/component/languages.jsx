import React from 'react';

const Languages = () => {
  return (
    <ul className="ct-language__dropdown">
      <li><a href="#googtrans(en|en)" className="lang-en lang-select" data-lang="en">USA</a></li>
      <li><a href="#googtrans(en|es)" className="lang-es lang-select" data-lang="es">MEXICO</a></li>
      <li><a href="#googtrans(en|fr)" className="lang-es lang-select" data-lang="fr">FRANCE</a></li>
      <li><a href="#googtrans(en|zh-CN)" className="lang-es lang-select" data-lang="zh-CN">CHINA</a></li>
      <li><a href="#googtrans(en|de)" className="lang-es lang-select" data-lang="de">German</a></li>
      <li><a href="#googtrans(en|hi)" className="lang-es lang-select" data-lang="hi">Hindi</a></li>
    </ul>
  );
};

export default Languages;