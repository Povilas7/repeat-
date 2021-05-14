import React from 'react';
import {useState, useEffect} from "react"

function GetItem() {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/getPost')
            .then(res => res.json())
            .then(data => {
                setItem(data.rec)
            })
    },[item])

    function minus(e){
        let id = e.target.id
        fetch('http://localhost:3002/minusQuantity/'+id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    function add(e){
        let id = e.target.id
        fetch('http://localhost:3002/add/'+id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    function deleteItem(e){
        let id = e.target.id
        fetch('http://localhost:3002/delete/'+id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <h1>List</h1>
            <div className="d-flex">
                <div className="box">
                    <h3>Product name</h3>
                </div>
                <div className="box">
                    <h3>Quantity</h3>
                </div>
                <div className="box">
                    <h3>Price one product</h3>
                </div>
            </div>
            {item.map((item, index) => <div key={index}  className="d-flex">
                <div className="box">
                    <h3>{item.name}</h3>
                </div>
                <div className="box1 d-flex">
                    <p className='plus' id={item._id} onClick={minus}>-</p>
                    <p>{item.quantity}</p>
                    <p className='plus' id={item._id} onClick={add}>+</p>
                </div>
                <div className="box d-flex jus-around">
                    <h3>{item.price} $</h3>
                    <p className='delete' id={item._id} onClick={deleteItem}>X</p>
                </div>
            </div>)}

        </div>
    );
}

export default GetItem;