
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";

const ReactEditorJS = createReactEditorJS();

// const save = document.getElementById('save');
// save.addEventListener('click', () => {
//    alert("クリックされました"); 
   
//   ReactEditorJS.save().then((outputData) => {
//   console.log('Article data: ', outputData)
//   }).catch((error) => {
//   console.log('Saving failed: ', error)
//   });
// });

class ReactEditor extends Component {
  render() {
    return (
      <React.Fragment>
      <ReactEditorJS
        holder='editor'
        tools={EDITOR_JS_TOOLS}
        defaultValue={{ blocks: [ ] }}
      />
      </React.Fragment>
    );
  }
}

  

 

ReactDOM.render(<ReactEditor />, document.getElementById("root"));
