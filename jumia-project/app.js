// Sample catalogue data for the Jumia-inspired storefront.
// Product prices are illustrative demo values, not live Jumia inventory.
const products = [
  {id:1,name:"SILVER CREST 8L Extra Large Digital Air Fryer",category:"Appliances",price:32340,old:44000,rating:3.9,reviews:8331,emoji:"🍟",flash:true,description:"Large-capacity digital air fryer for everyday family meals."},
  {id:2,name:"SILVER CREST 2L Industrial Food Crusher Blender",category:"Appliances",price:21970,old:26386,rating:3.9,reviews:23868,emoji:"🥤",flash:true,description:"Powerful blender with two jars for blending and food preparation."},
  {id:3,name:"TvvyFord 16-inch Solar Rechargeable Standing Fan",category:"Appliances",price:50000,old:84200,rating:3.2,reviews:6,emoji:"🌀",flash:true,description:"Rechargeable fan with solar panel, LED bulbs and AC/DC support."},
  {id:4,name:"Starlink Standard Kit Gen 3 – White",category:"Electronics",price:469999,old:690000,rating:4.4,reviews:140,emoji:"📡",flash:true,description:"Satellite internet kit. Availability and compatibility depend on location."},
  {id:5,name:"Nexus 50 Litres Bedside Refrigerator – Silver",category:"Appliances",price:93290,old:130000,rating:3.9,reviews:334,emoji:"🧊",flash:true,description:"Compact refrigerator for bedrooms, offices and small spaces."},
  {id:6,name:"Aeon 5Kg Twin Tub Washing Machine",category:"Appliances",price:119999,old:165325,rating:4.2,reviews:1003,emoji:"🧺",flash:true,description:"Twin tub washing machine with a 5kg washing capacity."},
  {id:7,name:"EASYPIE 20000mAh Ultra Slim Power Bank",category:"Phones & Tablets",price:7800,old:14400,rating:3.5,reviews:49981,emoji:"🔋",flash:true,description:"Portable 20000mAh power bank with dual USB charging ports."},
  {id:8,name:"Philly 20000mAh Portable Power Charging Bank",category:"Phones & Tablets",price:7350,old:16560,rating:3.5,reviews:21863,emoji:"🔋",flash:true,description:"Slim portable power bank for compatible mobile devices."},
  {id:9,name:"HANSEN 18 Inches Industrial Standing Fan",category:"Appliances",price:17647,old:20060,rating:3.9,reviews:13744,emoji:"🌀",flash:true,description:"Standing fan designed for powerful air circulation."},
  {id:10,name:"HANSEN Electric Iron Pressing Clothes 1000W",category:"Home & Office",price:6471,old:7117,rating:3.7,reviews:13535,emoji:"♨️",flash:true,description:"Everyday electric clothes iron with a 1000W heating element."},
  {id:11,name:"Ace Elec 50000mAh Power Bank with LED Light",category:"Phones & Tablets",price:24500,old:42000,rating:3.7,reviews:11967,emoji:"🔋",flash:true,description:"High-capacity portable charger with LED light."},
  {id:12,name:"NIVEA Dry Impact Roll-on for Men – Pack of 3",category:"Health & Beauty",price:4000,old:6125,rating:4.0,reviews:10522,emoji:"🧴",flash:true,description:"Three-pack of men's antiperspirant roll-on deodorant."},
  {id:13,name:"Oraimo Traveler 15 20000mAh Power Bank",category:"Phones & Tablets",price:17800,old:27400,rating:3.9,reviews:5923,emoji:"🔋",flash:false,description:"20,000mAh portable charger with Type-C fast charging and LED torch."},
  {id:14,name:"Syinix 2.2L Electric Kettle – Silver",category:"Appliances",price:6800,old:7229,rating:3.9,reviews:16529,emoji:"🫖",flash:false,description:"Electric kettle with a 2.2 litre capacity."},
  {id:15,name:"Xiaomi Redmi 15C 128GB Smartphone",category:"Phones & Tablets",price:184999,old:250000,rating:4.2,reviews:558,emoji:"📱",flash:false,description:"Large-screen smartphone with 128GB storage."},
  {id:16,name:"Itel 65-inch 4K QLED Smart TV",category:"Electronics",price:672090,old:894894,rating:5.0,reviews:2,emoji:"📺",flash:false,description:"4K QLED smart television with VIDAA OS and dual-band Wi-Fi."},
  {id:17,name:"Professional 10kg Hexagonal Dumbbell Set",category:"Sporting Goods",price:32500,old:48588,rating:4.8,reviews:9,emoji:"🏋️",flash:false,description:"Pair of hexagonal dumbbells for home workouts."},
  {id:18,name:"Men's Trendy Casual Sneakers – White",category:"Fashion",price:10800,old:19138,rating:3.8,reviews:723,emoji:"👟",flash:false,description:"Casual everyday sneakers with a comfortable fit."},
  {id:19,name:"Royal 43-inch Android Smart TV",category:"Electronics",price:255999,old:411667,rating:3.9,reviews:208,emoji:"📺",flash:false,description:"43-inch smart TV with Android operating system."},
  {id:20,name:"Big Bull Rice 50kg",category:"Groceries",price:86800,old:88000,rating:4.1,reviews:139,emoji:"🍚",flash:false,description:"Large family-size bag of rice."},
  {id:21,name:"Asus TUF Gaming A15 Ryzen 7 Laptop",category:"Computing",price:1544400,old:1861611,rating:4.6,reviews:12,emoji:"💻",flash:false,description:"Gaming laptop with Ryzen 7 processor and dedicated graphics."},
  {id:22,name:"Baby Gum Glove / Teething Mitten",category:"Baby Products",price:4050,old:4500,rating:4.3,reviews:15,emoji:"🧸",flash:false,description:"Soft teething mitten for babies."},
  {id:23,name:"PlayStation Wireless Game Controller",category:"Gaming",price:89500,old:99000,rating:4.8,reviews:117,emoji:"🎮",flash:false,description:"Wireless controller for compatible gaming consoles."},
  {id:24,name:"LED Solar Street Light with Free Pole",category:"Automobile",price:21700,old:35000,rating:4.0,reviews:55,emoji:"💡",flash:false,description:"Solar-powered outdoor street light."}
];

