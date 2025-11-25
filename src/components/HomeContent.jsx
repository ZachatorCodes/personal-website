import { Link } from "react-router";
import aboutImg from "/about-me.JPEG";
import resumeImg from "/resume.JPEG";
import projectsImg from "/projects.JPEG";

function HomeContent() {
  const cardStyle = `
    card rounded-2xl
    bg-base-100 shadow-lg
    w-96
    max-h-80
  `;

  const imageStyle = `
    saturate-120
  `

  const linkStyle = `
    hover-3d
    mx-auto sm:mx-8 mt-5 sm:my-10
  `

  return (
    <div className="flex flex-col sm:flex-row justify-center">
      <Link to="/about" className={linkStyle}>
        <div className={cardStyle}>
          <div className="card-body">
            <h2 className="card-title">Get To Know Me</h2>
            <p>
              Click here to read my personal introduction
            </p>
          </div>
          <figure>
            <img
              src={aboutImg}
              alt="Shoes"
              className={imageStyle}
            />
          </figure>
        </div>
        {/* Empty divs needed for hover 3d effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Link>
      <Link to="/resume" className={linkStyle}>
        <div className={cardStyle}>
          <div className="card-body">
            <h2 className="card-title">Explore My Experience</h2>
            <p>
              Click here to view my virtual resume
            </p>
          </div>
          <figure>
            <img
              src={resumeImg}
              alt="Shoes"
              className={imageStyle}
            />
          </figure>
        </div>
        {/* Empty divs needed for hover 3d effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Link>
      <Link to="/projects" className={linkStyle}>
        <div className={cardStyle}>
          <div className="card-body">
            <h2 className="card-title">Browse My Creations</h2>
            <p>
              Click here to see what I've built
            </p>
          </div>
          <figure>
            <img
              src={projectsImg}
              alt="Shoes"
              className={imageStyle}
            />
          </figure>
        </div>
        {/* Empty divs needed for hover 3d effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Link>
    </div>
  );
}

export default HomeContent;
