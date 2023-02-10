let products = [
  {
    id: 0,
    image: "",
    name: "Classic generic mirror 1",
    price: "$20.00",
    category: "Bathroom",
    material: "Wooden Frame"
  },
  {
    id: 2,
    image: "",
    name: "Classic generic mirror 2",
    price: "$20.00",
    category: "Bathroom",
    material: "Wooden Frame"
  },
  {
    id: 3,
    image: "",
    name: "Classic generic mirror 3",
    price: "$20.00",
    category: "Dressing",
    material: "Wooden Frame"
  },
];



function parseContents(category, material) {
  $("#products-slot").empty() 
  if (!category && !material) {
    for (var e of products) {
      setProducts(e);
    }
  }
  let items = [];
  if (category) {
    items = products.filter((e) => e.category.toLowerCase() === category.toLowerCase());
  }
  if (material) {
    items = items.filter((e) => e.material.toLowerCase().includes(material.toLowerCase()));
  }
  for (var e of items) {
    setProducts(e);
  }
}

function setProducts(product) {
 const html = ` 
      <div class="product-card">
        <a href="#" class="details">
          <i class="fas fa-info"></i>
        </a>
        <img src="../images/pngimg.com - mirror_PNG17358.png" alt="Product 1">
<h3>${product.name}</h3>
<p>${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `;
 $("#products-slot").append(html) 
}



$(document).ready(function () {
    console.log(location.href);
    const url = new URL(location.href);
    const category = url.searchParams.get("category");    
    const material = url.searchParams.get("material")
    if (category) {
    $("#category").text(`${category} Mirrors`)
  }

    if (material) {
    $("#material").text(`${material}`)
  }
    console.log(category, JSON.stringify(material));
    parseContents(category, material);
})





