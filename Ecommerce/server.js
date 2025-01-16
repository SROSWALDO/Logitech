const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Mock data: Productos y carrito
let products = [
  {
    id: 1,
    name: "Logitech G Pro X Superlight Wireless ",
    price: 3000,
    stock: 10,
    image:
      "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-6.png?v=1",
    description: "Mouse sensor HERO inalambrico superlight ",
    category: "mouse",
  },
  {
    id: 2,
    name: "ZONE VIBE 100",
    price: 1839,
    stock: 15,
    image: "https://resource.logitech.com/content/dam/logitech/en/products/headsets/zone-vibe-100/gallery/zone-vibe-100-gallery-graphite-1.png",
    description: "Auriculares inalámbricos ligeros: lo suficientemente profesionales para la oficina y perfectos para trabajar desde casa",
    category: "headphones",
  },
  {
    id: 3,
    name: "Mx brio",
    price: 3679,
    stock: 20,
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/webcams/mx-brio/buy/gallery/mx-brio-3qtr-front-right-graphite-gallery.png",
    description: "Cámara web Ultra HD 4K para colaboración y streaming",
    category: "webcams",
  },
  {
    id: 4,
    name: "Keyboard Logitech G Pro X",
    price: 50,
    stock: 30,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_944800-MLA74782534407_022024-O.webp",
    description: "Mouse mecanico inalámbrico switches RGB",
    category: "keyboards",
  },
  {
    id: 5,
    name: "Logitech G203 Lightsync",
    price: 500,
    stock: 15,
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/refreshed-g203/g203-black-gallery-2.png",
    description: "Mouse Sensor RGB",
    category: "mouse",
  },
  {
    id: 6,
    name: "Logi dock",
    price: 7999,
    stock: 12,
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/video-conferencing/logi-dock/logi-dock-uc-white-1.png",
    description: "Estación base todo-en-uno con altavoces y controles para entrar en las reuniones con un toque",
    category: "speakers",
  },
  {
    id: 7,
    name: "Logitech Astro A50",
    price: 4560,
    stock: 8,
    image:
      "https://resource.logitech.com/content/dam/astro/en/products/a50-headset-with-base-station-gen4/a50-gallery-ps4-01-refresh.png",
    description: "Auriculares gaming inalambricos Astro",
    category: "headphones",
  },
  {
    id: 8,
    name: "Pro X TKL RAPID",
    price: 3499,
    stock: 5,
    image:
      "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-black-gallery-1-us.png?v=1",
    description: "Teclado TKL switches mecanicos RGB",
    category: "keyboards",
  },
  {
    id: 9,
    name: "Z607 5.1 Surround sound speaker",
    price: 3799,
    stock: 25,
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/speakers/z607/gallery/z607-gallery-1.png",
    description: "Sonido potente con Bluetooth",
    category: "speakers",
  },
  {
    id: 10,
    name: "Logitech C920 HD Pro",
    price: 80,
    stock: 18,
    image:
      "https://resource.logitech.com/w_800,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c920s/gallery/c920s-gallery-1.png?v=1",
    description: "Cámara web para streaming. 1080p superrápido a 30 fps",
    category: "webcams",
  },
  {
    id: 11,
    name: "Logitech Pro x wireless",
    price: 10,
    stock: 3269,
    image:
      "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-1-pro-x-2-lightspeed-gaming-headset-black.png?v=1",
    description: "Auriculares lightspeed inalambricos",
    category: "headphones",
  },
  {
    id: 12,
    name: "Signature K650",
    price: 1103,
    stock: 20,
    image: "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/k650-signature-wireless-keyboard/gallery/k650-top-graphite-esp.png",
    description: "Teclado inalámbrico, equipado para el trabajo diario y el confort",
    category: "keyboards",
  },
  {
    id: 13,
    name: "M720 Triathlon",
    price: 1279,
    stock: 7,
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/mice/m720/gallery/m720-gallery-1a.png",
    description: "Mouse inalábrico multidispositivo con desplazamiento ultra rápido",
    category: "mouse",
  },
  {
    id: 14,
    name: "STREAMCAM",
    price: 3439,
    stock: 10,
    image: "https://resource.logitech.com/content/dam/logitech/en/products/webcams/streamcam/gallery/streamcam-gallery-1-graphite.png",
    description: "Cámara con Full HD y USB-C para streaming de video en tiempo real y creación de contenido",
    category: "webcams",
  },
  {
    id: 15,
    name: "Z207",
    price: 1759,
    stock: 35,
    image: "https://resource.logitech.com/content/dam/logitech/en/products/speakers/z207/gallery/z207-black-gallery-1.png",
    description: "Bocinas Bluetooth para Computadora",
    category: "speakers",
  },
  {
    id: 16,
    name: "Logitech G515",
    price: 3659,
    stock: 10,
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/g502x-plus/gallery/g502x-plus-gallery-1-black.png",
    description: "Interruptores híbridos LIGHTFORCE, inalámbricos de calidad profesional, RGB",
    category: "keyboards",
  },
  {
    id: 17,
    name: "G502 X Plus",
    price: 1549,
    stock: 15,
    image: "https://images.evga.com/products/gallery/100-W1-0600-K1_XL_1.jpg",
    description: "interruptores híbridos LIGHTFORCE, tecnología inalámbrica LIGHTSPEED de nivel profesional, RGB LIGHTSYNC",
    category: "mouse",
  },
  {
    id: 18,
    name: "POWERPLAY",
    price: 1239,
    stock: 22,
    image:
      "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/crush-powerplay/powerplay-gallery-2-nb.png?v=1",
    description: "Sistema inalambrico de carga",
    category: "mousepad",
  },
  {
    id: 19,
    name: "Brio 300",
    price: 1471,
    stock: 6,
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio-300/gallery/brio-300-gallery-offwhite-2.png?v=1",
    description: "Una cámara web de 1080p con corrección de iluminación automática, micrófono con reducción de ruido y conectividad USB-C",
    category: "webcams",
  },
  {
    id: 20,
    name: "Ergo M575",
    price: 70,
    stock: 20,
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/mice/ergo-m575/gallery/ergo-m575-gallery-black-1-new.png",
    description: "Trackball inalámbrico accionado con el pulgar, para confort prolongado",
    category: "mouse",
  },
];