const money = value => "₦" + Number(value).toLocaleString("en-NG");
// Editorial product photography used for this frontend demo (not live Jumia catalogue assets).
const productImages = {
  1:"https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=85",
  2:"https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=85",
  3:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=85",
  4:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=85",
  5:"https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=85",
  6:"https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=85",
  7:"https://images.unsplash.com/photo-1609592424773-6f6c5a7d5d6d?auto=format&fit=crop&w=600&q=85",
  8:"https://images.unsplash.com/photo-1609592424773-6f6c5a7d5d6d?auto=format&fit=crop&w=600&q=85",
  9:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=85",
  10:"https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=85",
  11:"https://images.unsplash.com/photo-1609592424773-6f6c5a7d5d6d?auto=format&fit=crop&w=600&q=85",
  12:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=85",
  13:"https://images.unsplash.com/photo-1609592424773-6f6c5a7d5d6d?auto=format&fit=crop&w=600&q=85",
  14:"https://images.unsplash.com/photo-1594213114663-d94db9b1712e?auto=format&fit=crop&w=600&q=85",
  15:"https://images.unsplash.com/photo-1511707423584-4b4f2a1f4a3a?auto=format&fit=crop&w=600&q=85",
  16:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=85",
  17:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=85",
  18:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=85",
  19:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=85",
  20:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=85",
  21:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=85",
  22:"https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=85",
  23:"https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=600&q=85",
  24:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=85"
};
const productImage = product => `<img src="${productImages[product.id]}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'">`;
const byId = id => document.getElementById(id);
let cart = JSON.parse(localStorage.getItem("jumiaDemoCart") || "[]");
let favourites = JSON.parse(localStorage.getItem("jumiaDemoFavourites") || "[]");
let selectedCategory = "All products";
let searchText = "";
let sortType = "popular";
let visibleProducts = 10;
let currentSlide = 0;
let toastTimeout;

function saveData() {
  localStorage.setItem("jumiaDemoCart", JSON.stringify(cart));
  localStorage.setItem("jumiaDemoFavourites", JSON.stringify(favourites));
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("visible"), 2200);
}

function getDiscount(product) {
  return Math.round((1 - product.price / product.old) * 100);
}

