// input:
// output:
//
//  1.Создать объект (экспортируемый)
//  2. Методы:
//     *  Собирает полное имя
//     **  Принимает полное имя - разбирает имя => заменяет поля.
//
//
export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const [name, surname] = fullName.split(' ');
    this.firstName = name;
    this.lastName = surname;
  },
};
