import { Link } from "react-router";
import aboutImg from "/about-me.JPEG";
import resumeImg from "/resume.JPEG";
import projectsImg from "/projects.JPEG";

function HomeContent() {
  const cardStyle = `
    card-sm sm:card rounded-2xl
    bg-base-100 shadow-sm sm:shadow-lg
    w-82 sm:w-96
    max-h-65 sm:max-h-90
    border-3
  `;

  const imageStyle = `
    saturate-120
  `

  const linkStyle = `
    hover-3d
    mx-auto sm:mx-8 mt-6 sm:my-10
  `
  const linkStyleBottom = `
    hover-3d
    mx-auto sm:mx-8 my-6 sm:my-10
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
      <Link to="/projects" className={linkStyleBottom}>
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
