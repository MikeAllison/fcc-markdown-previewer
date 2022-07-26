import React from 'react';
import './Previewer.css';

const Previewer = (props) => {
  return (
    <React.Fragment>
      <h1>Preview</h1>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: props.enteredText }}
      ></div>
    </React.Fragment>
  );
};

export default Previewer;
