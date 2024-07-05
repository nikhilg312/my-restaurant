import { faMinus, faPlus } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
function MenuCard(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/foodItem')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);
    if (data) {
        data.forEach(foodItem => {
            foodItem = JSON.stringify(foodItem);
        });
    }
    const [foodItems, setFoodItems] = useState(null);
    let cartItems = {};
    let [cartItemsState, setCartItems] = useState("");
    return (
        <>
            <div className="cards">
                {data ? data.map(foodItem => (
                    <div key={foodItem['_id']} className="card" style={{ maxWidth: 1450 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={foodItem['img']} data-bs-toggle="modal" data-bs-target="#exampleModal" className="img-fluid rounded-start" alt="..." style={{ cursor: 'pointer' }} onClick={() => { setFoodItems(foodItem); }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{foodItem['itemName']}</h5>
                                    <p className="card-text">Price : {foodItem['itemPrice']} CAD</p>
                                    <p className="card-text"></p>
                                    <p className='card-text'>
                                        {foodItem['description']}
                                    </p>
                                    <p className='card-text'>
                                        <Link onClick={() => {
                                            cartItems = {...cartItemsState};
                                            cartItems[JSON.stringify(foodItem)] ? cartItems[JSON.stringify(foodItem)]++ : cartItems[JSON.stringify(foodItem)] = 1;
                                            props.setCartItems(cartItems);
                                        }} to="/cart" className='btn btn-dark'>Buy</Link>&nbsp;
                                        {
                                            cartItemsState[JSON.stringify(foodItem)]  ?
                                            <span>
                                                    <FontAwesomeIcon onClick={() => {
                                                        cartItems = {...cartItemsState};
                                                        cartItems[JSON.stringify(foodItem)]++;
                                                        props.setCartItems(cartItems);
                                                        setCartItems(cartItems);
                                                    }} icon={faPlus} style={{ cursor: 'pointer' }} />
                                                    <span className="fw-normal mb-0">&nbsp;&nbsp;{cartItemsState[JSON.stringify(foodItem)]}&nbsp;&nbsp;</span>
                                                    <FontAwesomeIcon icon={faMinus}
                                                        onClick={() => {
                                                            cartItems = {...cartItemsState};
                                                            console.log(cartItems);
                                                            cartItems[JSON.stringify(foodItem)]--;
                                                            if (cartItems[JSON.stringify(foodItem)] === 0) {
                                                                delete cartItems[JSON.stringify(foodItem)];
                                                            }
                                                            props.setCartItems(cartItems);
                                                            setCartItems(cartItems)
                                                        }}
                                                        style={{ cursor: 'pointer' }} />
                                            </span>
                                                :
                                                <button onClick={() => {
                                                    cartItems = {...cartItemsState};
                                                    cartItems[JSON.stringify(foodItem)] = 1;
                                                    props.setCartItems(cartItems);
                                                    setCartItems(cartItems);
                                                }} className='btn btn-danger'>Add to Cart</button>
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <div></div>}
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{foodItems ? foodItems['itemName'] : 'item'}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={foodItems ? foodItems['img'] : ''} alt={'img'} style={{ width: 430 + 'px' }} className="w-20"></img>
                            <p>{foodItems ? foodItems['description'] : 'item'}</p>
                            <p>{foodItems ? foodItems['itemPrice'] : 'item'} CAD</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={() => {
                                cartItems = {...cartItemsState};
                                cartItems[JSON.stringify(foodItems)] ? cartItems[JSON.stringify(foodItems)]++ : cartItems[JSON.stringify(foodItems)] = 1;
                                props.setCartItems(cartItems);
                            }} className="btn btn-danger">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Outlet />
        </>
    );
}


export default MenuCard;