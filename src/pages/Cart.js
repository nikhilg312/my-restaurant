import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus, faMinus } from '@fortawesome/fontawesome-free-solid';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
function Cart(props) {
    const [cartItems, setCartItems] = useState(props.cartItems);
    let cartItem;
    let totalCost = 0;
    for (const [key, value] of Object.entries(cartItems)) {
        totalCost += JSON.parse(key).itemPrice*value;
    }
    const [totalPrice, setTotalPrice] = useState(totalCost);
    return (
        <>
            <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">

                                    <div className="row">

                                        <div className="col-lg-7">
                                            <h5 className="mb-3"><Link to="/menu" className="text-body" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faArrowLeft} />
                                                &nbsp;&nbsp;&nbsp;Continue shopping</Link></h5>
                                            <hr />

                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have {props.cartItems ? Object.keys(props.cartItems).length : '0'} items in your cart</p>
                                                </div>
                                            </div>
                                            {cartItems ? Object.keys(cartItems).map((pCartItem) =>
                                            (
                                                cartItem = JSON.parse(pCartItem),
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src={cartItem['img']}
                                                                        className="img-fluid rounded-3" alt="Shopping item" style={{ width: 200 + 'px' }} />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>{cartItem['itemName']}</h5>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 70 + 'px' }}>
                                                                <FontAwesomeIcon onClick={() => {
                                                                    cartItem = JSON.parse(pCartItem);
                                                                    const updatedCartItems = { ...cartItems };
                                                                    updatedCartItems[JSON.stringify(cartItem)]++;
                                                                    props.setCartItems(updatedCartItems);
                                                                    setCartItems(updatedCartItems);
                                                                    let totP = 0;
                                                                        for (const [key, value] of Object.entries(updatedCartItems)) {
                                                                            totP += JSON.parse(key)['itemPrice']*value;
                                                                        }
                                                                    setTotalPrice(totP);
                                                                }} icon = {faPlus} style={{cursor: 'pointer'}}/>
                                                                    <span className="fw-normal mb-0">&nbsp;&nbsp;{cartItems[pCartItem]}&nbsp;&nbsp;</span>
                                                                <FontAwesomeIcon icon = {faMinus}
                                                                    onClick={() => {
                                                                        cartItem = JSON.parse(pCartItem);
                                                                        const updatedCartItems = { ...cartItems };
                                                                        updatedCartItems[JSON.stringify(cartItem)]--;
                                                                        if(updatedCartItems[JSON.stringify(cartItem)] === 0) {
                                                                            delete updatedCartItems[JSON.stringify(cartItem)];
                                                                        }
                                                                        props.setCartItems(updatedCartItems);
                                                                        setCartItems(updatedCartItems);
                                                                        let totP = 0;
                                                                        for (const [key, value] of Object.entries(updatedCartItems)) {
                                                                            totP += JSON.parse(key)['itemPrice']*value;
                                                                        }
                                                                        setTotalPrice(totP);
                                                                }}
                                                                    style={{cursor: 'pointer'}}/>
                                                                </div>
                                                                <div style={{ width: 120 + 'px' }}>
                                                                    <h5 className="mb-0">&nbsp;{cartItems[pCartItem]*cartItem['itemPrice']} CAD</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )) : ''}
                                        </div>
                                        <div className="col-lg-5">

                                            <div className="card bg-dark text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Card details</h5>
                                                    </div>

                                                    <form className="mt-4">
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                                                placeholder="Cardholder's Name" />
                                                            <label className="form-label" >Cardholder's Name</label>
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                                                placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                                                            <label className="form-label">Card Number</label>
                                                        </div>

                                                        <div className="row mb-4">
                                                            <div className="col-md-6">
                                                                <div className="form-outline form-white">
                                                                    <input type="text" id="typeExp" className="form-control form-control-lg"
                                                                        placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                                                                    <label className="form-label" >Expiration</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-outline form-white">
                                                                    <input type="password" id="typeText" className="form-control form-control-lg"
                                                                        placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                                                    <label className="form-label">Cvv</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>

                                                    <hr className="my-4"/>

                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Subtotal</p>
                                                        <p className="mb-2">{totalPrice} CAD</p>
                                                    </div>

                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Shipping</p>
                                                        <p className="mb-2">20 CAD</p>
                                                    </div>

                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">{totalPrice + 20} CAD</p>
                                                    </div>

                                                    <button type="button" className="btn btn-info btn-block btn-danger">
                                                        <div className="d-flex justify-content-between">
                                                            <span>{totalPrice + 20} CAD</span>
                                                            <span>&nbsp;Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                        </div>
                                                    </button>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Outlet />
        </>
    );
}


export default Cart;