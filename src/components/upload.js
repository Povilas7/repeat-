import React from 'react';
import {useState, useRef, useEffect} from "react"

function Upload() {
    const nameRef = useRef()
    const quantityRef = useRef()
    const priceRef = useRef()
    const [name, setName] = useState([])
    const [quantity, setQuantity] = useState([])
    const [price, setPrice] = useState([])
    const [error, setError] = useState([])

    function addName(){
        console.log(nameRef.current.value)
        setName(nameRef.current.value)
    }
    function addQuantity(){
        console.log(Number(quantityRef.current.value))
        setQuantity(Number(quantityRef.current.value))
    }
    function addPrice(){
        console.log(priceRef.current.value)
        setPrice(priceRef.current.value)
    }
    function submit(){
        let upload = {
            name: name,
            quantity: quantity,
            price: price
        }
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(upload)
        }
        fetch('http://localhost:3002/upload', options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setError(data.message)
            })

    }

    return (
        <div>
            <h3>Upload form</h3>
            <input type='text' placeholder="Name" ref={nameRef}/>
            <button onClick={addName}>Add name</button>
            <input type='text' placeholder="Quantity" ref={quantityRef}/>
            <button onClick={addQuantity}>Add quantity</button>
            <input type='text' placeholder="Price" ref={priceRef}/>
            <button onClick={addPrice}>Add price</button>
            <div>
                <button onClick={submit}>Submit</button>
            </div>
            <p>{error}</p>
        </div>
    );
}

export default Upload;