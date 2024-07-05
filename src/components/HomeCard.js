import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import food from '../food.png';
class HomeCard extends React.Component {

    render() {
        return (
            <>
                <br></br>
                <h1 className='al-cent'>DEALS</h1>
                <hr></hr>
                <div className="card" style={{ maxWidth: 1450 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={food} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">DISCOUNT!!</h5>
                                <p className="card-text">There is a good discount going on for the people who book food online.</p>
                                <p className="card-text">This is only valid for some period of time and our elite member!!</p>
                                <p className='card-text'>
                                    <Link to = '/menu' className='btn btn-dark card-text'>Show Menu</Link> &nbsp;
                                    <button className='btn btn-danger card-text'>Get Elite Membership</button>
                                </p>
                                <small className="card-text">T&amp;C Applied</small>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet/>
            </>
        );
    }
}

export default HomeCard;