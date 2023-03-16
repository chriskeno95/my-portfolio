import { NavHashLink } from 'react-router-hash-link';
import image from '../images/chris.jpg'
const About = () => {
    return (
        <section className="about bg-light p-5" id="about">
      <div className="container-fluid d-sm-flex">
        <div className="row">
          <div className="col-md-5 px-md-5 pt-sm-5">
            <img
              className="rounded-circle about-me-img img-fluid w-250"
              src={image}
            />
          </div>
          <div className="col-md-7 g-5 lh-lg">
            <p className="about-me-txt">
              Hi! My name is Chris and I am an Irish designer and front end web
              developer living and working in London, UK. Before working as a
              front end developer I studied Interaction Design at the Belfast
              School of Art and design where I learned the fundementals of UX/UI
              design and decovered my passion for creating and designing content
              for the web and learning about user centered design. It was while
              I was creating designs and using design technologies that I
              discovered that I wanted to know more about how designs are then
              turned into functioning products; So I dove into the world of
              front end web development and fell in love with the process of
              designing and creating my own websites from scratch.
            </p>
            <button className="text-Primary btn btn-lg custom-btn mt-4">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
    );
   
  };

  export default About;