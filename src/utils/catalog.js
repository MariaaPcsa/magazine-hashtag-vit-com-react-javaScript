import product1Img from "../assets/img/product-1.jpg";
import product2Img from "../assets/img/product-2.jpg";
import product3Img from "../assets/img/product-3.jpg";
import product4Img from "../assets/img/product-4.jpg";
import product5Img from "../assets/img/product-5.jpg";
import product6Img from "../assets/img/product-6.jpg";
import product7Img from "../assets/img/product-7.jpg";
import product8Img from "../assets/img/product-8.jpg";
import product9Img from "../assets/img/product-9.jpg";
import product10Img from "../assets/img/product-10.jpg";
import product11Img from "../assets/img/product-11.jpg";
import product12Img from "../assets/img/product-12.jpg";
import product13Img from "../assets/img/product-13.jpg";
import product14Img from "../assets/img/product-14.jpg";
import product15Img from "../assets/img/product-15.jpg";
import product16Img from "../assets/img/product-16.jpg";
import product17Img from "../assets/img/product-17.jpg";
import product18Img from "../assets/img/product-18.jpg";
import product19Img from "../assets/img/product-19.jpg";
import product20Img from "../assets/img/product-20.jpg";

export const catalog = [
  {
    id: 1,
    brand: "Zara",
    name: "Camisa Larga com Bolsos",
    price: 280,
    image: product1Img,
    feminine: false
  },
  {
    id: 2,
    brand: "Zara",
    name: "Casaco Reto com Lã",
    price: 330,
    image: product2Img,
    feminine: true
  },
  {
    id: 3,
    brand: "Zara",
    name: "Blusa de Lã",
    price: 110,
    image: product3Img,
    feminine: true
  },
  {
    id: 4,
    brand: "Zara",
    name: "Sobretudo em Mescla Marrom",
    price: 160,
    image: product4Img,
    feminine: true
  },
  {
    id: 5,
    brand: "Zara",
    name: "Sobretudo em Mescla Bege",
    price: 110,
    image: product5Img,
    feminine: true
  },
  {
    id: 6,
    brand: "Zara",
    name: "Sobretudo em Mescla Preto",
    price: 170,
    image: product6Img,
    feminine: false
  },
  {
    id: 7,
    brand: "Zara",
    name: "Sobretudo em Camurça",
    price: 350,
    image: product7Img,
    feminine: true
  },
  {
    id: 8,
    brand: "Zara",
    name: "Sobretudo em Mescla Bege com Botões",
    price: 200,
    image: product8Img,
    feminine: true
  },
  {
    id: 9,
    brand: "Zara",
    name: "Jaqueta com Efeito Camurça ",
    price: 250,
    image: product9Img,
    feminine: false
  },
  {
    id: 10,
    brand: "Zara",
    name: "Jaqueta com Efeito Camurça",
    price: 180,
    image: product10Img,
    feminine: true
  },
  {
    id: 11,
    brand: "Zara",
    name: "Calça Jeans Stretch Skinny com Bolsos",
    price: 120,
    image: product11Img,
    feminine: true
  },
  {
    id: 12,
    brand: "Zara",
    name: "Camisa Larga Acolchoada de Veludo Cotelê",
    price: 100,
    image: product12Img,
    feminine: true
  },
  {
    id: 13,
    brand: "Zara",
    name: "Calça Social",
    price: 90,
    image: product13Img,
    feminine: true
  },
  {
    id: 14,
    brand: "Zara",
    name: "Vestido de Malha Canelada Florido",
    price: 88,
    image: product14Img,
    feminine: true
  },
  {
    id: 15,
    brand: "Zara",
    name: "Vestido de Malha com Pregas",
    price: 100,
    image: product15Img,
    feminine: true
  },
  {
    id: 16,
    brand: "Zara",
    name: "Calça Jeans ",
    price: 130,
    image: product16Img,
    feminine: false
  },
  {
    id: 17,
    brand: "Zara",
    name: "Conjunto Praia Azul",
    price: 300,
    image: product17Img,
    feminine: false
  },
  {
    id: 18,
    brand: "Zara",
    name: "Blazer Reto Onça Bege",
    price: 180,
    image: product18Img,
    feminine: true
  },
  {
    id: 19,
    brand: "Zara",
    name: "Jaqueta Feminina Preta",
    price: 150,
    image: product19Img,
    feminine: true
  },
  {
    id: 20,
    brand: "Zara",
    name: "Jaqueta Feminina Marrom",
    price: 220,
    image: product20Img,
    feminine: true
  }
];

export const catalogIndexedById = catalog.reduce((acc, currentValue) => {
  const { id } = currentValue;
  acc[id] = currentValue;
  return acc;
}, {});
