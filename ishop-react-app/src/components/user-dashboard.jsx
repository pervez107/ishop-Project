import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";


export function UserDash(){
    let navigate=useNavigate();
    const [cookies,setCookies,removeCookies]=useCookies(['username']);
    const [products,setProducts]=useState([{id:0,title:'',price:'',category:'',rating:{rate:0,count:0},image:''}]);
    const [categories,setCategories]=useState([]);
    const [selectedcategory,setSelectedCategory]=useState('');

    function loadprodcts(){
        axios.get(`http://127.0.0.1:8080/products`)
        .then(res=>{
            setProducts(res.data);
        })
    }

    function Loadcategory(){
        axios.get(`http://127.0.0.1:8080/categories`)
        .then(res=>{
            setCategories(res.data);
        })
    }

    function handleSignout(){
        removeCookies('username');
        navigate('/user-login');
    }

    function handleDropdown(e) {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);

    if (selectedValue === "") {
        loadprodcts(); 
    } else {
        loadCategoryProduct(selectedValue); 
    }
}

    function loadCategoryProduct(str){
        axios.get(`http://127.0.0.1:8080/categories/${str}`)
        .then(res=>{
            setProducts(res.data)
        })
    }

    useEffect(()=>{
        loadprodcts();
        Loadcategory();
    },[]);
    return(
        <div className="bg-light p-2 m-2">
            <h3 className=" d-flex justify-content-between border border-2 p-2">
                <div><span>{cookies.username}</span> <span>Dashboard</span></div>
                <div>
                    <button className="btn btn-danger">
                        0
                    </button>
                </div>
                <div><button onClick={handleSignout}  className="btn btn-link">Signout</button></div>
            </h3>
            <div className=" row">
                <div className="col-2">
                    <div className="mb-2">
                        <label className="fw-bold form-lable">Select products category</label>
                        <select onChange={handleDropdown} className=" form-select mx-auto" >
                            <option value="">Select-Category</option>
                            {
                                categories.map((category,index)=>
                                <option key={index} value={category.CategoryName}>{category.CategoryName}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className=" col-10">
                    <section className="d-flex flex-wrap overflow-auto" style={{height:'450px'}}>
                        {
                            products.map(product=>
                                <div key={product.id} className="card m-2 p-2 " style={{width:"200px"}}>
                                    <img src={product.image} className=" card-img-top" height="120px"/>
                                    <div className=" card-header overflow-auto" style={{height:"80px"}}>
                                        {product.title}
                                    </div>
                                    <div className=" card-body">
                                        <span>price:{product.price}</span>
                                        <div>
                                            <span>rate: {product.rating?.rate}</span>
                                        </div>
                                    </div>
                                    <div className=" card-footer">
                                        <button className=" w-100 btn btn-warning bi bi-cart4 "></button>
                                    </div>
                                </div>
                            )
                        }
                    </section>
                </div>
            </div>
        </div>
    )
}