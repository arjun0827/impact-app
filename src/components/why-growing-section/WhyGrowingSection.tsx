// import Modal from "../modalSection/Modal";
import {MdOutlineClose} from 'react-icons/md'
import { useState } from "react";
import "./WhyGrowingSection.css";

const GrowingSection = () => {
  const [modalValue , setModalValue] = useState(false);
  return (
    <div className="pb-5">
      <div className="container">
        <div className="why-growing-section">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-lg-4">
              <div className="pe-2">
                <h3 className="fw-bold pb-3">
                  Why Growing Your Business is Important
                </h3>
                <p>
                  Labore id odit sit optio, voluptas sequi nobis aliquid
                  dignissimos iure recusandae vitae nam facere hic quis
                  voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est
                  temporibus ipsum, vel rem eveniet facere et velit sunt
                  aspernatur eaque quis, dolorem magnam quisquam? Facere?
                </p>
                <div className="pt-2 learn-more-btn ">
                  <button className="btn text-white">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <img
                src="/img/illustration-1.jpg"
                className="w-100 "
                alt="not found"
              />
            </div>
          </div>
        </div>

        <div className="row py-5 my-5">
          <div className="col-lg-4 d-flex">
            <img
              className="green-outline-images"
              src="/img/24-hours-support.png"
              alt=""
            />
            <div className="ps-4">
              <h5 className="fw-bold">Professional</h5>
              <p>
                Sapiente, assumenda suscipit autem ab expedita dignissimos,
                corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                culpa qui eos ullam minima quo, consequuntur.
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <img
              className="green-outline-images"
              src="/img/good-review.png"
              alt=""
            />
            <div className="ps-4">
              <h5 className="fw-bold">Professional</h5>
              <p>
                Sapiente, assumenda suscipit autem ab expedita dignissimos,
                corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                culpa qui eos ullam minima quo, consequuntur.
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <img
              className="green-outline-images"
              src="/img/quotation.png"
              alt=""
            />
            <div className="ps-4">
              <h5 className="fw-bold">Professional</h5>
              <p>
                Sapiente, assumenda suscipit autem ab expedita dignissimos,
                corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                culpa qui eos ullam minima quo, consequuntur.
              </p>
            </div>
          </div>
        </div>

        <div className="pb-4">
          <div className="pb-5">
            <div className="row d-flex">
              <div className="col-lg-7 order-lg-1 order-2 ">
                <div className="modals position-relative" onClick={() => setModalValue(true)}>
                  <button className="cls_button position-absolute"></button>
                  <img src="/img/hero-min.jpg" className="w-100 h-100" alt="" />
                </div>
                {modalValue? 
                <div className="video-outer">
                  <div className='video'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/KI2lsdXJQ40?start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
           <div className='position-absolute top-0 end-0 p-4 modal-cls-button'  onClick={() => setModalValue(false)}><MdOutlineClose color='white' size={40} /></div>
                </div>
                :null}
                
              </div>
              <div className="col-lg-5 order-lg-2 order-1">
                <div className="ps-0 ps-lg-5 py-5 ms-lg-5 ms-0">
                  <h2 className="fw-bold">Get Started with Impact</h2>
                  <p>
                    Labore id odit sit optio, voluptas sequi nobis aliquid
                    dignissimos iure recusandae.
                  </p>
                  <ul className="list-unstyled growing-section-list">
                    <li>Deserunt harum incidunt</li>
                    <li>Ex nesciunt est temporibus ipsum</li>
                    <li>Vel rem eveniet facere et velit sunt</li>
                    <li>Aspernatur eaque quis</li>
                    <li>Dolorem magnam quisquam? Facere</li>
                  </ul>
                  <div className="pb-4 learn-more-btn ">
                    <button className="btn text-white">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowingSection;
