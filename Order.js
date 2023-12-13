export default class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.items = [];
    this.totalAmount = 0;
  }

  //Method untuk menambahkan data pesanan berdasarkan data produk yang ada di keranjang
  createOrder(cart) {
    this.items = [...cart.items];
    this.totalAmount = this.calculateTotalAmount(cart);
  }

  //Method untuk menghitung total Amount
  calculateTotalAmount(cart) {
    return cart.items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  }

  //Method untuk menampilkan data pesanan
  displayOrderDetails() {
    console.log(`\nOrder ID: ${this.orderId}`);
    console.log("Order items:");
    this.items.forEach((item) => {
      console.log(`${item.product} - Quantity: ${item.quantity}`);
    });
    console.log(`Total Amount: ${this.totalAmount}`);
  }
}
