class Confirm {
  static #list = []

  constructor(data) {
    this.code = Confirm.generateCode()
    this.data = data
  }
  //Генеруємо 4 значний код
  static generateCode = () =>
    Math.floor(Math.random() * 9000) + 1000

  static create = (data) => {
    this.#list.push(new Confirm(data))
    //Щоб код видалився через 24 год
    setTimeout(() => {
      this.delete(code)
    }, 24 * 60 * 60 * 1000) //24 год. в мілісекундах
    console.log(this.#list)
  }

  static delete = (code) => {
    const length = this.#list

    this.#list = this.#list.filter(
      (item) => item.code !== code,
    )
    return length > this.#list.length
  }

  static getData = (code) => {
    const obj = this.#list.find(
      (item) => item.code === code,
    )
    return obj ? obj.data : null
  }
}

module.exports = { Confirm }
