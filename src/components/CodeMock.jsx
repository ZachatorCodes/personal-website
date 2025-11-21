import { useEffect } from "react";
import Timer from "../classes/Timer";

function CodeMock({mockup}) {

  let codeText = `
    text-lg
    xl:text-3xl
  `;

  let codeTextFlex = `
    flex
    text-lg
    xl:text-3xl
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
        <code>Hello there 👋</code>
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
