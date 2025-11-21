import CodeMock from "./CodeMock";
import headshot from "/headshot.JPEG";

function Home() {
  const mainContent = `
    flex items-center justify-center
    mt-12
    px-5
  `;
  
  const mockup = `
    mockup-code
    w-40/100 xl:w-50/100
    shadow-2xl
    ml-3 xl:ml-5
  `;

  const imageStyle = `
    h-60 xl:h-75
    w-60 xl:w-75
    rounded-full
    object-cover
    shadow-2xl
    border-5
    ml-3 xl:ml-5
  `;

  return (
    <div className={mainContent}>
      <img src={headshot} className={imageStyle} />
      <CodeMock mockup={mockup} />
    </div>
  );
}

export default Home;
