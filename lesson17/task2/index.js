// input:
// output:
//
//
//  1. (Экспортируемый) объект с методами.
//     *  запросить номер (задержка)
//     *  вывести в консоль номер

export const callbackPrompt = {
  message: `Please, give your phone number!`,
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showDeferredPrompt(1000);
