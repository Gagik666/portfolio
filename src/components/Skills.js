import js from "../assets/img/js.svg";
import kotlin from "../assets/img/kotlin.svg";
import react_native from "../assets/img/react_native.svg";
import react_js from "../assets/img/react_js.svg";
import git from "../assets/img/git.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import ts from "../assets/img/typescript.svg";
import firebase from "../assets/img/firebase.svg";
import json from "../assets/img/json.svg";
import redux from "../assets/img/redux.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>I am committed to staying up-to-date with the latest industry trends and technologies, and I am always seeking new challenges to help me grow as a professional.

                      Whether it's learning a new programming language or exploring a new design tool, I am constantly pushing myself to improve my skills and deliver the best results for my clients.</p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                      <div className="item">
                        <img src={js} alt="Image" />
                        <h5>Javascript   </h5>
                      </div>

                      <div className="item">
                        <img src={ts} alt="Image" />
                        <h5>TypeScript</h5>
                      </div>
                      <div className="item">
                        <img src={kotlin} alt="Image" />
                        <h5> Kotlin</h5>
                      </div>
                      <div className="item">
                        <img src={react_native} alt="Image" />
                        <h5>React Native</h5>
                      </div>
                      <div className="item">
                        <img src={react_js} alt="Image" />
                        <h5>React Js</h5>
                      </div>
                      <div className="item">
                        <img src={html} alt="Image" />
                        <h5>HTML</h5>
                      </div>
                      <div className="item">
                        <img src={css} alt="Image" />
                        <h5>CSS</h5>
                      </div>
                      <div className="item">
                        <img src={redux} alt="Image" />
                        <h5>Redux</h5>
                      </div>
                      <div className="item">
                        <img src={firebase} alt="Image" />
                        <h5>Firebase</h5>
                      </div>
                      <div className="item">
                        <img src={json} alt="Image" />
                        <h5>JSON</h5>
                      </div>
                      <div className="item">
                        <img src={git} alt="Image" />
                        <h5>git</h5>
                      </div>

                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />

          </div>}
      </TrackVisibility>
    </section>
  )
}
