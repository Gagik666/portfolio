import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {

    let fullText = "Mobile Developer"
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Gagik`}  <span className="wrap">{text}</span> </h1>
                  <p>I specialize in using React Native and Kotlin to create user-friendly and visually appealing applications for iOS and Android platforms.  As a recent graduate with a degree in Computer Science, I have completed a number of mobile development courses and have had experience working on a variety of projects. I am comfortable working both independently and as part of a team, and I thrive in fast-paced environments where I can apply my skills to solve complex problems.</p>
                  <a style={{ textDecoration: 'none', color: '#fff', fontSize: 30 }} href="https://myresume.ru/resume/aPohM4qaYbq/" target="_blank"> <span style={{ marginRight: 20 }}>My CV:</span>  <ArrowRightCircle size={25} /></a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={require("../assets/img/Portfolio_image.png")} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
