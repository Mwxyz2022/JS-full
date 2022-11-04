// input:
// output:
//
//    1. (Экспортируемый) объект
//    2. метод:
//      * startTimer - запускает таймер.
//      * getTime - Возвращает текущее состояние таймера.
//      * stopTimer - остановить таймер (сохранить состояние), если startTimer => продолжить c сохраненного сост.
//      * resetTimer - Обнулить таймер.
//

export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,

  startTimer() {
    const id = setInterval(() => {
      if (this.secondsPassed === 59) {
        this.minsPassed += 1;
      }
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
      }
      this.secondsPassed += 1;
      this.intervalId = id;
      this.getTime();
    }, 1000);
  },

  getTime() {
    const seconds = this.secondsPassed > 9 ? this.secondsPassed : `0${this.secondsPassed}`;
    if (seconds === 60) {
      return `${this.minsPassed}:00`;
    }
    return `${this.minsPassed}:${seconds}`;
  },

  stopTimer() {
    clearInterval(this.intervalId);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
    this.intervalId = null;
  },
};
