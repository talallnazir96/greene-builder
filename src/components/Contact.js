import ContactForm from "./ContactForm";
export default function Contact ({id}) {
    return (
        <>
            <div className="container-fluid contact" id={id}>
                {/* <h3 className="text-center">Leading Way In Building & Civil Construction</h3>
                <ul className="text-center">
                    <li><img src={icon} alt="" />Professional Staff</li>
                    <li><img src={icon} alt="" />100% Satisfaction</li>
                    <li><img src={icon} alt="" />Accurate Testing</li>
                    <li><img src={icon} alt="" />Transparent Pricing</li>
                </ul> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 qoute-form">
                            <ContactForm />
                        </div>
                        <div className="col-lg-4 col-md-12 d-flex">
                            <div className="contact-info align-self-lg-center">
                                <h5>Contact Info</h5>
                                <p>Call Us : (+1) 727-243-1170<br/>
                                    Email   : jerri@greenebuilders.net
                                </p>
                                    
                                <p className="question">Do You Have Any Question, Just Contact Us To Get Help!</p>
                                <a href='tel:+1727-243-1170' type="submit" className="btn btn-default w-100 mt-3">Contact Us</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}