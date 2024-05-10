import './HowItWorks.css';

export default function HowItWorks() {
    return (
        <section id="section-howitworks" className="section">
            <h2 className="h2-howitworks">How It Works</h2>
            <ol className="ol-howitworks">
                <li className="li-howitworks">
                    <span>1</span>
                    <p>
                    Fill out the <a href="https://ckzx98ogzda.typeform.com/to/AJqsbA3Z" target="_blank">preconsultation form</a>
                    </p>
                </li>
                <li className="li-howitworks">
                    <span>2</span>
                    Book a time to meet your local expert
                </li>
                <li className="li-howitworks">
                    <span>3</span>
                    Plan with your expert for up to 2 hours online
                </li>
            </ol>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wbsK0x2lcMo?si=rIjd1oQJlDlGFNrp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </section>
    )
}