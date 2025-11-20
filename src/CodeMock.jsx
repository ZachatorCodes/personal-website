import { useEffect } from "react";
import Timer from "./Timer";

function CodeMock() {

  const mockup = `
    mockup-code

    mt-6 w-90/100
    mx-auto
   
    lg:mt-9 lg:w-60/100
    xl:mt-12 xl:w-50/100
  `;

  let codeText = `
    text-lg
    md:text-xl
    lg:text-3xl
  `;

  let codeTextFlex = `
    flex
    text-lg
    md:text-xl
    lg:text-3xl
  `;

  useEffect(() => {
    const timer = new Timer;

    // return (
    //   timer.endTimer()
    // );
  }, []);

  return (
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
      <pre data-prefix="6" className={codeTextFlex}>
        <code id="animated-text"></code>
        <h1 id="cursor">|</h1>
      </pre>
    </div>
  );
}

export default CodeMock;
