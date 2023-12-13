export default class Products {
  products = [];
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
  }

  //Method untuk menambahkan data produk ke dalam array
  createProduct(productId, productName, price, description) {
    this.products.push(productId, productName, price, description);
  }

  //Method untuk memperbarui data produk
  updateProduct(index, newName) {
    if (index >= 0 && index < this.products.length) {
      this.products[index] = newName;
    } else {
      console.log("Indeks tidak valid");
    }
  }

  //Method untuk menampilkan data produk
  displayInfo() {
    console.log(this.products);
  }
}
