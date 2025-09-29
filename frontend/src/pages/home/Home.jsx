import React, { useState } from "react";
import Navbar from "../../components/navigation-bar/Navbar";
import Footer from "../../components/footer-section/Footer";
import "./Home.css";

/* slide defaults */
import slide_default_1 from "../../assets/home-images/slide_default_1.png";
import slide_default_2 from "../../assets/home-images/slide_default_2.png";
import slide_default_3 from "../../assets/home-images/slide_default_3.png";
import slide_default_4 from "../../assets/home-images/slide_default_4.png";
import slide_default_5 from "../../assets/home-images/slide_default_5.png";
import slide_default_6 from "../../assets/home-images/slide_default_6.png";
import slide_default_7 from "../../assets/home-images/slide_default_7.png";
import slide_default_8 from "../../assets/home-images/slide_default_8.png";
import slide_default_9 from "../../assets/home-images/slide_default_9.png";
import slide_default_10 from "../../assets/home-images/slide_default_10.png";

/* sponsors */
import datacampBW from "../../assets/home-images/datacamp_1.png";
import datacampColor from "../../assets/home-images/datacamp_2.png";
import githubBW from "../../assets/home-images/github_1.png";
import githubColor from "../../assets/home-images/github_2.png";

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

const slides = [
  slide_default_1,
  slide_default_2,
  slide_default_3,
  slide_default_4,
  slide_default_5,
  slide_default_6,
  slide_default_7,
  slide_default_8,
  slide_default_9,
  slide_default_10,
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isDatacampHover, setIsDatacampHover] = useState(false);
  const [isGithubHover, setIsGithubHover] = useState(false);

  const goPrev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const goNext = () =>
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));

  return (
    <>
      <Navbar />
      <section className="slideshow-wrap">
        <div
          className="slideshow-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>

        <div className="overlay">
          <h1>
            Connecting Student Developers <br /> with the Power of{" "}
            <span className="google">
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </span>{" "}
            Technologies
          </h1>{" "}
          <br />
          <p>
            The official Google Developer Groups on Campus at <br />
            <span className="tup">
              Technological University of the Philippines - Manila
            </span>
          </p>{" "}
          <br />
          <button className="btn-primary">Discover GDSC</button>
        </div>

        <button
          className="arrow-btn prev"
          onClick={goPrev}
          aria-label="Previous slide"
        />
        <button
          className="arrow-btn next"
          onClick={goNext}
          aria-label="Next slide"
        />

        {/* dots */}
        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* sponsors row */}
        <div className="sponsors">
          <img
            src={isDatacampHover ? datacampColor : datacampBW}
            alt="Datacamp"
            onMouseEnter={() => setIsDatacampHover(true)}
            onMouseLeave={() => setIsDatacampHover(false)}
          />
          <img
            src={isGithubHover ? githubColor : githubBW}
            alt="GitHub"
            onMouseEnter={() => setIsGithubHover(true)}
            onMouseLeave={() => setIsGithubHover(false)}
          />
        </div>
      </section>

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

        <div className="content-overlay">
          {/* Who we are */}
          <section className="content-block reverse">
            <div className="content-image">
              <img src={whoWeAre} alt="Who We Are" />
            </div>
            <div className="content-text">
              <h1>Who we are</h1> <br />
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
                developer resources and work together to build solutions for
                local problems in a peer-to-peer learning environment.
              </p>
              <button className="btn-primary">Meet the Team</button>
            </div>
          </section>

          {/* What we do */}
          <section className="content-block">
            <div className="content-image">
              <img src={whatWeDo} alt="What We Do" />
            </div>
            <div className="content-text">
              <h1>What we do</h1> <br />
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
              <h1>What you’ll get</h1> <br />
              <h2>
                Learn more about Google Technologies! <br />
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
              <h1>FAQs</h1> <br />
              <p>
                <span className="faq-question">
                  Is there a Membership Fee?
                </span>
              </p>
              <p>
                Google Developer Groups on Campus is a Student led Non-Profit
                Organization. We don't require any membership fees to our
                aspiring Junior Googlers.
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
      <Footer />
    </>
  );
}