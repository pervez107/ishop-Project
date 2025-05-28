import axios from "axios"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"

export function UserRegister(){
    var navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            UserId:'',
            FirstName:'',
            LastName:'',
            Password:'',
            Gender:'',
            Email:'',
            Mobile:'',
            Address:''
        },onSubmit:(data)=>{
            axios.post('http://127.0.0.1:8080/customerregister',data)
            .then(res=>{
                alert(res.data);
                navigate('/user-login');
            })
            .catch(error => {
                console.error("Error registering customer:", error);
                alert("Registration failed.");
            });
        }
    })
    return(
        <div className=" p-4 m-4 bg-white w-25 overflow-auto mx-auto " style={{height:"480px"}}>
            <h3>User-Register</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserId"  className="form-control"/></dd>
                    <dt>FirstName</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="FirstName" className="form-control" /></dd>
                    <dt>LastName</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="LastName" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="Password"  className="form-control" /></dd>
                    <dt>Gender</dt>
                    <dd>
                        <span>
                            <input onChange={formik.handleChange}checked={formik.values.Gender === "Male"}  name="Gender" value="Male" className="form-check-input" type="radio"/>Male
                        </span>
                        <span className="mx-3">
                            <input  name="Gender" onChange={formik.handleChange} checked={formik.values.Gender === "Female"} value="Female" className="form-check-input" type="radio"/>Female
                        </span>
                    </dd>
                    <dt>Email</dt>
                    <dd><input type="text" className=" form-control" name="Email" onChange={formik.handleChange} /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile" className="form-control" /></dd>
                    <dt>Address</dt>
                    <dd><textarea onChange={formik.handleChange} name="Address"  className=" form-control" /></dd>
                </dl>
                <button type="submit" className=" w-100 btn btn-success">Register</button>
                <div className="my-2">
                    <Link to="/user-login">Back to Login</Link>
                </div>
            </form>
        </div>
    )
}
