import Navbar from '../navbar/Navbar';
import './Landing.css';

export default function Landing() {
    return (
        <section id="section-landing" className="section">
            {/* <div className="div-landing">
                <h1>trouvailler</h1>
                <Navbar />
            </div> */}
            <Navbar />
            <main className="main-landing">
                <article className="article-landing">
                    <h2 className="h2-landing-headline">Start an exciting new journey with the help of a local.</h2>
                    <p className="p-landing">We want to build <span className="span-landing">bespoke, enriching</span> travel experiences for <span className="span-landing">everyone, everywhere.</span></p>
                    <div className="div-landing-btncontainer">
                        <button className="btn btn-landing-signup">
                            <a href="https://ckzx98ogzda.typeform.com/to/AJqsbA3Z" target="_blank">Get Started</a>
                        </button>
                        <button className="btn btn-landing-findoutmore">
                            <a href="#section-contactus">Find Out More</a>
                        </button>
                    </div>
                </article>
            </main>
        </section>
    )
}
