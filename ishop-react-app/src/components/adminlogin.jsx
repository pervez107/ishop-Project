import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";


export function AdminLogin(){

    const navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            UserId:'',
            Password:''
        },
        onSubmit:(admin)=>{
            axios.get(`https://ishop-project.onrender.com/getadmins`)
            .then(response=>{
                var user=response.data.find(item=>item.UserId===admin.UserId);
                if(user){
                    if(admin.Password===user.Password)
                    {
                        navigate("/admin-dash");
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
        <div className=" p-4 m-4 bg-white w-25 ">
            <h3>Admin-Login</h3>
            <form onSubmit={formik.handleSubmit} >
                <dl>
                    <dt>Admin-Id</dt>
                    <dd><input onChange={formik.handleChange} name="UserId" className="form-control" type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input onChange={formik.handleChange} name="Password" className="form-control" type="password" /></dd>
                </dl>
                <button type="submit" className=" btn btn-success w-100 bi bi-bi-person-fill">Login</button>
                <Link to="/">Back to Home</Link>
            </form>
        </div>
    );
}