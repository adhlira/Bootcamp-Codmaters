import Products from "./Products.js";
import Category from "./Category.js";
import Cart from "./Cart.js";
import Order from "./Order.js";

//Definisi objek produk
const pepsodent = new Products(1, "Pepsodent", 3000, "50g");
const ciptadent = new Products(2, "Ciptadent", 6000, "70g");
const nuvo = new Products(3, "Sabun Nuvo", 5000, "keren");
const lifeboy = new Products(4, "Sabun Lifeboy", 2000, "oke");

//Definisi objek kategori
const pastaGigi = new Category("Pasta Gigi");
const sabunMandi = new Category("Sabun Mandi");
const a = new Category();
const b = new Category();
const c = new Category();

//Definisi objek keranjang
const keranjang = new Cart("Keranjang1");

//Definisi objek order
const order = new Order("Order1");

//add produk
pepsodent.createProduct(1, "Pepsodent", 3000, "50g");
ciptadent.createProduct(2, "Ciptadent", 6000, "70g");
nuvo.createProduct(3, "Sabun Nuvo", 5000, "keren");
lifeboy.createProduct(4, "Sabun Lifeboy", 2000, "oke");

//add kategori
a.addCategory(1, "Pasta Gigi");
b.addCategory(2, "Sabun Mandi");
c.addCategory(3, "Fashion");

//add keranjang
keranjang.addItem("Pepsodent", 2, 3000);
keranjang.addItem("Pepsodent", 2, 3000);
keranjang.addItem("Sabun Nuvo", 3, 5000);
// keranjang.addItem("Sabun Lifeboy", 1);

//add pesanan
order.createOrder(keranjang);

//hapus produk dari keranjang
//keranjang.removeItem("Sabun Nuvo");

//add produk ke kategori
pastaGigi.addCategory(pepsodent);
pastaGigi.addCategory(ciptadent);
sabunMandi.addCategory(nuvo);
sabunMandi.addCategory(lifeboy);

//update produk
//pepsodent.updateProduct(2, 5000);

//update kategori
//a.updateCategory(1, "Shampoo");

//output produk
console.log("Data Produk : ");
pepsodent.displayInfo();
ciptadent.displayInfo();
nuvo.displayInfo();
lifeboy.displayInfo();

// //output kategori
console.log("\nData Kategori");
a.displayInfo();
b.displayInfo();
c.displayInfo();

//output produk berdasarkan kategori
// console.log("\nData Produk berdasarkan Kategori Pasta Gigi");
// pastaGigi.displayInfo("Pasta Gigi");

// console.log("\nData Produk berdasarkan kategori Sabun Mandi");
// sabunMandi.displayInfo();

//output keranjang
//keranjang.viewCart();

//output pesanan
//order.displayOrderDetails();
