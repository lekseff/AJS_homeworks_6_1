export default class Validator {
  constructor(userName) {
    this.name = null;
    this.validateUsername(userName);
  }

  validateUsername(userName) {
    // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
    if (!(/^[-_a-zA-Z0-9]+$/.test(userName))) {
      throw new Error('Не верное имя');
    }
    // eslint-disable-next-line max-len
    // Имя не должно содержать подряд более трёх цифр,а также начинаться и заканчиваться цифрами,символами _ или -
    if (/^(\d|-|_)|\d{3,}|(_|-|\d)$/g.test(userName)) {
      throw new Error('Не верное имя');
    }
    this.name = userName;
  }
}
