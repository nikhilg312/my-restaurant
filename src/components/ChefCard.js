import React from 'react';
import { Outlet, Link } from 'react-router-dom';
class ChefCard extends React.Component {

    render() {
        return (
            <>
                <br></br>
                <h1 className='al-cent'>Our Chefs</h1>
                <hr></hr>
                <div className="card" style={{ maxWidth: 1450 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Richard Jones</h5>
                                <p className="card-text">Words from our Head Chef :</p>
                                <p className="card-text">I have been working in this restaurant as a chef for 10 years and I have loved the people here.</p>
                                <p className='card-text'>
                                    Talking about myself i am from India, and here i work make south indian food and i have done my schooling in Bachelor of Hotel Management (BHM) in Culinary. B.Sc. in Hospitality and Hotel Management from the most famous indian hotel management school that is IHM Pusa and i have also achieved the title of master chef in 2013.
                                </p>
                                <p className='card-text'>
                                    <Link to= '/about' className='btn btn-dark'>Contact</Link>&nbsp;
                                    <Link to= '/menu' className='btn btn-danger'>Richard's Special</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet/>
            </>
        );
    }
}

export default ChefCard;