let cart = [];

// Rutas de productos
app.get("/products", (req, res) => {
  res.json(products);
});

// Ruta para obtener un producto por ID
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(product);
});

// Rutas del carrito
app.get("/cart", (req, res) => {
  res.json(cart);
});

app.post("/cart", (req, res) => {
  const { productId, quantity } = req.body;

  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  if (product.stock < quantity) {
    return res.status(400).json({ error: "Cantidad insuficiente en stock" });
  }

  // Verificar si ya existe en el carrito
  const cartItem = cart.find((item) => item.productId === productId);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  }

  product.stock -= quantity; // Reducir stock

  // Retornar solo el producto actualizado o agregado
  const updatedCartItem = {
    productId,
    quantity: cart.find((item) => item.productId === productId).quantity,
    name: product.name,
    price: product.price,
    image: product.image,
  };

  res.json(updatedCartItem);
});

app.put("/cart/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const { quantity } = req.body;

  const cartItem = cart.find((item) => item.productId === productId);
  if (!cartItem) {
    return res
      .status(404)
      .json({ error: "Producto no encontrado en el carrito" });
  }

  const product = products.find((p) => p.id === productId);
  const quantityDifference = quantity - cartItem.quantity;

  if (product.stock < quantityDifference) {
    return res.status(400).json({ error: "Cantidad insuficiente en stock" });
  }

  // Actualizar la cantidad del producto en el carrito
  cartItem.quantity = quantity;
  product.stock -= quantityDifference;

  // Responder solo con los datos del producto actualizado
  res.json({
    productId: cartItem.productId,
    name: cartItem.name,
    quantity: cartItem.quantity,
    price: cartItem.price,
    image: cartItem.image,
  });
});

app.delete("/cart/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);

  const cartIndex = cart.findIndex((item) => item.productId === productId);
  if (cartIndex === -1) {
    return res
      .status(404)
      .json({ error: "Producto no encontrado en el carrito" });
  }

  const [removedItem] = cart.splice(cartIndex, 1);
  const product = products.find((p) => p.id === productId);
  product.stock += removedItem.quantity;

  res.json(cart);
});

// Servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
