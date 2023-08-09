let itensJson = [
  {
    nome: "O Poderoso Angus",
    categoria: "hamburguer",
    detalhe:
      "Um hambúrguer suculento com carne Angus, queijo cheddar defumado e molho barbecue artesanal.",
    preco: 20,
    img: "./img/hamburguer.jpg",
  },
  {
    nome: "Gourmet Trufado",
    categoria: "hamburguer",
    detalhe:
      "Um hambúrguer sofisticado com carne de Wagyu, queijo Gruyère, cogumelos salteados e molho de trufa negra.",
    preco: 55.95,
    img: "./img/hamburguer7.jpg",
  },
  {
    nome: "Delícia Veggie",
    categoria: "hamburguer",
    detalhe:
      "Uma opção vegetariana deliciosa com hambúrguer de grão de bico, queijo de cabra e pesto de manjericão.",
    preco: 25.55,
    img: "./img/hamburguer1.jpg",
  },
  {
    nome: "Magnífico Apimentado",
    categoria: "hamburguer",
    detalhe:
      "Hambúrguer picante com pimenta jalapeño, queijo pepper jack e molho de pimenta habanero.",
    preco: 20,
    img: "./img/hamburguer2.jpg",
  },
  {
    nome: " Encanto Mediterrâneo",
    categoria: "hamburguer",
    detalhe:
      "Um hambúrguer com sabores mediterrâneos, com carne de cordeiro, azeitonas pretas, feta e molho tzatziki.",
    preco: 26,
    img: "./img/hamburguer3.jpg",
  },
  {
    nome: " Clássico Deluxe",
    categoria: "hamburguer",
    detalhe:
      "Um hambúrguer clássico com carne bovina, queijo americano, alface, tomate, cebola e molho especial.",
    preco: 20,
    img: "./img/hamburguer4.jpg",
  },
  {
    nome: "Luau Havaiano",
    categoria: "hamburguer",
    detalhe:
      "Um hambúrguer tropical com hambúrguer de frango grelhado, abacaxi grelhado, queijo suíço e molho teriyaki.",
    preco: 55,
    img: "./img/hamburguer5.jpg",
  },
  {
    nome: "Aroma Italiano",
    categoria: "pizza",
    detalhe:
      " Pizza de massa fina com molho de tomate, queijo mozzarella, pepperoni picante e manjericão fresco.",
    preco: 40,
    img: "./img/pizza.jpg",
  },
  {
    nome: "Vegetariana Suprema",
    categoria: "pizza",
    detalhe:
      "Uma explosão de sabores vegetais com molho de tomate, queijo mozzarella, cogumelos, pimentões, cebola e azeitonas.",
    preco: 50,
    img: "./img/pizza1.jpg",
  },
  {
    nome: "Delícia",
    categoria: "pizza",
    detalhe:
      "Pizza com molho de tomate, queijo mozzarella, camarões suculentos, alho, tomate-cereja e manjericão.",
    preco: 56.99,
    img: "./img/pizza2.jpg",
  },
  {
    nome: "Havaiana Tropical",
    categoria: "pizza",
    detalhe:
      "izza com molho de tomate, queijo mozzarella, presunto, abacaxi grelhado e toque de coentro fresco.",
    preco: 42,
    img: "./img/pizza3.jpg",
  },
  {
    nome: "Quatro Queijos Divino",
    categoria: "pizza",
    detalhe:
      "Pizza com molho de tomate, queijo mozzarella, gorgonzola, queijo provolone e parmesão gratinado.",
    preco: 45.95,
    img: "./img/pizza4.jpg",
  },
  {
    nome: "Doce Tentação",
    categoria: "icecream",
    detalhe:
      " Sorvete de limão siciliano com raspas de limão, hortelã fresca e cobertura de chantilly.",
    preco: 20,
    img: "./img/icecream.jpg",
  },
  {
    nome: "Festa de Frutas",
    categoria: "icecream",
    detalhe:
      " Sorvete de baunilha com uma variedade de frutas frescas, granola crocante e calda de frutas vermelhas.",
    preco: 25,
    img: "./img/icecream1.jpg",
  },
  {
    nome: "Sabor Exótico",
    categoria: "icecream",
    detalhe:
      " Sorvete de manga com toque de cardamomo, fios de coco e raspas de limão.",
    preco: 18,
    img: "./img/icecream2.jpg",
  },
  {
    nome: "Alegria de Cookies",
    categoria: "icecream",
    detalhe:
      "Sorvete de baunilha com pedaços generosos de cookies de chocolate e calda de chocolate quente.",
    preco: 22,
    img: "./img/icecream3.jpg",
  },
  {
    nome: "Paraíso Tropical",
    categoria: "icecream",
    detalhe:
      "Sorvete de coco cremoso com pedaços de morango, com chocolate branco.",
    preco: 25,
    img: "./img/icecream4.jpg",
  },
  {
    nome: "Refrescância Frutada",
    categoria: "icecream",
    detalhe:
      "Sorvete de chocolate ao leite com granulado e ganache de chocolate",
    preco: 28,
    img: "./img/icecream5.jpg",
  },
  {
    nome: "Festa Tropical",
    categoria: "drink",
    detalhe:
      "Uma bebida sofisticada com gin, suco de toranja, xarope de rosas e um toque de limão.",
    preco: 20,
    img: "./img/drink.jpg",
  },
  {
    nome: "Citrus",
    categoria: "drink",
    detalhe:
      "Uma bebida refrescante com suco de mirtilo, suco de framboesa, água com gás e fatias de limão.",
    preco: 20,
    img: "./img/drink1.jpg",
  },
  {
    nome: "Melancia Fresca",
    categoria: "drink",
    detalhe:
      "Uma bebida refrescante e hidratante com suco de melancia, limão, água de coco e folhas de hortelã e limão.",
    preco: 20,
    img: "./img/drink2.jpg",
  },
  {
    nome: "Fresh Blackberry",
    categoria: "drink",
    detalhe: "Uma bebida borbulhante suco de laranja, amora e água com gás.",
    preco: 20,
    img: "./img/drink3.jpg",
  },
  {
    nome: "Tropical Breeze",
    categoria: "drink",
    detalhe:
      "Uma refrescante mistura de suco de abacaxi, suco de laranja, e um toque de hortelã.",
    preco: 20,
    img: "./img/drink4.jpg",
  },
  {
    nome: "Sunset Peach",
    categoria: "drink",
    detalhe: " Uma combinação perfeita de suco de pêssego, suco de laranja.",
    preco: 20,
    img: "./img/drink5.jpg",
  },
  {
    nome: "Chá de Verão",
    categoria: "drink",
    detalhe:
      "Um chá gelado refrescante com limão, hortelã e um toque de açucar.",
    preco: 20,
    img: "./img/drink6.jpg",
  },
];
 