function createProductCard(product) {
  const saved = favourites.includes(product.id);
  return `
    <article class="product-card" data-product="${product.id}" tabindex="0">
      <div class="product-photo">
        ${productImage(product)}
        <span class="discount-tag">-${getDiscount(product)}%</span>
        <button class="heart ${saved ? "saved" : ""}" data-favourite="${product.id}" aria-label="Save product">${saved ? "♥" : "♡"}</button>
      </div>
      <p class="product-name">${product.name}</p>
      <div class="price">${money(product.price)}</div>
      <div class="old-price">${money(product.old)}</div>
      <div class="rating">★★★★★ <span>(${product.reviews.toLocaleString("en-NG")})</span></div>
    </article>`;
}

function renderFlashSales() {
  byId("flashProducts").innerHTML = products.filter(product => product.flash).map(createProductCard).join("");
}

function getVisibleProducts() {
  let result = products.filter(product => {
    const matchesCategory = selectedCategory === "All products" || product.category === selectedCategory;
    const searchContent = (product.name + " " + product.category).toLowerCase();
    return matchesCategory && searchContent.includes(searchText);
  });

  if (sortType === "low") result.sort((a, b) => a.price - b.price);
  if (sortType === "high") result.sort((a, b) => b.price - a.price);
  if (sortType === "rating") result.sort((a, b) => b.rating - a.rating);
  if (sortType === "discount") result.sort((a, b) => getDiscount(b) - getDiscount(a));
  return result;
}

function renderProducts() {
  const result = getVisibleProducts();
  byId("productsHeading").textContent = searchText
    ? `Search results for "${searchText}"`
    : selectedCategory === "All products" ? "Recommended for you" : selectedCategory;
  byId("currentFilter").textContent = selectedCategory;
  byId("resultTotal").textContent = `${result.length} products`;
  byId("productGrid").innerHTML = result.slice(0, visibleProducts).map(createProductCard).join("");
  byId("noResults").classList.toggle("hidden", result.length > 0);
  byId("productGrid").classList.toggle("hidden", result.length === 0);
  byId("loadMore").classList.toggle("hidden", result.length <= visibleProducts);
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ id, quantity: 1 });
  renderCart();
  showToast("Product added to cart");
}

function renderCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + product.price * item.quantity;
  }, 0);

  byId("cartBadge").textContent = count;
  byId("cartItemsCount").textContent = `(${count})`;
  byId("subtotal").textContent = money(subtotal);
  byId("orderTotal").textContent = money(subtotal);
  byId("emptyCart").classList.toggle("hidden", cart.length > 0);
  byId("cartBottom").classList.toggle("hidden", cart.length === 0);

  byId("cartList").innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return `
      <div class="cart-row">
        <div class="cart-thumb">${productImage(product)}</div>
        <div>
          <h4>${product.name}</h4><strong>${money(product.price)}</strong>
          <div class="quantity">
            <button data-quantity="${product.id}" data-step="-1">−</button>
            <span>${item.quantity}</span>
            <button data-quantity="${product.id}" data-step="1">+</button>
            <button class="remove" data-remove="${product.id}">Remove</button>
          </div>
        </div>
        <b>${money(product.price * item.quantity)}</b>
      </div>`;
  }).join("");
  saveData();
}

function openCart() {
  byId("cartPanel").classList.add("open");
  byId("shade").classList.remove("hidden");
}

function closePanels() {
  byId("cartPanel").classList.remove("open");
  byId("shade").classList.add("hidden");
  document.querySelectorAll(".dialog").forEach(dialog => dialog.classList.add("hidden"));
}

function showDialog(id) {
  closePanels();
  byId(id).classList.remove("hidden");
  byId("shade").classList.remove("hidden");
}

function openProduct(id) {
  const product = products.find(item => item.id === id);
  byId("productDialog").innerHTML = `
    <div class="product-dialog-content">
      <div class="dialog-photo">${productImage(product)}</div>
      <div class="dialog-info">
        <button class="dialog-close" data-close>×</button>
        <small>${product.category}</small>
        <h2>${product.name}</h2>
        <div class="rating">★★★★★ <span>${product.rating}/5 · ${product.reviews.toLocaleString("en-NG")} reviews</span></div>
        <div class="price">${money(product.price)}</div><div class="old-price">${money(product.old)}</div>
        <p>${product.description}</p>
        <p><b>Delivery:</b> Delivery options depend on your location.</p>
        <button class="add-button" data-add="${product.id}">ADD TO CART</button>
      </div>
    </div>`;
  showDialog("productDialog");
}

