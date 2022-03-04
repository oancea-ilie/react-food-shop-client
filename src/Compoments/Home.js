import React, { useEffect, useState } from "react";
import fructImg from  "../images/fruct.png";
import legumeImg from "../images/legume.png";
import carneImg from "../images/carne.png";
import patiserieImg from "../images/patiserie.png";

import Api from "../Api";

export default ()=>{

    let [toggle, setToggle] = useState(false);
    let [products, setProducts]= useState([]);
    let [categories, setCategories] = useState([]);
    let [filter, setFilter] = useState('');

    let [prodName, setProdName] = useState("");
    let [prodCategory, setProdCategory] = useState("Fructe");
    let [prodPrice, setProdPrice] = useState("");

    let [err, setErr] = useState("");
    let api = new Api();

    let getProducts = async()=>{
        let type = 'id';
        
        if(filter == 'Recent'){type = 'id';}

        if(filter =='Price desc'){type = 'price';}

        if(filter == 'Price asc'){type = 'price-asc';}

        let rez = await api.orderBy(type);

        if(rez != 0){
            setProducts(rez);
        }else{
            setErr("PROBLEME DIN API");
        }
    }

    let getCategories = async()=>{
        let rez = await api.getAllCategories();

        if(rez != 0){
            setCategories(rez);
        }else{
            setErr("PROBLEME DIN API");
        }
    }

    let imgHandle=(id)=>{
        if(id == 1){return fructImg;}

        if(id == 2){return legumeImg;}

        if(id == 3){return carneImg;}

        if(id ==4){return patiserieImg;}
    }

    let check=()=>{
        setErr([]);

        if(prodName ==""){
            setErr((prev)=>{
                return [...prev, "name required!"];
            });
        }
        if(prodCategory ==""){
            setErr((prev)=>{
                return [...prev, "category required!"];
            });
        }
        if(prodPrice == ""){
            setErr((prev)=>{
                return [...prev, "price required!"];
            });
        }
    }

    let onChange=(e)=>{
        e.preventDefault();

        let obj = e.target;

        if(obj.classList.contains("name")){
            setProdName(obj.value);
        }else if(obj.classList.contains("category")){
            setProdCategory(obj.value);
        }else if(obj.classList.contains("price")){
            setProdPrice(obj.value);
        }
        else if(obj.classList.contains("filter")){
            setFilter(obj.value);
        }
    }

    let addProd = async()=>{
        check();

        let cat;
        categories.forEach((e)=>{
            if(e.name == prodCategory){
                cat = e.id;
            }
        });
        
        if(err.length == 0 ){
            let obj = {
                name: prodName,
                price : prodPrice,
                category_id: parseInt(cat)
            };
            
            let rez = await api.addProduct(obj);
 
            if(rez =="success"){
                 setToggle(false);
                 getProducts();
            }else{
                alert(rez.message);
            }
        }else{
            err.forEach(e=>alert(e));
        }
    }

    let deleteProductHandle = async(id)=>{
        let rez = await api.deleteProduct(id);

        if(rez == "delete success"){
            setProdName("");
            setProdPrice("");
            toggle = false;
            getProducts();
        }else{
            alert(rez.message);
        }
    }

    useEffect(()=>{
        getCategories();
    },[]);

    useEffect(()=>{
        getProducts();
    }, [filter]);

    useEffect(()=>{
        check();
    },[prodName,prodCategory,prodPrice]);

    return (
        <>
            <main>
                <div className="main-header" onChange={onChange}>
                    <a href="#" className="add" onClick={()=> setToggle(true)}><i className="fas fa-plus-square"></i></a>
                    <select className="filter">
                        <option>Recent</option>
                        <option>Price desc</option>
                        <option>Price asc</option>
                    </select>
                </div>
                <div className="container">
                    {
                        products.map((e)=>{
                            return <div className="card" key={e.id}>
                                        <img src={imgHandle(e.fk_product_id.id)} alt="image"/>
                                        <div className="text">
                                            <h2>Name: <span>{e.name}</span> </h2>
                                            <p>Category: <span>{e.fk_product_id.name}</span> </p>
                                            <h3>Price: <span>{e.price}$</span></h3>
                                        </div>
                                        <a href="#" className="delete" onClick={()=>deleteProductHandle(e.id)}>Delete</a>
                                    </div>
                        })
                    }
                </div>
            </main>
        {
            toggle?<section className="add-section">
                <div className="container">
                    <div className="title">
                        <i className="fas fa-times" onClick={()=> setToggle(false)}></i>
                        <h1>Add Product</h1>
                    </div>
                    <div className="card" onChange={onChange}>
                        <p>Name:</p>
                        <input type="text" className="name"/>
                        <p>Category:</p>
                        <select className="category">
                            {
                                categories.map((e)=>{
                                    return <option key={e.id}>{e.name}</option>
                                })
                            }
                        </select>
                        <p>Price:</p>
                        <input type="number" className="price"/>
                    </div>
                    <a href="#" className="add" onClick={addProd}>Add</a>
                </div>
            </section>:''
        }

        </>
    );
}