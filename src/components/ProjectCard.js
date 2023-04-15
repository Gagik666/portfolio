import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, projectUrl, QRImgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx" >
          <img src={QRImgUrl} />
        </div>

      </div>
      <h2 style={{ textAlign: "center" }}>
        <a style={{ textDecoration: 'none', color: '#fff' }} href={projectUrl} target="_blank">{title}</a>
      </h2>
    </Col>
  )
}
