export default function Previewer(props){
    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: props.content }}>
        </div>
    )
}