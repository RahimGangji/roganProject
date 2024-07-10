import React from 'react';

const ArchForm = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="email" placeholder="Email*" />
      <textarea placeholder="Message"></textarea>
      <button className="theme-button-two">Send</button>
    </form>
  );
};

export default ArchForm;