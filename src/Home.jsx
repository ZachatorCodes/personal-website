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
  let codeText = `
    text-md
    md:text-xl
    lg:text-3xl
  `;

  const words = [
    "Computer Science Student",
    "STEM Tutor",
    "Outdoor Enthusiast",
    "Full-Stack Developer",
  ];

  let word = 0;
  let letters = words[word].split("");
  let letter = 0;

  function buildWord() {
    const element = document.getElementById("animated-text");
    const addInterval = setInterval(() => {
      if (element.textContent.length < letters.length) {
        element.textContent = element.textContent += letters[letter];
        letter++;
      } else {
        clearInterval(addInterval);
        setTimeout(() => {
          destroyWord();
        }, 2000);
      }
    }, 200);
  }

  function destroyWord() {
    const element = document.getElementById("animated-text");
    letter = element.textContent.length - 1;
    const deleteInterval = setInterval(() => {
      if (element.textContent.length > 0) {
        element.textContent = element.textContent.substring(0, letter - 1);
        letter--;
      } else {
        if (word === words.length - 1) {
          word = 0;
        } else {
          word++;
        }
        letters = words[word].split("");
        clearInterval(deleteInterval);
        setTimeout(() => {
          buildWord();
        }, 25);
      }
    }, 100);
  }

  useEffect(() => {
    document.getElementById("animated-text").textContent =
      "Computer Science Student";
    setTimeout(() => {
      destroyWord();
    }, 2000);
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
        <pre data-prefix="6" className={codeText.concat("\tflex")}>
          <code id="animated-text"></code>
        </pre>
      </div>
    </div>
  );
}

export default Home;
