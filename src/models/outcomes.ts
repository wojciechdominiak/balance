export default class Outcomes {
  id: string;
  name: string;
  price: number;
  date: Date;

  constructor(name: string, price: number, date: Date) {
    this.id = new Date().toISOString();
    this.name = name;
    this.price = price;
    this.date = date;
  }
}
