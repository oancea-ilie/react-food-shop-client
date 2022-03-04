import React, { useEffect, useState } from "react";
import fructImg from  "../images/fruct.png";
import legumeImg from "../images/legume.png";
import carneImg from "../images/carne.png";
import patiserieImg from "../images/patiserie.png"
import Api from "../Api";

export default ()=>{

    let [categories, setCategories] = useState([]);

    let api = new Api();

    let getCategories = async()=>{
        let rez = await api.getAllCategories();

        if(rez != 0){
            setCategories(rez);
        }else{
            alert("PROBLEME DIN API");
        }
    }

    let imgHandle=(id)=>{
        if(id == 1){return fructImg;}

        if(id == 2){return legumeImg;}

        if(id == 3){return carneImg;}

        if(id ==4){return patiserieImg;}
    }

    useEffect(()=>{
        getCategories();
    },[categories]);

    return (
        <>
            <main className="main-category">
                <div className="container">
                            {
                                categories.map((e)=>{
                                    return<div className="card" key={e.id}>
                                            <img src={imgHandle(e.id)} alt="image"/>
                                            <div className="text">
                                                <h2 className="h2-category">Name: <span>{e.name}</span> </h2>
                                            </div>
                                        </div>
                                })
                            }
                </div>
            </main>
        </>
    );
}