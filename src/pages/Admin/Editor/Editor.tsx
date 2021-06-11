import React from "react"
import ReactQuill from "react-quill"
import EditorToolbar, { modules, formats } from "../Editor/EditorToolBar"
import "react-quill/dist/quill.snow.css"

const Editor = props => {
  const [state, setState] = React.useState({ value: "" })
  const handleChange = value => {
    setState({ value })
    props.parentCallback(value)
  }

  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
  )
}

export default Editor
