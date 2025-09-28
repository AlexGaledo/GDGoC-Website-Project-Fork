import React from "react";
import "./Content.css";


/* content section images */
import whoWeAre from "../../assets/home-images/who_we_are.png";
import whatWeDo from "../../assets/home-images/what_we_do.png";
import whatYoullGet from "../../assets/home-images/what_youll_get.png";
import faqs from "../../assets/home-images/faqs.png";

/* wave assets */
import asset_1 from "../../assets/home-images/asset_1.png";
import asset_2_5 from "../../assets/home-images/asset_2_5.png";
import asset_3_6 from "../../assets/home-images/asset_3_6.png";
import asset_4_7 from "../../assets/home-images/asset_4_7.png";

export default function Content() {
  return (
    <section className="content">
      <div className="waves">
        <img src={asset_1} alt="wave 1" />
        <img src={asset_2_5} alt="wave 2" />
        <img src={asset_3_6} alt="wave 3" />
        <img src={asset_4_7} alt="wave 4" />
        <img src={asset_2_5} alt="wave 5" />
        <img src={asset_3_6} alt="wave 6" />
        <img src={asset_4_7} alt="wave 7" />
      </div>

      {/* Overlay content */}
      <div className="content-overlay">
        {/* Who we are */}
        <section className="content-block reverse">
          <div className="content-image">
            <img src={whoWeAre} alt="Who We Are" />
          </div>
          <div className="content-text">
            <h1>Who we are</h1> <br/>
            <h2>
              Student Leaders driven by{" "}
              <span className="highlight red">Passion</span>
            </h2>
            <p>
              Google Developer Groups on Campus - Technological University of
              the Philippines - Manila is a community of students from any
              academic undergraduate background that aims to build student's
              professional and personal network in technology, specifically
              software engineering, and at the same time get access to Google
              developer resources and work together to build solutions for local
              problems in a peer-to-peer learning environment.
            </p>
            <button className="btn-primary">Meet the Team</button>   {/*mapapalitan lahat ng primary button huhu adjust mo na lang*/}
          </div>
        </section>

        {/* What we do */}
        <section className="content-block">
          <div className="content-image">
            <img src={whatWeDo} alt="What We Do" />
          </div>
          <div className="content-text">
            <h1>What we do</h1> <br/>
            <h2>
              Build projects together with{" "}
              <span className="highlight yellow">Junior Googlers!</span>
            </h2> 
            <p>
              We bridge the gap between theory and practice. We encourage
              passionate students to build projects that are relevant to solve
              problems in our community.
            </p>
            <button className="btn-primary">Projects</button>
          </div>
        </section>

        {/* What you'll get */}
        <section className="content-block reverse">
          <div className="content-image">
            <img src={whatYoullGet} alt="What You'll Get" />
          </div>
          <div className="content-text">
            <h1>What you’ll get</h1> <br/>
            <h2>Learn more about Google Technologies!<br/>
              <span className="highlight red">Flutter</span>{" "}
              <span className="highlight blue">Android</span>{" "}
              <span className="highlight green">Tensorflow</span>{" "}
              <span className="highlight yellow">Google Cloud</span> and{" "}
              <span className="highlight red">Firebase</span>.
            </h2> 
            <p>
              These are just one of the Technologies we're excited about. Grab
              the opportunity and challenge yourself to build real-life
              applications that solve problems within our community.
            </p>
            <button className="btn-primary">Codelabs</button>
          </div>
        </section>

        {/* FAQs */}
        <section className="content-block">
          <div className="content-image">
            <img src={faqs} alt="FAQs" />
          </div>
          <div className="content-text">
            <h1>FAQs</h1> <br/>
            <p>
              <span className="faq-question">Is there a Membership Fee?</span>
            </p>
            <p>
              Google Developer Groups on Campus is a Student led Non-Profit
              Organization. We don't require any membership fees to our aspiring
              Junior Googlers.
            </p>
            <p>
              <span className="faq-question">
                Are events held online or hybrid?
              </span>
            </p>
            <p>
              The events can be held either online or in-person (face to face),
              depending on the circumstances and preferences.
            </p>
            <p>
              <span className="faq-question">
                I'm not from TUP Manila, can I still join?
              </span>
            </p>
            <p>
              Unfortunately, we only accept TUP Manila students as of the
              moment.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}