import CodeMock from "../components/CodeMock";
import headshot from "/headshot.JPEG";
import riverbg from "/river-bg.jpg"

function Home() {
  document.title = "ZachatorCodes | Home"

  const mainContent = `
    flex flex-col sm:flex-row
    items-center justify-center
    py-5 sm:py-8 xl:py-10
    bg-center bg-cover
  `;
  
  const mockup = `
    mockup-code
    w-80/100 sm:w-50/100 xl:w-50/100
    shadow-xs sm:shadow-2xl
    sm:ml-3 xl:ml-5
  `;

  const imageStyle = `
    h-50 md:h-62 xl:h-75
    w-50 md:w-62 xl:w-75
    rounded-full
    object-cover
    shadow-xs sm:shadow-2xl
    border-5
    mb-4 sm:mb-0
    sm:mr-3 xl:mr-5
  `;

  return (
    <div className={mainContent} style={{backgroundImage: `url(${riverbg})`}}>
      <img src={headshot} className={imageStyle} />
      <CodeMock mockup={mockup} />
    </div>
  );
}

export default Home;
