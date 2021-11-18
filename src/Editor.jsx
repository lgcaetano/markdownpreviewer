export default function Editor(props){
    return (
        <div className="">
            <textarea name="editor" id="editor" cols="30" rows="30"
            onChange={props.editorChange} value={props.value}></textarea>
        </div>
    )
}