import Navbar from '../navbar/Navbar';
import './Landing.css';

export default function Landing() {
    return (
        <section id="section-landing">
            <div className="div-landing">
                <h1>trouvailler</h1>
                <Navbar />
            </div>
            <main className="main-landing">
                <article className="article-landing">
                    <h2 className="h2-landing-headline">Start an exciting new journey with the help of a local.</h2>
                    <p className="p-landing">We want to build <span className="span-landing">bespoke, enriching</span> travel experiences for <span className="span-landing">everyone, everywhere.</span></p>
                <div className="div-landing-btncontainer">
                    <button className="btn btn-landing-signup">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScC5RhSlrePVpm8-KO24cuX0xymiplPNv2CVn2cz0at1oWviw/viewform?usp=sf_link" target="_blank">Sign Up</a>
                    </button>
                    <button className="btn btn-landing-findoutmore">
                        <a>Find Out More</a>
                    </button>
                </div>
                </article>
            </main>
        </section>
    )
}