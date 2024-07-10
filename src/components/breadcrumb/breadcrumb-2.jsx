import React from 'react';

const BreadcrumbTwo = ({title,spacing=true}) => {
  return (
    <div className={`solid-inner-banner ${spacing?'mb-150':''}`}>
      <h2 className="page-title">{title}</h2>
    </div>
  );
};

export default BreadcrumbTwo;