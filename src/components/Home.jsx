import CodeMock from "./CodeMock";
import headshot from "/headshot.JPEG";
import riverbg from "/river-bg.jpg"

function Home() {
  const mainContent = `
    flex flex-col sm:flex-row
    items-center justify-center
    mt-5 sm:mt-8 xl:mt-10
  `;
  
  const mockup = `
    mockup-code
    w-80/100 sm:w-50/100 xl:w-50/100
    shadow-xs sm:shadow-2xl
    sm:ml-3 xl:ml-5
  `;

  const imageStyle = `
    h-50 sm:h-50 md:h-62 xl:h-75
    w-60 sm:w-55 md:w-62 xl:w-75
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
