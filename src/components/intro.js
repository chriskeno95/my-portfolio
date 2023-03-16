 const Intro = () => {
    return (<section className="bg-img" id="home">
      <div className="container-fluid text-light p-5 intro">
        <div className="d-sm-flex intro-content">
          <div>
            <h1
              className="pt-sm-5 header-text display-1 font-monospace py-sm-4 mt-sm-3"
            >
              Dia duit<span className="explaination-point">!</span><br />Is mise
              Crístóir
            </h1>
            <p className="intro-text-Primary pt-sm-4 h3 lh-lg font-monospace">
              Hi! My name is chris, an Irish designer<br />
              and front end web developer in London
            </p>
          </div>
          <button
            className="hire-me text-Primary ms-auto mt-auto btn btn-lg custom-btn"
          >
            HIRE ME
          </button>
        </div>
      </div>
    </section>
        
    );
   
  };

  export default Intro;