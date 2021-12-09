export default function Previewer(props){
    return (
        <div className="container">
            <div className="title"><i class="fas fa-eye"></i> Previewer</div>
            <div id="preview" dangerouslySetInnerHTML={{ __html: props.content }}>
            </div>
        </div>
    )
}