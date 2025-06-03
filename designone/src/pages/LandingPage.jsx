import React from "react";
import "./landingPage.css";
import Card from "../components/card";
import Button from "../components/Button";

const LandingPage = () => {
  return (
    <div>
      <section class="navBar py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-light">SWEET</h3>
            </div>
            <div className="col d-none d-md-block">
              <div className="row d-flex">
                <a href="/" className="col-3 text-light text-center">Overview</a>
                <a href="/" className="col-3 text-light text-center">Latest</a>
                <a href="/" className="col-3 text-light text-center">Support</a>
                <a href="/" className="col-3 text-light text-center">About</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <Card>
                <div className="row my-3">
                  <h3>Welcome to my Build Lab </h3>
                </div>
                <div className="row">
                  <p>
                    a product-minded developer who crafts practical tools with
                    code and AI.
                  </p>
                </div>
                <div className="row">
                  <p>
                    Here, I don't just experiment — I ship. Whether it's a
                    resume generator for job seekers or automation tools for
                    digital earners, I build apps that deliver value from day
                    one.
                  </p>
                </div>
                <div className="row pt-4">
                    <div className="col d-flex flex-row-reverse">
                        <Button><p className="text-light">Start</p></Button>
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
              <h4>Recent Works</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Card>
                <div className="row">
                  <Card />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
