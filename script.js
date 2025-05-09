fetch('products.json')
  .then(response => response.json())
  .then(data => displayProducts(data))
  .catch(error => console.error("Ürünler yüklenirken hata oluştu:", error));

function displayProducts(products) {
  const productsContainer = document.getElementById('products');
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Fiyat: ${product.price}₺</p>
      <button onclick='addToCart(${JSON.stringify(product)})'>Sepete Ekle</button>
    `;
    productsContainer.appendChild(div);
  });
}