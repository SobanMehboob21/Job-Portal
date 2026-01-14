import React from "react";
import bgVideo from "../../assets/bgVideo.mp4";
import Header from "../../components/Header";
import "../../stylesheet/user/UserHome.css";
import img1 from "../../assets/img1.svg";
import a from '../../assets/a.webp'
import b from '../../assets/b.webp'
import c from '../../assets/d.webp'
import e from '../../assets/e.webp'
import f from '../../assets/f.webp'

export const UserHome = () => {
  return (
    <>
      <Header />
      <div className="wrap">
        <div className="bg-video_main">
          {/* Background Video */}
          <video className="bg-video" autoPlay muted loop playsInline>
            <source src={bgVideo} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="overlay"></div>
        </div>
        <div className="home_content">
          <h1>Find Your Dream Job Today!</h1>
          <p>
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>
          <div className="home_tags">
            <div className="tags_data">
              <div className="img_circle">
                <img src={img1} />
              </div>

              <div className="tags_content">
                <p className="number">25,850</p>
                <p className="type">Jobs</p>
              </div>
            </div>
            <div className="tags_data">
              <div className="img_circle">
                <img src={img1} />
              </div>

              <div className="tags_content">
                <p>25,850</p>
                <p>Jobs</p>
              </div>
            </div>
            <div className="tags_data">
              <div className="img_circle">
                <img src={img1} />
              </div>

              <div className="tags_content">
                <p>25,850</p>
                <p>Jobs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clients">
          <div className="client_imgs">
            <img src={a} />
            <img src={b} />
            <img src={c} />
            <img src={e} />
            <img src={f} />
          </div>
        </div>
      </div>
    </>
  );
};
