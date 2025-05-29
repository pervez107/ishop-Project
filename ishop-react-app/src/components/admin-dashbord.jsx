import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function AdminDash(){
    const [products,setProduct]=useState([{id:0,title:'',image:'',price:0}]);

    useEffect(()=>{
        axios.get(`https://ishop-project.onrender.com/products`)
        .then(response=>{
            setProduct(response.data);
        })
    },[]);

return(
    <div className="p-3 m-3 bg-light" >
        <div className="p-2 ">
            <span className="h3">Admin-Dashboard</span>
            <span className="ms-2 btn btn-primary">Add-product</span>
            <Link to='/admin-login'>Back-to-Login</Link>
        </div>
        <div style={{height:'430px',overflow:'auto'}} >
            <table className=" table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td><img src={product.image} height="150" width="150"/></td>
                                <td>{product.price.toLocaleString('en-us',{style:'currency',currency:'USD'} )}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
);
}