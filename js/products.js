let products = [
  {
    id: 0,
    image: "../images/pngimg.com - mirror_PNG17358.png",
    name: "Classic generic mirror 1",
    price: "$20.00",
    category: "Bathroom Mirrors",
    material: "Wooden Frame",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam optio, aliquam quia necessitatibus, explicabo illo veritatis eveniet voluptas laborum quaerat unde, corrupti earum assumenda corporis quae iusto sint alias."
  },
  {
    id: 2,
    image: "../images/pngimg.com - mirror_PNG17358.png",
    name: "Classic generic mirror 2",
    price: "$20.00",
    category: "Bathroom Mirrors",
    material: "Wooden Frame",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam optio, aliquam quia necessitatibus, explicabo illo veritatis eveniet voluptas laborum quaerat unde, corrupti earum assumenda corporis quae iusto sint alias."
  },
  {
    id: 3,
    image: "../images/pngimg.com - mirror_PNG17358.png",
    name: "Classic generic mirror 3",
    price: "$20.00",
    category: "Bathroom Mirrors",
    material: "Wooden Frame",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam optio, aliquam quia necessitatibus, explicabo illo veritatis eveniet voluptas laborum quaerat unde, corrupti earum assumenda corporis quae iusto sint alias."
  },
];



function parseContents(category, material) {
  $("#products-slot").empty()
  let items = [];
  if (category) {
    if (category.toLowerCase() !== "all") {
      items = products.filter((e) => e.category.toLowerCase() === category.toLowerCase());
    } else {
      items = [...products]
    }
  } else {
    items = [...products]
  }
  if (material) {
    if (material.toLowerCase() !== "all") {
      items = items.filter((e) => e.material.toLowerCase().includes(material.toLowerCase()));
    } else {
      items = [...items]
    }
  }
  for (var e of items) {
    setProducts(e);
  }
}

function setProducts(product) {
  const html = ` 
<div class="product-card">
        <a href="#" class="details" id="${product.id}">
          <i class="fas fa-info"></i>                                                         
        </a>
<img src="${product.image}" alt="Product 1">
<h3>${product.name}</h3>
<p>${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `;
  $("#products-slot").append(html)
}


function setDialog(product) {
  const html = `
    <div class="card">
      <section class="sticky">
<p class="card-title">${product.name}</p>
<p><span>${product.category} Mirrors</span> <span class="material-chip">${product.material}</span></p>
      </section>
      <section class="grid" style="margin-top: 25px;">
<img src="${product.image}" alt="Mirror image" class="center image">
<p>${product.description}</p>
      </section>
<a href="file.text" class="download-btn" id="${product.id}">Download</a>
    </div>
`;
  $("#dialog").append(html);
}

const addDownloadHandler = () => {
  $(".download-btn").click(function(e) {
    e.preventDefault();
    const item = products.filter((e) => `${e.id}` === this.id)
    const detail = item[0];
    const fileContent = `
Title: ${detail.name},
category: ${detail.category},
Material: ${detail.material},
Description: ${detail.description}
`;
    const link = document.createElement("a");
    const file = new Blob([fileContent], { type: 'text/plain;charset=utf-8' })
    link.href = URL.createObjectURL(file);
    link.download = "product.txt"
    link.click();
    URL.revokeObjectURL(link.href);
  })
}


$(document).ready(function() {
  console.log(location.href);
  const url = new URL(location.href);
  const category = url.searchParams.get("category");
  const material = url.searchParams.get("material")
  if (category) {
    $("#category").text(`${category}`)
  }

  if (material) {
    $("#material").text(`${material}`)
  }
  console.log(category, JSON.stringify(material));
  parseContents(category, material);
  $(".details").click(function(event) {
    event.preventDefault();
    $("#dialog").empty()
    const item = products.filter((e) => `${e.id}` === this.id)
    setDialog(item[0])
    $("#dialog").toggleClass("hidden");
    addDownloadHandler();
  })
  $("#dialog").click(function(event) {
    if (event.target !== this) {
      return;
    }
    $("#dialog").toggleClass("hidden");
  })
})





