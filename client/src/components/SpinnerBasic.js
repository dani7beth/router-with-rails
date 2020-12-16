import { Spinner } from "react-bootstrap"

export default () =>{
    return (
        <>
        <Spinner style={{margin: "1%"}} animation="border" role="status">
                <span className="sr-only">Loading...</span>
        </Spinner>
        </>
    )
}