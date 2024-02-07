fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}
function showProduct(product) {
  //fang template
  const template = document.querySelector("#small_product_template").content;

  //lav kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".lys").textContent = product.brandname;
  copy.querySelector(".rabat span").textContent = product.discount;

  copy.querySelector(".produkt_link").href = `produkt.html?id=${product.id}`;

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".pris span").textContent = product.price;

  if (product.soldout) {
    copy.querySelector(".soldout").classList.remove("hide");
  }

  if (product.discount) {
    copy.querySelector(".udsalg").classList.remove("hide");
  }

  //appende
  document.querySelector(".produkt_container").appendChild(copy);
}
/**{
    "id": 1163,
    "gender": "Men",
    "category": "Apparel",
    "subcategory": "Topwear",
    "articletype": "Tshirts",
    "season": "Summer",
    "productionyear": 2011,
    "usagetype": "Sports",
    "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
    "price": 895,
    "discount": null,
    "brandname": "Nike",
    "soldout": 0
} */
