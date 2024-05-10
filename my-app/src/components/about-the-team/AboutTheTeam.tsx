import './AboutTheTeam.css';
import Image from 'next/image';
import zoePic from '../../../public/assets/images/zoe.png';
import taufiqPic from '../../../public/assets/images/taufiq.png';
import helenPic from '../../../public/assets/images/helen.png';

export default function AboutTheTeam() {
    return (
        <section id="section-abouttheteam" className="section">
            <div className="div-abouttheteam-container">
                <h2 className="h2-abouttheteam">Meet The Team</h2>
                <p className="p-abouttheteam">We are a group of students in the Fastrack Program at Monash University Australia looking to make trips more fulfilling and planning easier.</p>
                <ul className="ul-abouttheteam">
                    <li className="li-abouttheteam">
                        <Image
                            src={taufiqPic}
                            alt='Taufiq Co-Founder'
                            className="image-abouttheteam"
                        />
                        <h3>Taufiqurrahman</h3>
                        <p>Marketing and RnD</p>
                    </li>
                    <li className="li-abouttheteam">
                        <Image
                            src={helenPic}
                            alt='Helen Co-Founder'
                            className="image-abouttheteam"
                        />
                        <h3>Helen Lin</h3>
                        <p>Finance and Communications</p>
                    </li>
                    <li className="li-abouttheteam">
                        <Image
                            src={zoePic}
                            alt='Zoe Co-Founder'
                            className="image-abouttheteam"
                        />
                        <h3>Zoe Tay</h3>
                        <p>Technology and Operations</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}