//---------------------//
  const cartContainer = document.getElementById('cart');
  const cartBtn = document.querySelector('.carrinhoBtn p');

  const btnClose = document.querySelector(".close")
  const carrinhoContainer = document.querySelector(".carrinho")
  const carrinhoBtn = document.querySelector(".carrinhoBtn")

  carrinhoBtn.addEventListener("click", function() {
    carrinhoContainer.style.display = 'flex';
  });

  btnClose.addEventListener("click", function() {
    carrinhoContainer.style.display = 'none';
  });
//---------------------//
  let cart = [];
  function renderCart() {
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
      const emptyCartElement = document.createElement('p');
      emptyCartElement.textContent = 'Nenhum item no carrinho';
      cartContainer.appendChild(emptyCartElement);
    } else {
      cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cartItem';
        cartItemElement.innerHTML = `
        <div class="imgItemCart background-image " style="background-image: url('${item.img}')"></div>
          <p class="name">${item.nome}</p>
          <p class="preco">${item.preco.toFixed(2)}</p>
          <div class="quantity">
            <button class="quantBtn" onclick="decrementQuantity(${index})">-</button>
            <input class="quant" type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, parseInt(this.value))">
            <button class="quantBtn" onclick="incrementQuantity(${index})">+</button>
          </div>
          <button class="remove" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
        `;

        cartContainer.appendChild(cartItemElement);
      });
    }

    const totalValueElement = document.getElementById('total-value');
    const totalValue = cart.reduce((total, item) => total + (item.preco * item.quantity), 0);
    totalValueElement.textContent = totalValue.toFixed(2);
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartBtn.textContent = `Meu Pedido (${cartItemCount})`;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function handleItemClick(event) {
    let itemIndex = event.currentTarget.dataset.index;
    let selectedItem = itensJson[itemIndex];
    console.log(selectedItem);
  }

  function addToCart(index) {
    const product = itensJson[index];
    const existingCartItem = cart.find(item => item.nome === product.nome);
  
    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    renderCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }

  function updateQuantity(index, newQuantity) {
    if (newQuantity > 0) {
      cart[index].quantity = newQuantity;
      renderCart();
    }
  }

  function incrementQuantity(index) {
    cart[index].quantity++;
    renderCart();
  }

  function decrementQuantity(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      renderCart();
    }
  }  function substituirItens(category) {
    let containerItens = document.querySelector('.containerItens');
    let htmlItens = '';
  
    itensJson.forEach((item, index) => {
       if (category && item.categoria !== category && category !== "Todos") {
      return;
    }   
  
      let htmlItem = `
        <div class="item" data-index="${index}">
          <h1>${item.nome}</h1>
          <div class="imgItem background-image " style="background-image: url('${item.img}')"></div>
          <p class="itemDescricao">${item.detalhe}</p>
          <div class="containerSecundario">
            <p class="preco"> R$ ${item.preco.toFixed(2)}</p>
            <div onclick="addToCart(${index})" class="btnAdd">
              <i>+</i>
            </div>
          </div>
        </div>
      `;  
      htmlItens += htmlItem;
    });
  
    containerItens.innerHTML = htmlItens;
  
    // Atualizar estilo do ícone da categoria selecionada
    const categoryIcons = document.querySelectorAll('.category-link');
    categoryIcons.forEach(icon => {
      if (icon.dataset.category === category) {
        icon.classList.add('active');
      } else {
        icon.classList.remove('active');
      }
    });
  
    const pageTitle = document.querySelector('.titulo h1');
    pageTitle.textContent = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Todos os Produtos';
  }

  const categoryIcons = document.querySelectorAll('.category-link');
  categoryIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const category = icon.dataset.category;
      substituirItens(category);
    });
  });
  
  substituirItens("");
  
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }

  substituirItens('');
  renderCart();

  const categoryLinks = document.querySelectorAll('.category-link');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const category = event.currentTarget.dataset.category;
      substituirItens(category);
    });
  });
  function limparCarrinho() {
    cart = [];
    renderCart();
    containerPedidoFeito()
  }
//---------------------//
 function toggleFullScreen() {
  const elem = document.documentElement; 
  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}
//---------------------//
function containerPedidoFeito (){  
  const containerPedidoFeito = document.querySelector(".containerPedidoFeito");
      containerPedidoFeito.style.display = "flex"; // Mostrar o container
      setTimeout(function() {
          containerPedidoFeito.style.display = "none"; // Ocultar o container após um tempo
      }, 2000); // Altere o valor (em milissegundos) conforme necessário
}
//---------------------//


