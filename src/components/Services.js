import btnIcon from '../assets/images/button-icon.png';
export default function Services({ id }) {
    return (
        <>
            <div className="container services" id={ id }>
                <h2 className="text-center pb-2">Services</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 service-one">

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-three">
                        <h3>Renovation
                            <br/>Services</h3>
                        <p>
                            Ready to reimagine your space? Our expert team brings creativity, craftsmanship, and a keen eye for detail to every renovation project. Whether it's a modern kitchen makeover,
                            a luxurious bathroom upgrade, or a full-home transformation, we ensure a seamless process from concept to completion.
                        </p>
                        <a href="/" className="btn services-btn"><img src={btnIcon} alt="" /></a>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12 service-four">
                        <h3>Custom Home <br/>Development</h3>
                        <p>
                            Dreaming of a home that's uniquely yours? We specialize in single custom house development,
                            tailoring every detail to fit your vision and lifestyle. From selecting the perfect plot to handing over the keys,
                            we are with you at every step, guaranteeing a personalized home-building experience that's as unique as you are.
                        </p>
                        <a href="/" className="btn services-btn"><img src={btnIcon} alt="" /></a>
                    </div>
                </div>
                <br />
            </div>
        </>
    );
};