function chooseCategory(category) {
  selectedCategory = category;
  searchText = "";
  byId("searchInput").value = "";
  visibleProducts = 20;
  document.querySelectorAll(".categories button").forEach(button => {
    button.classList.toggle("active", button.dataset.category === category);
  });
  renderProducts();
  byId("all-products").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("click", event => {
  const favouriteButton = event.target.closest("[data-favourite]");
  if (favouriteButton) {
    const id = Number(favouriteButton.dataset.favourite);
    favourites = favourites.includes(id) ? favourites.filter(item => item !== id) : [...favourites, id];
    saveData();
    renderProducts();
    renderFlashSales();
    showToast(favourites.includes(id) ? "Added to favourites" : "Removed from favourites");
    return;
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCart(Number(addButton.dataset.add));
    closePanels();
    return;
  }

  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const id = Number(quantityButton.dataset.quantity);
    const item = cart.find(entry => entry.id === id);
    item.quantity += Number(quantityButton.dataset.step);
    if (item.quantity <= 0) cart = cart.filter(entry => entry.id !== id);
    renderCart();
    return;
  }

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    cart = cart.filter(item => item.id !== Number(removeButton.dataset.remove));
    renderCart();
    return;
  }

  const closeButton = event.target.closest("[data-close]");
  if (closeButton) {
    closePanels();
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    chooseCategory(categoryButton.dataset.category);
    return;
  }

  const productCard = event.target.closest("[data-product]");
  if (productCard && !event.target.closest("button")) {
    openProduct(Number(productCard.dataset.product));
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closePanels();
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".product-card")) {
    openProduct(Number(event.target.dataset.product));
  }
});

byId("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  searchText = byId("searchInput").value.trim().toLowerCase();
  selectedCategory = "All products";
  visibleProducts = 24;
  renderProducts();
  byId("all-products").scrollIntoView({ behavior: "smooth" });
});

byId("sortProducts").addEventListener("change", event => {
  sortType = event.target.value;
  renderProducts();
});

byId("loadMore").addEventListener("click", () => {
  visibleProducts += 10;
  renderProducts();
});

byId("resetFilters").addEventListener("click", () => {
  selectedCategory = "All products";
  searchText = "";
  sortType = "popular";
  visibleProducts = 10;
  byId("searchInput").value = "";
  byId("sortProducts").value = "popular";
  renderProducts();
});

byId("cartButton").addEventListener("click", openCart);
byId("closeCart").addEventListener("click", closePanels);
byId("shade").addEventListener("click", closePanels);
byId("continueShopping").addEventListener("click", closePanels);
byId("helpButton").addEventListener("click", () => showToast("Help centre demo"));
byId("checkoutButton").addEventListener("click", () => showDialog("checkoutDialog"));
byId("mobileMenu").addEventListener("click", () => byId("mobileLinks").classList.toggle("open"));

byId("loginForm").addEventListener("submit", event => {
  event.preventDefault();
  closePanels();
  event.target.reset();
  showToast("Demo sign-in submitted. No account was created.");
});

byId("checkoutForm").addEventListener("submit", event => {
  event.preventDefault();
  const orderValue = cart.reduce((sum, item) => sum + products.find(p => p.id === item.id).price * item.quantity, 0);
  cart = [];
  renderCart();
  closePanels();
  event.target.reset();
  showToast(`Demo order placed: ${money(orderValue)}. No payment collected.`);
});

byId("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  event.target.reset();
  showToast("Thank you for subscribing!");
});

// Hero banner carousel
const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...byId("heroDots").querySelectorAll("button")];

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, position) => slide.classList.toggle("active", position === currentSlide));
  dots.forEach((dot, position) => dot.classList.toggle("selected", position === currentSlide));
  byId("heroTrack").style.transform = `translateX(-${currentSlide * 100}%)`;
}

byId("previousSlide").addEventListener("click", () => showSlide(currentSlide - 1));
byId("nextSlide").addEventListener("click", () => showSlide(currentSlide + 1));
dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
setInterval(() => showSlide(currentSlide + 1), 6500);

// Decorative demo countdown timer
let secondsLeft = 2 * 60 * 60 + 43 * 60 + 46;
setInterval(() => {
  secondsLeft = secondsLeft > 0 ? secondsLeft - 1 : 2 * 60 * 60 + 43 * 60 + 46;
  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  byId("timer").textContent = `${hours}h : ${minutes}m : ${seconds}s`;
}, 1000);

renderFlashSales();
renderProducts();
renderCart();
