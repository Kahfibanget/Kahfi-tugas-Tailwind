import { Navigate, useNavigate } from "react-router-dom";
import "./Error.css"

function Error(){
    const Navigate = useNavigate();

    function backtohome(){
        Navigate("/");
    }

    return(
        <div className="wow">
            <div>
            <h4>404</h4>
            <h1>Page not found</h1>
            <h4>Sorry, we couldn't find the page you're looking for.</h4>
            <button onClick={backtohome}>Go back home</button>
            <a className="a1">Contact support</a>
            </div>
        </div>
    )
}

export default Error;