import {SliderComp} from "./SliderComp";
import slide1 from '../assets/images/slider1.png';
import slide2 from '../assets/images/slider2.png';
import slide3 from '../assets/images/slider3.png';
import slide4 from '../assets/images/slider4.png';

const data = [
    {
      title: "Skyskuy Tower",
      subTitle: "Renovation & Architecture",
      image: slide1
    },
    {
      title: "The Fallingwater House",
      subTitle: "Building & Interior",
      image: slide2
    },
    {
      title: "The Orange Apartement",
      subTitle: "Construction & Interior",
      image: slide3
    },
    {
      title: "The Fallingwater House",
      subTitle: "Building & Interior",
      image: slide4
    }
  ];
export default function Projects ({id}) {
    return (
        <>
        <div className="container-fluid projects" id={id}>
            <SliderComp
                autoplay={true}
                autoplaySpeed={2000}
                slideNum={4}
                data={data}
                heading={"Featured Projects"}
            />
        </div>
            
        </>
    );
}