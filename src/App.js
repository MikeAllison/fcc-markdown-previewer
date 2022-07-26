import { marked } from 'marked';
import { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './styles.css';

export default function App() {
  const initialText =
    '# h1\n## h2\n[links](https://www.freecodecamp.org)\n\n`<div></div>`\n```\nfunction codeBlock(param){\n  console.log(param)\n}\n```\n- List Item\n\n> Block Quotes!\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n**bold**';

  const [enteredText, setEnteredText] = useState(marked.parse(initialText));

  const textChangeHandler = (e) => {
    const html = marked.parse(e.currentTarget.value);
    setEnteredText(html);
  };

  return (
    <div className="App">
      <Editor onEditText={textChangeHandler} />
      <Previewer enteredText={enteredText} />
    </div>
  );
}
