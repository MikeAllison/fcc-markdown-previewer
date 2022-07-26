import React from 'react';
import './Editor.css';

const Editor = (props) => {
  return (
    <React.Fragment>
      <textarea id="editor" onChange={props.onEditText}></textarea>
    </React.Fragment>
  );
};

export default Editor;
