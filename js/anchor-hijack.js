
$(".product-content a").click(function(event) {
  event.preventDefault();
  const url = new URL(location.href);
  if ($(this).is(".category-item")) {
    const category = $(this).text()
    url.searchParams.set("category", category)
  }
  if ($(this).is(".material")) {
    const material = $(this).text()
    console.log(material)
    url.searchParams.set("material", material)
  }
  window.location.assign(url.href)
})
