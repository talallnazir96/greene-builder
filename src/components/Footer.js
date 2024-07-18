import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Footer () {
    return (
        <>
            <footer className="text-center text-lg-start footer">
                <section className="d-flex pt-4 pb-4 pl-0 border-bottom container">
                    <div className="d-flex justify-content-left">
                        <a href="https://www.facebook.com/profile.php?id=100052653267274" className="me-3"><FontAwesomeIcon icon={faFacebook} size="xl" /></a>
                        <a href="https://www.linkedin.com/in/david-greene-56b2a42a/" className="text-reset"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
                    </div>
                    <div className="me-5 d-lg-block copy-right">
                        <span>Copyright © 2024 Greene Builders, Inc. All Rights Reserved</span>
                    </div>
                </section>
            </footer>
        </>
    );
}