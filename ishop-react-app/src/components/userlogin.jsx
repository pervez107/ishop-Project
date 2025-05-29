import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useCookies } from 'react-cookie';



export function UserLogin(){

    const navigate=useNavigate();
    const [user,setUser]=useState([{UserId:'',FirstName:'',LastName:'',Password:'',Email:'',Mobile:''}]);
    const [cookies,setCookies,removeCookies]=useCookies(['username'])
    const formik=useFormik({
        initialValues:{
            UserId:'',
            Password:''
        },
        onSubmit:(user)=>{
            axios.get(`https://ishop-project.onrender.com/getcustomers`)
            .then(response=>{
                var data=response.data.find(item=>item.UserId===user.UserId);
                if(data){
                    if(data.Password===user.Password){
                        setCookies('username',`${data.FirstName}${data.LastName}`);
                        navigate('/user-dash');
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