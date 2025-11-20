import TextHelper from "./TextHelper";

class Timer {
  cursor = document.getElementById("cursor"); // Get cursor

  constructor() {
    this.deleteInterval;
    this.cursorInterval = setInterval(() => {
      this.startCursor();
    }, 600);
    setTimeout(() => {
      this.deleteInterval = setInterval(() => {
        this.startDelete();
      }, 50);
    }, 2000);
    this.addInterval;
    this.textHelper = new TextHelper();
  }

  startAdd() {
    if (this.textHelper.compareAdd()) {
      this.textHelper.addLetter();
    } else {
      clearInterval(this.addInterval);
      setTimeout(() => {
        this.deleteInterval = setInterval(() => {
          this.startDelete();
        }, 50);
      }, 2000);
    }
  }

  startDelete() {
    if (this.textHelper.compareDelete()) {
      this.textHelper.removeLetter();
    } else {
      clearInterval(this.deleteInterval);
      setTimeout(() => {
        this.addInterval = setInterval(() => {
          this.startAdd();
        }, 100);
      }, 250);
    }
  }

  startCursor() {
    this.cursor.className = "transition-opacity duration-300 opacity-0";
    setTimeout(() => {
      this.cursor.className = "transition-opacity duration-300 opacity-100";
    }, 300);
  }

  endTimer() {
    clearInterval(this.cursorInterval);
    clearInterval(this.addInterval);
    clearInterval(this.deleteInterval);
  }
}

export default Timer;
