import React from "react";
import "./Followme.css";

export default function Followme() {
  return (
    <div className="container-fluid mt-3 mb-3 d-flex justify-content-center">
      <ul className="social-list display-flex">
        <li>
          <div className="maincard p-2">
            <div className="thecard">
              <div className="thefront text-center py-4 linkedin">
                <div className="social-icon">
                  {" "}
                  <i className="fa fa-linkedin fa-2x"></i>{" "}
                </div>
              </div>
              <div className="theback py-3 px-3 text-center linkedin">
                <div className="social-text mt-1">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/rishu-tiwari-b0a632166/"
                    target="_blank"
                  >
                    <small className="font-weight-bold text-white">
                      Linkedin
                    </small>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="maincard p-2">
            <div className="thecard">
              <div className="thefront text-center py-4 instagram">
                <div className="social-icon">
                  {" "}
                  <i className="fa fa-instagram fa-2x"></i>{" "}
                </div>
              </div>
              <div className="theback py-3 px-3 text-center instagram">
                <div className="social-text mt-1">
                  {" "}
                  <a
                    href="https://www.instagram.com/rishu_0781/"
                    target="_blank"
                  >
                    <small className="font-weight-bold text-white">
                      Instagram
                    </small>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
