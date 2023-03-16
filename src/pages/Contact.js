const Contact = ()=> {
    return <div>
        <section className="my-4" id="contact">
      <div className="container-fluid p-5 mb-5">
        <h1 className="text-light text-center pb-5">Lets Chat!</h1>
        <div className="row">
          <div className="col-sm-6 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="name"
            />
          </div>
          <div className="col-sm-6 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="col my-2 p-1">
            <textarea
              type="text"
              className="form-control"
              placeholder="message"
              aria-label="Email"
            ></textarea>
          </div>
          <div>
            <input
              className="btn-lg btn-primary p-2 px-3 submit-btn"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </section>
    </div>

}

export default Contact;