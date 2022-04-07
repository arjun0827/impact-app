import './why-us-section.css';

const UsSection = () => {
  return (
    <div className="why-us-section py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="fw-bold pb-5">Why You Should Choose Us</h3>
            <div className="d-flex">
              <img
                className="green-outline-images"
                src="/img/24-hours-support.png"
                alt=""
              />
              <div className="pe-md-5 pe-0">
                <h5 className="fw-bold ps-4">Professional</h5>
                <p className="pe-md-5 pe-0 mx-4">
                  Sapiente, assumenda suscipit autem ab expedita dignissimos,
                  corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                  culpa qui eos ullam minima quo, consequuntur.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <img className="green-outline-images" src="/img/good-review.png" alt="" />
              <div className="pe-md-5 pe-0">
                <h5 className="fw-bold ps-4">Good Review</h5>
                <p className="pe-md-5 pe-0 mx-4 ">
                  Sapiente, assumenda suscipit autem ab expedita dignissimos,
                  corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                  culpa qui eos ullam minima quo, consequuntur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/img/about-us-min.png" alt="" className="w-100"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsSection;
