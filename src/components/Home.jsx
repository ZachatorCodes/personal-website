import CodeMock from "./CodeMock";
import headshot from "/headshot.JPEG";

function Home() {
  const mockup = `
    mockup-code
    w-90/100
    lg:w-60/100
    xl:w-50/100
    shadow-2xl
    ml-5
  `;

  const mainContent = `
    flex
    items-center
    content-center
    align-middle
    justify-center
    mt-9
    wv
    mt-6
    lg:mt-9 
    xl:mt-12 
  `;

  const imageStyle = `
    h-75
    w-75
    rounded-full
    object-cover
    shadow-2xl
    border-5
    mr-5
    hover-3d
  `;

  return (
    <div className={mainContent}>
      <img src={headshot} className={imageStyle} />
      <CodeMock mockup={mockup} />
    </div>
  );
}

export default Home;
