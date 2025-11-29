class TextHelper {
  #textbox = document.getElementById("animated-text"); // Get textbox for animated text
  #words = [
    "Full-Stack Developer",
    "Software Engineer",
    "Computer Science Student",
    "Mathematics Student",
    "Programming Tutor",
    "<-- Click On Zach",
    "Outdoor Enthusiast",
    "Lifelong Learner",
  ];

  #letters; // unused at initialization
  #word; // unused at initialization

  constructor() {
    this.wordIndex = 0; // New Variable Initialization
    this.#word = this.#words[this.wordIndex];
    this.#textbox.textContent = this.#word;
    this.letterIndex = this.#textbox.textContent.length;
    // this.#letters = this.getLettersByWord(this.#word);
  }

  getLettersByWord(word) {
    return word.split("");
  }

  nextWord() {
    if (this.wordIndex != this.#words.length - 1) {
      this.wordIndex++;
    } else {
      this.wordIndex = 0;
    }
    this.letterIndex = 0;
  }

  compareDelete() {
    if (!this.#textbox.textContent.length > 0) {
      this.#word = this.nextWord();
    }
    return this.#textbox.textContent.length > 0;
  }

  getWord() {
    return this.#word;
  }

  compareAdd() {
    return (
      this.#textbox.textContent.length < this.#words[this.wordIndex].length
    );
  }

  removeLetter() {
    this.#textbox.textContent = this.#textbox.textContent.slice(0, -1);
  }

  addLetter() {
    this.#textbox.textContent = this.#words[this.wordIndex].slice(
      0,
      this.letterIndex + 1
    );
    this.letterIndex += 1;
  }
}

export default TextHelper;
