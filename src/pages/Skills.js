import ux from "../images/ux.png"
import ui from "../images/ui.png"
import FE from "../images/frontend.png"

const Skills = ()=> {
    return <div>
       <section className="p-5 skills">
      <div className="container-fluid">
        <h1 className="text-light text-center pb-5">Skills</h1>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="card">
              <img src={ux} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">
                  UX design is a passion of mine as it is all about empathy and
                  problem solving. I enjoy creating products and services
                  focused on the needs of the users, allowing them to have
                  frictionless interactions while using digital or physical
                  products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={ui} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">
                  UI design is very important for the success of any product; it
                  makes products easy to use and pleasurable for the users to
                  interact with. Creating style guides, working with colour and
                  designing content has always been something that I have
                  enjoyed as it allows me to be creative and create functional
                  design.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={FE}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  As a front end developer, I am responsible for the look, feel
                  and functionality of digital products. Paired with my design
                  knowledge, this allows me to be fully immersed in the design
                  and creation of digital products; Taking something from an
                  idea, to a sketch, and then being able to use HTML, CSS and JS
                  to create it and bring it to fruition is so rewarding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

}

export default Skills;