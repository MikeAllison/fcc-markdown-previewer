import React, { useState } from "react";
import "./Editor.css";

const Editor = (props) => {
  const initialText =
    "# h1\n## h2\n[links](https://www.freecodecamp.org)\n\n`<div></div>`\n\n```\nfunction codeBlock(param){\n  console.log(param)\n}\n```\n- List Item\n\n> Block Quotes!\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n**bold**";

  const [initialEditorText] = useState(initialText);

  return (
    <React.Fragment>
      <h2>Markdown</h2>
      <textarea id="editor" onChange={props.onEditText}>
        {initialEditorText}
      </textarea>
    </React.Fragment>
  );
};

export default Editor;
