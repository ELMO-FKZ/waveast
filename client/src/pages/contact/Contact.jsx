import { Helmet } from "react-helmet-async"
import PageHeader from "../../components/pageHeader/PageHeader"
import "./contact.css"

function Contact() {
    return (
        <>
        <Helmet>
            <title>Contact - Waveast</title>
            <link rel="canonical" href="/contact" />
            <meta name="description" 
                content="Waveast Installation & Park Services is a company that provides engineering, installation, maintenance, expansion, renovation, and consultancy services for amusement items and water parks. It was created in 2021 in Warsaw, Poland." />
        </Helmet>
        <PageHeader pageTitle="Contact us" />
        <div className="contact container">
            <div className="contact__form">
                <div className="contact__form-name">
                    <label className="contact__form-label" htmlFor="name">Full name</label>
                    <input id="name" className="contact__form-input" type="text" placeholder="Enter your full name" name="name" autoComplete="off" required />
                </div>
                <div className="contact__form-email">
                    <label className="contact__form-label" htmlFor="email">Email</label>
                    <input id="email" className="contact__form-input" type="email" placeholder="Enter your email" name="email" autoComplete="off" required />
                </div>
                <div className="contact__form-subject">
                    <label className="contact__form-label" htmlFor="subject">Subject</label>
                    <input id="subject" className="contact__form-input" type="text" placeholder="Enter the message's subject" name="subject" autoComplete="off" />
                </div>
                <div className="contact__form-message">
                    <label className="contact__form-label" htmlFor="message">Message</label>
                    <textarea className="contact__form-input" name="message" id="message" placeholder="Enter your message" rows={10} required ></textarea>
                </div>
                <div className="contact__form-btn">
                    <button className="primary__btn btn" type="submit" id="submit" value="submit" name="Submit">Submit</button>
                </div>
            </div>
            <div className="map">
            </div>
        </div>
        </>
    )
}

export default Contact