type Category =
  "Sport" | "Cruiser" | "Touring" | "Dirt" | "Adventure" | "Naked" | "Electric";

interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
}

async function fetchMotorcycles(): Promise<Motorcycle[]> {
  try {
    const response = await fetch(
      "https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json",
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log(data);
    return data.map((item: any) => ({
      id: item.id,
      name: item.name,
      manufacturer: item.manufacturer,
      category: item.category as Category,
      price: item.price,
      image_url: item.image_url,
      created_at: new Date(item.created_at),
      description: item.description,
      year: item.year,
    }));
  } catch (error) {
    console.error("Failed to fetch motorcycles:", error);
    return [];
  }
}

function renderMotorcycleCard(motorcycle: Motorcycle): string {
  return `
    <div class="motorcycle-card">
      <img src="${motorcycle.image_url}" alt="${motorcycle.name}" class="motorcycle-card-image-container" />
      <span class="motorcycle-card-year-badge">${motorcycle.year}</span>
      <h3 class="motorcycle-card-title">${motorcycle.name}</h3>
      <p class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</p>
      <span class="motorcycle-card-category">${motorcycle.category}</span>
      <p class="motorcycle-card-description">${motorcycle.description}</p>
      <p class="motorcycle-card-price">${motorcycle.price}</p>
      <p class="motorcycle-card-engine">pending</p>
    </div>
  `;
}

class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];

  constructor(initialMotorcycles: Motorcycle[] = []) {
    this.allMotorcycles = initialMotorcycles;
  }

  renderMotorcycles(filter: string = ""): void {
    const container = document.getElementById("motorcycle-grid");
    const count = document.getElementById("results-number");

    if (!container) {
      throw new Error("container was not found");
    }

    let motorcycles = this.allMotorcycles;
    if (!motorcycles || motorcycles.length == 0) return;

    if (filter.trim()) {
      motorcycles = this.allMotorcycles.filter((m) =>
        m.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    if (count) {
      count.innerHTML = String(motorcycles.length);
    }

    container.innerHTML = motorcycles
      .map((m) => renderMotorcycleCard(m))
      .join("");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMotorcycles();
  const app = new MotorcycleGalleryApp(data);
  app.renderMotorcycles();

  const filterInput = document.getElementById(
    "name-filter-input",
  ) as HTMLInputElement;
  if (filterInput) {
    filterInput.addEventListener("input", () =>
      app.renderMotorcycles(filterInput.value),
    );
  }
});
