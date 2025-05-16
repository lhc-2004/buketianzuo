// ContactPage.jsx
import "./contactPage.css";
import { contactSlogan, contactEmail, contactTel, contactHour, contactAddress } from "../../info";

function ContactPage() {
    return (
        <div>
            <div className="contact-page">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">{contactSlogan}</p>
            </div>

            <div className="contact-details">
                <div className="map-section">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.783703520611!2d-73.97476595317404!3d40.762697396070365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f16c797005%3A0xe4e4933de0b8dc33!2sLe%20Caf%C3%A9%20Louis%20Vuitton%20NYC!5e0!3m2!1sen!2sus!4v1735875825784!5m2!1sen!2sus"
                        width="600"
                        height="600"
                        style={{ border: "0", borderRadius: "8px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="info-section">
                    <h3>EMAIL</h3>
                    <p>{contactEmail}</p>
                    <h3>TEL</h3>
                    <p>{contactTel}</p>
                    <h3>HOURS</h3>
                    <p>{contactHour}</p>
                    <h3>ADDRESS</h3>
                    <p>{contactAddress}</p>
                </div>
                
                <div className="form-section">
                    <h3>SEND US A MESSAGE</h3>
                    <form>
                        <input type="text" placeholder="Name *" required />
                        <input type="email" placeholder="Email *" required />
                        <input type="text" placeholder="Phone" />
                        <textarea placeholder="Message *" required></textarea>
                        <button type="submit">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
