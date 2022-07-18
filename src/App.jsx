// App.jsx

import React from 'react'
import {stateToHTML} from 'draft-js-export-html';

import {Editor, EditorState, RichUtils} from 'draft-js';
// import Editor as draft_ed from '@draft-js-plugins/editor';
// import createDividerPlugin from '@draft-js-plugins/divider';

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onChange(editorState) {
    this.setState({editorState})
  }

  handleKeyCommand(command) {
    const newState =RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
   }


  render() {
    return <div>
      <h1>Draft.js example</h1>
      <button onMouseDown={(e) => {
        this.onChange(
          RichUtils.toggleInlineStyle(this.state.editorState,"BOLD")
        )
        e.preventDefault()
      }}>Bold</button>
      
      <button onMouseDown={(e) => {
              this.onChange(
                RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC')
              )
              e.preventDefault()
      }}>Italic</button>

      <button onMouseDown={(e) => {
              this.onChange(
                RichUtils.toggleBlockType(this.state.editorState, 'header-two')
              )
              e.preventDefault()
      }}>H2</button>

    <button onMouseDown={(e) => {
              this.onChange(
                RichUtils.toggleBlockType(this.state.editorState, 'blockquote')
              )
              e.preventDefault()
      }}>block</button>

    <button onMouseDown={(e) => {
              this.onChange(
                RichUtils.toggleBlockType(this.state.editorState, 'code-block')
              )
              e.preventDefault()
      }}>code-block</button>
      
      
      <button onMouseDown={(e) => {
        this.onChange(
          RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item')
        )
        e.preventDefault()
      }}>List</button>

      <button onMouseDown={(e) => {
        this.onChange(
          RichUtils.toggleBlockType(this.state.editorState, 'ordered-list-item')
        )
        e.preventDefault()
      }}>OrderList</button>

      <button onMouseDown={(e) => {
        this.onChange(
          RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE')
        )
        e.preventDefault()
      }}>Underline</button>


      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange.bind(this)}
        handleKeyCommand={this.handleKeyCommand.bind(this)}
      />
       <h1>HTML変換</h1>
      <pre>{stateToHTML(this.state.editorState.getCurrentContent())}</pre>
    </div>
  }
}


// render(
//   <MyEditor/>,
//   document.getElementById('app')
// )



