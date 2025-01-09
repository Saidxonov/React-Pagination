import React from "react";
import RightSideImg from "../../images/right-side-img.svg";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  function handleRedirect() {
    navigate("/pagination");
  }
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="sides">
            <div className="left-side">
              <h1 className="title">
                Launch your <span>Business</span> with us
              </h1>
              <p className="font2">
                You can read this text, but it doesn’t matter. It’s concept,
                <br /> not important for your life or life your friends
              </p>
              <div className="buttons">
                <button onClick={handleRedirect} className="button1 font2">
                  Vazifalarni Ko'rish
                </button>
                <button className="button2 font2">Know more</button>
              </div>
            </div>
            <div className="right-side">
              <img src={RightSideImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
