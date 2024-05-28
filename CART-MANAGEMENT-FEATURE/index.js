const dataProducts = [];

async function addDataFunc(product) {
  return new Promise((resolve) => {
    setTimeout(() => {
      dataProducts.push(product);
      console.log(product);
      resolve();
    }, 2000);
  });
}

async function addProducts() {
  try {
    await addDataFunc({
      id: 8,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Summer Beach Party",
      price: 15,
      date: "July 3, 2022",
      location: "Venice Beach, Los Angeles",
      company: "LA Beach Parties",
    });
    await addDataFunc({
      id: 9,
      imageUrl:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Angular Nation Expo",
      price: 35,
      date: "October 1-3, 2022",
      location: "Google Hall, San Francisco",
      company: "ArtExpo NY",
    });

    displayProducts();
  } catch (error) {
    console.error("Error adding products:", error);
  }
}

const cart = [];

function addToCart(product) {
  return function () {
    let cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
      displayCartProducts();
    }
    updateCartDisplay();
  };
}

const decrementQuantity = (id) => {
  const cartItem = cart.find((item) => item.id === id);
  if (cartItem) {
    cartItem.quantity -= 1;
    document.getElementById(
      `cartItemQuantity`
    ).textContent = `${cartItem.quantity}`;
  }
};

const incrementQuantity = (id) => {
  const cartItem = cart.find((item) => item.id === id);
  if (cartItem) {
    cartItem.quantity += 1;
    document.getElementById(
      `cartItemQuantity`
    ).textContent = `${cartItem.quantity}`;
  }
};

const displayCartProducts = () => {
  const cartContainer = document.getElementById("cart-container");

  cart.map((item) => {
    const divContainer2 = document.createElement("div");
    divContainer2.style.height = "200px";
    divContainer2.style.display = "grid";
    divContainer2.style.gridTemplateColumns = "1fr 1fr";
    divContainer2.style.gap = "5px";
    divContainer2.style.alignItems = "start";
    cartContainer.appendChild(divContainer2);

    const divContainer3 = document.createElement("div");
    divContainer2.appendChild(divContainer3);

    const divContainer4 = document.createElement("div");
    divContainer4.style.display = "grid";
    divContainer4.style.gridTemplateColumns = "1fr 1fr 1fr";
    divContainer4.style.justifyContent = "space-between";
    divContainer4.style.alignItems = "center";
    divContainer2.appendChild(divContainer4);

    const cartImg = document.createElement("img");
    cartImg.src = `${item.imageUrl}`;
    cartImg.style.width = "200px";
    cartImg.style.height = "100px";
    divContainer3.appendChild(cartImg);

    const para = document.createElement("P");
    para.textContent = `${item.title}`;
    divContainer3.appendChild(para);

    const btns1 = document.createElement("button");
    btns1.textContent = "-";
    btns1.style.border = "2px solid gray";
    btns1.style.width = "20px";
    btns1.style.height = "20px";
    btns1.addEventListener("click", () => decrementQuantity(item.id));
    divContainer4.appendChild(btns1);

    const itemQuantity = document.createElement("p");
    itemQuantity.textContent = `${item.quantity}`;
    itemQuantity.id = "cartItemQuantity";
    divContainer4.appendChild(itemQuantity);

    const btns2 = document.createElement("button");
    btns2.textContent = "+";
    btns2.style.border = "2px solid gray";
    btns2.style.height = "20px";
    btns2.style.width = "20px";
    btns2.id = "incrementBtn";
    btns2.addEventListener("click", () => incrementQuantity(item.id));
    divContainer4.appendChild(btns2);
  });
};

function displayProducts() {
  const productContainer = document.getElementById("product-container");

  dataProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";

    const imgElement = document.createElement("img");
    imgElement.src = product.imageUrl;
    imgElement.alt = product.title;

    const titleElement = document.createElement("h2");
    titleElement.textContent = product.title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: $${product.price}`;

    const dateElement = document.createElement("p");
    dateElement.textContent = `Date: ${product.date}`;

    const locationElement = document.createElement("p");
    locationElement.textContent = `Location: ${product.location}`;

    const companyElement = document.createElement("p");
    companyElement.textContent = `Company: ${product.company}`;

    const btns = document.createElement("button");
    btns.addEventListener("click", addToCart(product));
    btns.textContent = `AddToCart`;

    productElement.appendChild(imgElement);
    productElement.appendChild(titleElement);
    productElement.appendChild(priceElement);
    productElement.appendChild(dateElement);
    productElement.appendChild(locationElement);
    productElement.appendChild(companyElement);
    productElement.appendChild(btns);

    productContainer.appendChild(productElement);
  });
}

addProducts();
