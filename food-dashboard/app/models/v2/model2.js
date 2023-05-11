export class Food2 {
  constructor(id, name, type, discount, img, desc, price, status) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.discount = discount;
    this.status = status;
    this.img = img;
    this.desc = desc;
  }
  calculateDiscount() {
    return Math.floor(this.price * ((100 - this.discount) / 100));
  }
}
