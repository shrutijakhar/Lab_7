
import { Link } from "react-router-dom";
import profileImg from "../assets/photo.png";

export default function Home() {
  return (
    <div className="home-container">

      <div className="hero-section">

        <img src={profileImg} alt="Shruti" className="profile-photo" />

        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight-text">Shruti</span></h1>

          <p className="hero-sub">
            3rd-year Computer Science student passionate about 
            <span className="highlight-text"> AI</span>,  
            <span className="highlight-text"> full-stack development</span>, and 
            <span className="highlight-text"> problem-solving</span>.
          </p>

          <div className="skills-badges">
            <span className="badge badge-react">React</span>
            <span className="badge badge-java">Java</span>
            <span className="badge badge-spring">Spring Boot</span>
            <span className="badge badge-python">Python</span>
            <span className="badge badge-sql">SQL</span>
          </div>

          <Link to="/projects" className="btn-modern">
            View Projects
          </Link>
        </div>

      </div>

    </div>
  );
}
