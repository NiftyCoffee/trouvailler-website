import "./WhatWeDo.css";
import Image from 'next/image';
import itineraryIcon from '../../../public/assets/icons/itinerary.svg';
import consultIcon from '../../../public/assets/icons/consultant.svg';
import clockIcon from '../../../public/assets/icons/clock.svg';

export default function WhatWeDo() {
    return (
        <section id="section-whatwedo">
            <div className="div-whatwedo-container">
                <div className="div-whatwedo-text">
                    <h2 className="h2-whatwedo">No two trips are the same — You're unique.<br/><span className="span-whatwedo-tagline">Your trips should be too.</span></h2>
                    <p className="p-whatwedo-subtitle">Going on a trip somewhere? Sign up for Trouvailler and we'll get you connected online to someone with local knowledge of your desired holiday destination.
                        It's quick and easy; you can get the trip worth every dime in no time.
                    </p>
                </div>
                <ul className="ul-whatwedo">
                    <li className="li-whatwedo">
                        <Image 
                            src={itineraryIcon}
                            alt="itinerary"
                            className="icon-whatwedo"
                        />
                        <h3>Personalised Itinerary</h3>
                        <p>Get an itinerary made just for you and change it however you like, however much you want. It's your trip!</p>
                    </li>
                    <li className="li-whatwedo">
                        <Image 
                            src={consultIcon}
                            alt="itinerary"
                            className="icon-whatwedo"
                        />
                        <h3>Local Insights</h3>
                        <p>Locals often know the best spots in town. Get insights from locals to achieve an authentic experience.</p>
                    </li>
                    <li className="li-whatwedo">
                        <Image 
                            src={clockIcon}
                            alt="itinerary"
                            className="icon-whatwedo"
                        />
                        <h3>Save Time</h3>
                        <p>Let the tedious parts of research and trip planning be done for you. Just relax, get on the flight, and enjoy your holiday!</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}