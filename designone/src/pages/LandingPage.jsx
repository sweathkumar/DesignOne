import React from "react";
import "./landingPage.css";
import Card from "../components/card";
const LandingPage = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <Card>
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <div className="row">
                      <h2 className="fw-bold">Welcome to my Build Lab</h2>
                    </div>
                    <div className="row">
                      <p class="my-2 fs-5 fw-bold text-secondary">
                        a product-minded developer who crafts practical tools
                        with code and AI.
                      </p>
                    </div>
                    <div className="row">
                      <p className="fs-5 text-secondary">
                        Here, I don't just experiment — I ship. Whether it's a
                        resume generator for job seekers or automation tools for
                        digital earners, I build apps that deliver value from
                        day one.
                      </p>
                    </div>
                    <div className="row my-3 flex-row-reverse">
                      <div className="col-2">
                        <button className="btn btn-dark">Subscribe</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-4 mt-lg-0 col-lg-4">
                    <div className="row">
                      <h3>What do i do?</h3>
                    </div>
                    <div className="row my-3">
                      <div className="col-12">
                        <span className="text-secondary">
                          AI-Powered Web Apps – React-based tools infused with
                          GPT intelligence
                        </span>
                      </div>
                      <div className="col-12">
                        <span className="text-secondary">
                          Automation Projects – Tools that save time, earn
                          passively, or both
                        </span>
                      </div>
                      <div className="col-12">
                        <span className="text-secondary">
                          Frontend Engineering – Clean UI. Fast UX. Scalable
                          code
                        </span>
                      </div>
                      <div className="col-12">
                        <span className="text-secondary">
                          Minimal Design, Maximum Functionality
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row my-2">
                <h3>Recent Works</h3>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <Card>
                    <img className="subCard" src="3./resources/imga.jpg" alt="" />
                    <div className="row">
                      <h5>MoodPlay</h5>
                      <p className="text-secondary">Get Spotify songs based on your mood within a second using ai</p>
                    </div>
                    <div className="row">
                      <button className="btn btn-dark">View Site</button>
                    </div>
                  </Card>
                </div>
                <div className="col-12 col-md-4">
                  <Card>
                    <img src="" alt="" />
                  </Card>
                </div>
                <div className="col-12 col-md-4">
                  <Card>
                    <img src="" alt="" />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
