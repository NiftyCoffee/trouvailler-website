import Footer from '../footer/Footer';
import './ContactUs.css';

export default function ContactUs() {
    return (
        <section id="section-contactus">
            <div className="div-contactus-card">
                <h2 className="h2-contactus">Contact Us</h2>
                <p className="p-contactus-subtitle">Reach out for any questions/enquiries!</p>
                <button className="btn btn-contactus-email">
                    <a href="mailto:trouvailler.co@gmail.com" target="_blank">Send An Email</a>
                </button>
                <p className="p-contactus-instagram">or DM us on <span className="span-contactus-instagram">
                        <a href="https://instagram.com/trouvailler.co" target="_blank">Instagram</a>
                    </span> and follow for cool travel updates!
                </p>
            </div>
        </section>
    )
}