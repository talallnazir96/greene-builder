import CounterAnimation from "./CounterAnimation";
import image from '../assets/images/image.png';
import signature from '../assets/images/signature.png';
export default function Experience ({ id }) {
    let rowStyle = {width: '100%'};
    return (
        <>
            <div className="container-fluid p-0 experience-section" id={ id }>
                <div className="row" style={rowStyle}>
                    <div className="col-lg-7 col-md-12">
                        <div className="counter">
                            <h6><CounterAnimation targetNumber={40} duration={3000} />Years of <br/>Experience</h6>
                            <h6><CounterAnimation targetNumber={378} duration={3000} />Projects<br/> Completed</h6>
                            <h6><CounterAnimation targetNumber={69} duration={3000} />Winning <br/>Global Awards</h6>
                        </div>
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-md-6 d-m-none">
                        <img src={image} alt="" style={{width:'100%'}}/>
                    </div>
                    <div  className="col-md-6 exp-section-right">
                        <h2 className="yrs-heading">40 years</h2>
                        <h2 className="exp-heading">of experience!</h2>
                        <p>
                        Welcome to Greene Builders Renovations & Construction, where we specialize in
                         transforming spaces and building dreams. With our expertise in renovation and 
                         construction, we offer a wide range of services tailored to meet the diverse needs
                          of our clients. Whether you need residential renovations or a new custom
                           home project, we are committed to delivering high-quality craftsmanship
                            and exceptional service at every step.
                        </p>
                        <img src={signature} alt="" style={{width:'40%'}}/>
                    </div>
                </div>
            </div>
            <div className="row mission-choose" style={rowStyle}>
                <div className="col-lg-5 col-md-12 choose">
                    <h6>Why Choose Us</h6>
                    <p>
                        Key reasons why clients should choose Greene Builders for their renovation
                        and construction needs, including our attention to detail, personalized approach,
                        and commitment to sustainability.
                    </p>
                </div>
            </div>
        </>
    );
}
