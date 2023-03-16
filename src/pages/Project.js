import image from "../images/coming-soon.webp"

const Project = ()=> {

    return <div>
        <section className="p-4 mt-4 work" id="work">
      <div className="container-fluid">
        <h1 className="text-light text-center pb-5">Work</h1>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card mb-3">
              <img
                src={image}
                className="portfolio-img"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  this is text to summerise what this project is about
                </p>
                <p className="card-text">
                  <small className="text-muted">CSS - HTML</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card mb-3">
              <img
                src={image}
                className="portfolio-img"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">
                  this is text to summerise what this project is about
                </p>
                <p className="card-text">
                  <small className="text-muted">CSS - HTML</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6 col-sm-12">
            <div className="card mb-3">
              <img
                src={image}
                className="portfolio-img"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">
                  this is text to summerise what this project is about
                </p>
                <p className="card-text">
                  <small className="text-muted">CSS - HTML - JS</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card mb-3">
              <img
                src={image}
                className="portfolio-img"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Project 4</h5>
                <p className="card-text">
                  this is text to summerise what this project is about
                </p>
                <p className="card-text">
                  <small className="text-muted">CSS - HTML - JS</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card mb-3">
              <img
                src={image}
                className="portfolio-img"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Project 5</h5>
                <p className="card-text">
                  this is text to summerise what this project is about
                </p>
                <p className="card-text">
                  <small className="text-muted">CSS - HTML - JS</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card mb-3">
              <img
                src={image}
                className="portfolio-img"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Project 6</h5>
                <p className="card-text">
                  this is text to summerise what this project is about
                </p>
                <p className="card-text">
                  <small className="text-muted">CSS - HTML - JS</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

}

export default Project;