interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}

interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
}

type Product = Book | Electronics | Clothing;

class Collection<T> {
  items: T[];
  constructor(items: T[]) {
    this.items = items;
  }

  getAll() {
    return this.items.map((item) => {
      return item;
    });
  }

  filter(callback: (item: T) => boolean): T[] {
    let filteredArr = this.items.filter((itemInner) => callback(itemInner));
    return filteredArr;
  }
}

function renderProduct(product: Product) {
  let innerHTML = ``;

  if (product.type === "book") {
    innerHTML += `<div class="item" id="${product.id}" value="${product.id}">`;
    innerHTML += `<div class="strong">Book:</div> ${product.title} by ${product.author}`;
    innerHTML += `<p class="price">${product.price}</p>`;
    innerHTML += `</div>`;
  } else if (product.type === "electronics") {
    innerHTML += `<div class="item" id="${product.id}" value="${product.id}">`;
    innerHTML += `<div class="strong">Electronics:</div> ${product.item} - ${product.model}`;
    if (product.warranty) {
      innerHTML += ` - Warranty: ${product.warranty} year(s)`;
    }
    innerHTML += `<p class="price">${product.price}</p>`;
    innerHTML += `</div>`;
  } else if (product.type === "clothing") {
    innerHTML += `<div class="item" id="${product.id}" value="${product.id}">`;
    innerHTML += `<div class="strong">Clothing:</div> ${product.item} by ${product.brand}`;
    if (product.size) {
      innerHTML += ` - Size ${product.size}`;
    }
    innerHTML += `<p class="price">${product.price}</p>`;
    innerHTML += `</div>`;
  } else {
    throw new Error(`Unknown product type: ${JSON.stringify(product)}`);
  }
  return innerHTML;
}

const outputResults = document.getElementById("output");

const allButton = document.getElementById("all")!;

const booksButton = document.getElementById("books")!;

const electronicsButton = document.getElementById("electronics")!;

const clothingButton = document.getElementById("clothing")!;

allButton.addEventListener("click", () => {
  if (!outputResults) {
    return;
  }
  outputResults.innerHTML = "";
  showProducts();
});

booksButton.addEventListener("click", () => {
  if (!outputResults) {
    return;
  }
  outputResults.innerHTML = "";
  showProducts("book");
});

electronicsButton.addEventListener("click", () => {
  if (!outputResults) {
    return;
  }
  outputResults.innerHTML = "";
  showProducts("electronics");
});

clothingButton.addEventListener("click", () => {
  if (!outputResults) {
    return;
  }
  outputResults.innerHTML = "";
  showProducts("clothing");
});

const sampleBook: Book = {
  type: "book",
  id: "b1",
  price: 14.99,
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
};

const sampleElectronics: Electronics = {
  type: "electronics",
  item: "Tablet - Pixelon",
  model: "Slate-A9",
  id: "e1",
  price: 199.99,
  warranty: 2,
};

const sampleClothing: Clothing = {
  type: "clothing",
  id: "c1",
  price: 29.99,
  item: "Jacket by Northloom",
  brand: "CozyForge",
  size: "M",
};

const products = new Collection<Product>([
  sampleBook,
  sampleElectronics,
  sampleClothing,
]);

function showProducts(items?: Item["type"]) {
  let filteredArr = products.getAll();
  if (items === "book") {
    filteredArr = products.filter((item) => item.type === "book");
  } else if (items === "electronics") {
    filteredArr = products.filter((item) => item.type === "electronics");
  } else if (items === "clothing") {
    filteredArr = products.filter((item) => item.type === "clothing");
  }

  for (const itemObj of filteredArr) {
    if (!outputResults) {
      return;
    }
    outputResults.innerHTML += renderProduct(itemObj);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!outputResults) {
    return;
  }
  outputResults.innerHTML = "";
  showProducts();
});
