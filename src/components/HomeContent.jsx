import { Link } from "react-router";
import aboutImg from "/about-me.JPEG";

function HomeContent() {
  const cardStyle = `
    card
    bg-base-100 shadow-sm
    mx-5 my-10 w-96
  `;

  return (
    <div className="flex flex-col sm:flex-row justify-center">
      <Link to="/about" className="hover-3d">
        <div className={cardStyle}>
          <div className="card-body">
            <h2 className="card-title">Get To Know Me</h2>
            <p>
              Click here to read my personal introduction
            </p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
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
      <Link to="/resume" className="hover-3d">
        <div className={cardStyle}>
          <div className="card-body">
            <h2 className="card-title">Explore My Experience</h2>
            <p>
              Click here to view my virtual resume
            </p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
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
      <Link to="/projects" className="hover-3d">
        <div className={cardStyle}>
          <div className="card-body">
            <h2 className="card-title">Browse My Creations</h2>
            <p>
              Click here to see what I've built
            </p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
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
