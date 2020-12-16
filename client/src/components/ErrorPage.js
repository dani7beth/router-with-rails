export default (props) =>{
    return (
        <div>
            <h1>Error Occured</h1>
            <h1>{props.err.status}</h1>
            {props.err.status == 404 && <div>Page Does Not Exist</div>}
        </div>
    )
}