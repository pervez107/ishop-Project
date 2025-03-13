import { Link } from "react-router-dom";


export function ShopeHome(){
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100%'}}>
            <Link to='/admin-login' className="btn btn-primary" >Admin-Login</Link>
            <Link to='/user-login' className="btn btn-primary ms-3">Customer-Login</Link>
        </div>
    );
}