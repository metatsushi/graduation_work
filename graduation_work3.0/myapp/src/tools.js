// tools.js
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
// import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import NestedList from '@editorjs/nested-list'
import DragDrop from 'editorjs-drag-drop'
import Personality from '@editorjs/personality'
import Checklist from '@editorjs/checklist'

export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
//   paragraph: Paragraph,
  embed: Embed,
  table: {
    class: Table,
    inlineToolbar: true,
    },
  list: {
    class: NestedList,
    inlineToolbar: true,
    },
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  personality: {
    class: Personality,
    config: {
      endpoint: 'http://localhost:8008/uploadFile'  // Your backend file uploader endpoint
    }
  } 
  
}
