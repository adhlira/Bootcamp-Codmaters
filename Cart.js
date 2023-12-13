export default class Cart {
  items = [];
  constructor(cartId) {
    this.cartId = cartId;
  }

  //Method untuk menambahkan data produk ke keranjang
  addItem(product, quantity, price) {
    const cekItem = this.items.find((item) => item.product === product);
    if (cekItem) {
      cekItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity, price });
    }
  }

  //Method untuk menampilkan data keranjang
  viewCart() {
    if (this.items.length === 0) {
      console.log("Keranjang Kosong");
    } else {
      console.log(`ID: ${this.cartId}`);
      console.log("Produk yang ada di keranjang :");
      this.items.forEach((item) => {
        console.log(`Produk : ${item.product}, Harga Satuan : ${item.price}, Jumlah : ${item.quantity}`);
      });
      const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
      console.log(`Jumlah item : ${totalItems}`);
    }
  }

  //Method untuk menghapus data keranjang
  removeItem(product) {
    const index = this.items.findIndex((item) => item.product === product);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Produk ${product} telah di hapus.`);
    } else {
      console.log(`Produk ${product} tidak ada di keranjang.`);
    }
  }
}
