import React from 'react';
import restaurant1 from '../restaurant1.png';
import restaurant2 from '../restaurant2.png';
import restaurant3 from '../restaurant3.png';
class Carousel extends React.Component {
    render() {
        return (
            <>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={restaurant1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={restaurant2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={restaurant3} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        );
    }
}

export default Carousel;