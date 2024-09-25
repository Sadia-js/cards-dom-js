const products = [
    {
      
      image: "https://picsum.photos/id/10/300/300",
      name: "Wireless Headphones",
      title: "High-Quality Bluetooth Headphones",
      description: "Experience crystal clear sound with noise cancellation and up to 20 hours of battery life.",
       price: 25.90
    },
    {
      image: "https://picsum.photos/id/20/300/300",
      name: "Smartphone",
      title: "Latest 5G Smartphone",
      description: "Stay connected with the world using the latest 5G smartphone, featuring a sleek design and powerful camera.",
       price:45.99
    },
    {
      image: "https://picsum.photos/id/30/300/300",
      name: "Smartwatch",
      title: "Fitness Tracker & Smartwatch",
      description: "Track your fitness goals and stay on top of notifications with this water-resistant smartwatch.",
      price: 10.5
    },
    {
      image:  "https://picsum.photos/id/60/300/300",
      name: "Laptop",
      title: "Ultra-Lightweight Laptop",
      description: "Achieve maximum productivity with this ultra-light laptop featuring a fast processor and long-lasting battery.",
      price: 32
    },
    {
      image: "https://picsum.photos/id/50/300/300",
      name: "Gaming Console",
      title: "Next-Gen Gaming Console",
      description: "Immerse yourself in next-gen gaming with stunning graphics, fast load times, and an extensive game library.",
      price: 9.99
    },
    {
      image: "https://picsum.photos/id/70/300/300",
      name: "Wireless Mouse",
      title: "Ergonomic Wireless Mouse",
      description: "Enhance your productivity with this ergonomic, long-lasting wireless mouse with adjustable DPI settings.",
      price: 20.99
    }
  ];
  

  function collectProducts(collections){
    for(const collection of collections){
        // console.log(collection);
        const cardsContainer = document.querySelector('#cards-container');
        cardsContainer.innerHTML += `
 <div class="card shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src= ${collection.image} alt="image"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold">${collection.name}</h2>
            <p class="font-semibold">${collection.title}</p>
            <p>${collection.description}</p>
            <p class="font-medium">$${collection.price}</p>
            <div class="card-actions mt-6">
              <button onclick="itemsCarts(${collection.price})" class="btn bg-purple-500 text-white">Add to cart</button>
            </div>
          </div>
 </div>
`
    }

  }
  collectProducts(products);

let sum = 0;
let totalAmount = 0   
function itemsCarts(price){
    const itemsCount = document.querySelector('#indicator-count').innerText;
    const value = Number(itemsCount);
    sum = value + 1;
    totalAmount = totalAmount + price;
    document.querySelector('#indicator-count').innerText = sum;
    document.querySelector('#items-count').innerText = sum;
    document.querySelector('#total-amount').innerText = totalAmount.toFixed(2);
  }

  
