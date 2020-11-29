import React from 'react';
import ReactDOM from 'react-dom';
import banner from '../../Assets/Images/banner-first.png';

function HomeSlider(){
    return (
        <div className="HomeSlider">
            <div className="Slide-TextHolder">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div>
                        <button>Read More</button>
                        <button>Subscript</button>
                    </div>
                </div>
            </div>
            <div className="Slide-ImageHolder">
                <img  src={banner} />
            </div>
        </div>
    )
}

export default HomeSlider;