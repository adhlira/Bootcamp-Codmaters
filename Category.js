export default class Category {
  categories = [];

  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }

  //Method untuk menambahkan data kategori baru
  addCategory(categoryId, categoryName) {
    this.categories.push(categoryId, categoryName);
  }

  //Method untuk mengupdate data kategori
  updateCategory(index, newName) {
    if (index >= 0 && index < this.categories.length) {
      this.categories[index] = newName;
    } else {
      console.log("Indeks tidak valid");
    }
  }

  //Method untuk menampilkan data produk berdasarkan kategori tertentu
  productsByCategory(category) {
    const productsInCategory = this.categories.filter((categories) => categories.categoryName === category);
    return productsInCategory;
  }

  //Method untuk menampilkan data kategori
  displayInfo() {
    console.log(this.categories);
  }
}
