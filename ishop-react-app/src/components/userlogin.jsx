import axios from "axios";
import { useFormik } from "formik";
import { useNavigate,Link } from "react-router-dom";


export function UserLogin(){

    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            UserId:'',
            Password:''
        },
        onSubmit:(user)=>{
            axios.get(`http://127.0.0.1:8080/getcustomers`)
            .then(response=>{
                var data=response.data.find(item=>item.UserId===user.UserId);
                if(data){
                    if(data.Password===user.Password){
                        navigate('/');
                    }else{
                        alert('Invalid Password');
                    }
                }else{
                    alert('Invalid UserId');
                }
            })
        }
    })
    return(
        <div className="m-4 p-4 w-25 bg-white">
            <h3>User-Login</h3>
            <form onSubmit={formik.handleSubmit} >
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control"  name="UserId" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} className="form-control" name="Password" /></dd>
                </dl>
                <button type="submit" className="w-50 btn btn-success bi bi-person-fill">Login</button>
                <Link to="/" className="btn btn-warning w-50" >Cancle</Link>
                <div className="my-3">
                    <Link to="/user-register" >NewUser-Register</Link>
                </div>
            </form>
        </div>
    );
}