import { useEffect } from "react";

function Home() {
  const mockup = `
    mockup-code

    mt-6 w-70/100
    mx-auto
   
    md:mt-6
    lg:mt-9 lg:w-60/100
    xl:mt-12 xl:w-50/100
  `;
  const codeText = `
    text-s
    md:text-lg
    lg:text-2xl
  `;

  const textOptions = ["STEM tutor", "student", "outdoor enthusiast"];
  let textIndex = 0;
  let letterArr = textOptions[textIndex].split("");
  let letterIndex = 0;

  useEffect(() => {
    const element = document.getElementById("animated-text");
    const buildInterval = setInterval(() => {
      if (element.textContent.length < letterArr.length) {
        element.textContent = element.textContent += letterArr[letterIndex];
        letterIndex++;
      } else {
        clearInterval(buildInterval);
      }
    }, 100);
  }, []);

  return (
    <div>
      <div className={mockup}>
        <pre data-prefix="1" className={codeText}>
          <code>Hello there!</code>
        </pre>
        <pre data-prefix="2" className={codeText}>
          <code></code>
        </pre>
        <pre data-prefix="3" className={codeText}>
          <code>My name is Zach Schwartz</code>
        </pre>
        <pre data-prefix="4" className={codeText}>
          <code>and I am a...</code>
        </pre>
        <pre data-prefix="5" className={codeText}>
          <code></code>
        </pre>
        <pre data-prefix="6" className={codeText}>
          <code id="animated-text"></code>
        </pre>
      </div>
    </div>
  );
}

export default Home;
