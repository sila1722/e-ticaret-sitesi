let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(${product.name} sepete eklendi!);
}

function viewCart() {
  if (cart.length === 0) {
    alert("Sepetiniz boş!");
  } else {
    let message = "Sepetinizdeki ürünler:\n";
    cart.forEach((item, index) => {
      message += ${index + 1}. ${item.name} - ${item.price}₺\n;
    });
    alert(message);
  }
}