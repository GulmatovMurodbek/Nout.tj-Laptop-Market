import { atom } from "jotai";

export let products = atom([
  {
    id: "1",
    productName: "Dell Latitude 3000",
    colors: ["black", "grey"],
    price: "3200",
    newPrice: "3205",
    images: [
      "https://www.dell.com/wp-uploads/2024/05/Latitude-7455-front-and-back-scaled.jpeg",
      "https://komputerydlafirm.pl/environment/cache/images/0_0_productGfx_21875/dell-xps-13-9340-graphite-triple.webp",
      "https://komputerydlafirm.pl/environment/cache/images/0_0_productGfx_21875/dell-xps-13-9340-graphite-triple.webp",
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/qPVnzr8umKIJxQy8z7Cc4C0Gg9jv5TXipHRZnxuyUsU96G8LvU91KS44Yn_eLF1sOspiO8QwScBsPb_fQboBUWefxE39vTwyFttpjaE8YithcCdhVBnQNSVAVz_aseo2hD1Sbbhy4gq8XbSsjVb7ZYY76.jpg",
    ],
    category: "Dell",
    memory: "16GB",
    brand: "Dell",
    about: "Ноутбуки боэътимоди корӣ бо экрани 14-инч ва протсессори Intel i5.",
    screenSize: "14 инч",
    processor: "Intel Core i5",
  },
  {
    id: "2",
    productName: "HP Pavilion x360",
    colors: ["silver", "blue"],
    price: "4000",
    newPrice: "4005",
    images: [
      "https://hp.widen.net/content/a6ujnk1ecb/webp/a6ujnk1ecb.png?dpi=72&color=ffffff00&w=270",
      "https://m.media-amazon.com/images/I/517NHqncP-L.jpg",
      "https://multiaccess.com/wp-content/uploads/2023/02/c07050231_1_11zon.jpg",
      "https://images-cdn.ubuy.co.in/634fbd8d0516c25f0b7f968a-hp-pavilion-x360-convertible-14.jpg",
    ],
    category: "2",
    memory: "16GB",
    brand: "HP",
    about:
      "Ноутбуки борик ва сабук барои таҳсилу кори ҳаррӯза бо экрани гардишкунанда.",
    screenSize: "13.3 инч",
    processor: "Intel Core i7",
  },
  {
    id: "3",
    productName: "Lenovo ThinkPad E15",
    colors: ["black"],
    price: "3500",
    newPrice: "3400",
    images: [
      "https://p4-ofp.static.pub/fes/cms/2022/03/21/29nchukud7n3x9gulnftfl3w7xdik7038882.png",
      "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8NTc1NTJ8aW1hZ2UvcG5nfGg0Zi9oOWYvMTA5MDE3NjQ0NDAwOTQucG5nfDdjMjkzNGI2ZjM0Yjk5MTEyNmIxMzE0OTFkMGFjYTMzMzM5MWQ0NmQ4ODgyNzA5YjM4NjA0NjVlY2FmYTBhMjU/bWFzdGVyfH.png",
      "https://p3-ofp.static.pub/fes/cms/2021/09/28/htgpo5a93ptq4xe9whvzqyxuuafjik113420.png",
      "https://store.lenovo.com/media/catalog/product/cache/90c9f6aca4e4b4913161c59294bbd070/2/0/20T8S0N200-1_2_1.webp",
    ],
    category: "3",
    memory: "8GB",
    brand: "Lenovo",
    about: "Ноутбуки касбӣ бо клавиатураи бароҳат ва амният барои офис.",
    screenSize: "15.6 инч",
    processor: "Intel Core i5",
  },
  {
    id: "4",
    productName: "Microsoft Surface Laptop 4",
    colors: ["platinum", "matte black"],
    price: "1600",
    newPrice: "1605",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7NKJ0jEf9j1uH8Bm4NftW7rObXRTZ-_sjQ&s",
      "https://www.lifewire.com/thmb/KDCCIjFbVw98PIhwVSHDfezAENI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_hero_SQ_Microsoft-Surface-Laptop-4-1-6dfa98797a3d4223834c350422c3cb57.jpg",
      "https://files.refurbed.com/ii/ms-surface-laptop-4-1145g7-13-1695381140.jpg",
      "https://www.digitaltrends.com/wp-content/uploads/2022/10/surface-laptop-5-03.jpg?fit=720%2C720&p=1",
    ],
    category: "1",
    memory: "16GB",
    brand: "Microsoft",
    about: "Ноутбук пурқувват барои фаъолияти мутахассисон бо экран 15 дюйм.",
    screenSize: "15 инч",
    processor: "Intel Core i7",
  },
  {
    id: "5",
    productName: "Razer Blade 15",
    colors: ["black", "green"],
    price: "2200",
    newPrice: "2100",
    images: [
      "https://www.notebookcheck.net/uploads/tx_nbc2/Blade_15_Fall_2018_Base_Model_Render_13.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6meBb0BF0-kGk4iu3mHL18NPYvSXE_hmIWw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3zrFmcglqA4M9J1dk0RfbAg5WWiE-xFq6oViVAiSlW1eYHpjUtnu1-0RDCPu3Bshr24&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXrGNc1-dJzdvO4c8Iep62NHV7_yxOrCIOEfd8R6DPC5kD79R3Ykd7zTvpgBVTo3tuXE&usqp=CAU",
    ],
    category: "4",
    memory: "16GB",
    brand: "Razer",
    about: "Ноутбук геймерӣ бо дисплейи 15.6 дюйм ва графикаи NVIDIA RTX.",
    screenSize: "15.6 инч",
    processor: "Intel Core i7",
  },
  {
    id: "6",
    productName: "Alienware m15 R6",
    colors: ["dark side of the moon", "lunar light"],
    price: "2300",
    newPrice: "2200",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnG6pT9G6zHlBMZhGtdaodXT-H-MFgpjJyRA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUp3IpE2rNj4YsuftMI4Q0SPVPGoW9z-mjpynh4Mcyqf_zEucXDY4SgHbk6NTyV2FBGlA&usqp=CAU",
      "https://m.media-amazon.com/images/I/71JFloqFmlL._AC_UF894,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7TSQ23i6t24OgmbdvHx-mcKlVjhHBIzLPfTWzwmW1949xAHcD0I2eOplLsolB0VsNYs&usqp=CAU",
    ],
    category: "4",
    memory: "16GB",
    brand: "Alienware",
    about: "Ноутбук геймерӣ бо графикаи NVIDIA GeForce RTX 30.",
    screenSize: "15.6 инч",
    processor: "Intel Core i9",
  },
  {
    id: "7",
    productName: "Gigabyte Aero 15",
    colors: ["black", "grey"],
    price: "1800",
    newPrice: "1750",
    images: [
      "https://images.anandtech.com/doci/12608/gigabyte_aero_15_1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcoK_3Nzg1Zsf6caWfRoy9mwCLUaX3hvqYvw&s",
      "https://m.media-amazon.com/images/I/61vTKxLIGpL._AC_UF894,1000_QL80_.jpg",
      "",
    ],
    category: "5",
    memory: "16GB",
    brand: "Gigabyte",
    about: "Ноутбуки муосир ва пурқувват барои муҳандисон ва тарҳрезон.",
    screenSize: "15.6 инч",
    processor: "Intel Core i7",
  },
  {
    id: "8",
    productName: "MSI GS66 Stealth",
    colors: ["black", "red"],
    price: "2000",
    images: ["https://www.msi.com/gs66-stealth.png"],
    category: "4",
    memory: "16GB",
    brand: "MSI",
    about:
      "Ноутбук геймерӣ бо дисплей 15.6 дюйм ва графикаи NVIDIA GeForce RTX.",
    screenSize: "15.6 инч",
    processor: "Intel Core i9",
  },
  {
    id: "9",
    productName: "Samsung Galaxy Book Pro 360",
    colors: ["silver", "bronze"],
    price: "1400",
    images: [
      "https://images.samsung.com/is/image/samsung/hk_en-feature-thin-as-a-smartphone--powerful-as-a-pc-458034390?$FB_TYPE_A_MO_JPG$",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgpbvY5DUvtk1BhdIBeeUP1CqXZN9sfhyqA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzef6SrM3l_iZImp7jZRJ6rrywAfijJWgAg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGBrhzqR2ncdnTmKSALFAMvwtSkvR1dzOkg&s",
    ],
    category: "1",
    memory: "8GB",
    brand: "Samsung",
    about: "Ноутбук 2-в-1 бо экран гардишкунанда барои ҳар намуди кор.",
    screenSize: "13.3 инч",
    processor: "Intel Core i7",
  },
  {
    id: "10",
    productName: "Toshiba Dynabook Portege X30L",
    colors: ["black", "blue"],
    price: "1700",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9W5p9fChr7x9VyMEy36VYuibStGwAPnWEw&s",
      "https://m.media-amazon.com/images/I/71zL0br+MZL._AC_UF1000,1000_QL80_.jpg",
      "https://us.dynabook.com/images/products/600/X30L-K__ANGLE_1440.png",
      "https://media.ldlc.com/bo/images/fiches/pc_portables/dynabook/portege_x30l/801.jpg",
    ],
    category: "3",
    memory: "8GB",
    brand: "Toshiba",
    about: "Ноутбуки борик ва сабук бо батареяи муддатнок.",
    screenSize: "13.3 инч",
    processor: "Intel Core i5",
  },
  {
    id: "11",
    productName: "Acer Swift 3",
    colors: ["silver", "gold"],
    price: "1200",
    images: [
      "https://media.ldlc.com/r1600/ld/products/00/05/86/91/LD0005869128_1.jpg",
      "https://www.eco-gadget.com/cdn/shop/products/r52_58568eea-62d6-424a-aa43-63ccb4e10e4b_2048x2048.jpg?v=1665052371",
      "https://media.ldlc.com/r1600/ld/products/00/05/86/91/LD0005869124_1.jpg",
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/AW_m15_R6_front.png",
    ],
    category: "2",
    memory: "8GB",
    brand: "Acer",
    about: "Ноутбуки сабук ва пурқувват барои таҳсил ва кор.",
    screenSize: "14 инч",
    processor: "AMD Ryzen 5",
  },
  {
    id: "12",
    productName: "Asus ZenBook 14",
    colors: ["blue", "grey"],
    price: "1300",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKBFsWAuxvu4Ij2jmmfg0VsqaJa_zY42gmw&s",
      "https://m.media-amazon.com/images/I/51TgIfem9vL._AC_UF894,1000_QL80_.jpg",
      "https://images.priceoye.pk/asus-zenbook-14-q425ma-core-ultra-7-155h-pakistan-priceoye-izta9.jpg",
      "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/_/a/_asus_-myshop-pk-5_7.jpg",
    ],
    category: "3",
    memory: "16GB",
    brand: "Asus",
    about: "Ноутбук премиум барои кор ва омузиш бо экран 14 инч.",
    screenSize: "14 инч",
    processor: "Intel Core i7",
  },
  {
    id: "13",
    productName: "Apple MacBook Air M1",
    colors: ["gold", "space grey"],
    price: "1500",
    images: [
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png",
      "https://cdn.mos.cms.futurecdn.net/gPvyaz76tASn87RCGuSdDc.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEsE6uFc87_TrIEeGsSYdGPYBcs9g9hik5A&s",
    ],
    category: "1",
    memory: "8GB",
    brand: "Apple",
    about: "Ноутбук баландсифат барои кор ва хизматрасонӣ бо чипи M1.",
    screenSize: "13.3 инч",
    processor: "Apple M1",
  },
  {
    id: "14",
    productName: "HP Elite Dragonfly",
    colors: ["blue", "silver"],
    price: "2500",
    images: [
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08107188.png?imdensity=1&impolicy=Png_Res",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3biTweuDf1n99VtpU41ZuUQVZg393r18xKA&s",
      "https://m.media-amazon.com/images/I/51VCr1nOsXL.jpg",
      "https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/5/65Z73PA_AB5-1-1_T1678892216.png",
    ],
    category: "2",
    memory: "16GB",
    brand: "HP",
    about: "Ноутбуки люкс барои кор ва сафарҳо бо чаҳорчӯби борик.",
    screenSize: "13.3 инч",
    processor: "Intel Core i7",
  },
  {
    id: "15",
    productName: "Microsoft Surface Book 3",
    colors: ["platinum", "black"],
    price: "2200",
    images: [
      "https://m.media-amazon.com/images/I/71Xx-r1-8jL._AC_UF894,1000_QL80_.jpg",
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/2B077ACB_Panel2_BuyBox_Platinum?qlt=90&hei=270&wid=270&bgc=FFFFFFFF&fmt=jpg",
      "https://petapixel.com/assets/uploads/2020/06/microsoft_feature.jpg",
      "https://www.estunt.nl/wp-content/uploads/2023/03/Estunt-Microsoft-surface-book-3-05.jpg.webp",
    ],
    category: "1",
    memory: "16GB",
    brand: "Microsoft",
    about: "Ноутбук 2-в-1 бо экран баргашташаванда ва қудрати баланд.",
    screenSize: "15 инч",
    processor: "Intel Core i7",
  },
  {
    id: "16",
    productName: "Acer Predator Helios 300",
    colors: ["black", "red"],
    price: "1900",
    images: [
      "https://cdn.uc.assets.prezly.com/c78e15f5-2681-4948-92a4-b1a24bd311ff/Predator-Helios-300-PH-315-54-Bl-Bk-05.jpg",
      "https://images-cdn.ubuy.co.id/634005433f4f712dd4290459-acer-predator-helios-300-gaming-laptop.jpg",
      "https://m.media-amazon.com/images/I/71sS7G5ZpQL.jpg",
      "https://cdn.uc.assets.prezly.com/85a0261f-3aff-46b4-be61-e0ec9728232f/Predator-Helios-300-PH315-53-Standard_01.png",
    ],
    category: "4",
    memory: "16GB",
    brand: "Acer",
    about: "Ноутбук геймерӣ барои таҷрибаи беҳтарини бозӣ.",
    screenSize: "15.6 инч",
    processor: "Intel Core i7",
  },
  {
    id: "17",
    productName: "LG Gram 17",
    colors: ["silver"],
    price: "2000",
    images: [
      "https://www.lg.com/us/images/business/md08004501/gallery/D-02.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptSjkfKsVY3QN-T-5pxmmBGslkrdFAT73Mw&s",
      "https://i.pcmag.com/imagery/reviews/06yeb7upBwwEUBqfr0C9yNe-17.v_1584649915.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5rBI_vAyXTvTn16gBPqtPiIYjuMDQcUrKw&s",
    ],
    category: "1",
    memory: "16GB",
    brand: "LG",
    about: "Ноутбук сабук ва қавӣ бо экран 17 инч.",
    screenSize: "17 инч",
    processor: "Intel Core i7",
  },
  {
    id: "18",
    productName: "MSI GE76 Raider",
    colors: ["black"],
    price: "2200",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1t-tyHw5n2v2q3dPDGqkBohs00PK5Q5w2g&s",
      "https://m.media-amazon.com/images/I/51Q1cRNQ7JS.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WWQZ1pg8TZCNF7BhYPhypcJM4tTnOMAChg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxSeKoeWehOY52CEVexLaN8NDyuClGNDdqA&s",
    ],
    category: "4",
    memory: "32GB",
    brand: "MSI",
    about: "Ноутбук геймерӣ бо графикаи NVIDIA GeForce RTX 30.",
    screenSize: "17.3 инч",
    processor: "Intel Core i9",
  },
  {
    id: "19",
    productName: "XPS 13 9300",
    colors: ["white", "black"],
    price: "1500",
    images: [
      "https://m.media-amazon.com/images/I/91KKKqE7gdL._AC_UF894,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBSzDqLD73DQmqqj6xQnKmIvyOaCRT6RDRK7RhH-1yuqbB0ge8o7lt0nw-0yMfdc6ii4&usqp=CAU",
      "https://files.refurbed.com/pi/dell-xps-13-9300-1065g7-13-4-1675079910.jpg?t=fitdesign&h=600&w=800",
      "https://i.dell.com/is/image/DellContent//content/dam/images/products/laptops-and-2-in-1s/xps/13-9300-non-touch/xs9300nt-xnb-05050lf120-wh.psd?fmt=pjpg&pscan=auto&scl=1&wid=3654&hei=1944&qlt=100,1&resMode=sharp2&size=3654,1944&chrss=full&imwidth=5000",
    ],
    category: "1",
    memory: "8GB",
    brand: "Dell",
    about: "Ноутбук баландсифат барои сафар ва кор.",
    screenSize: "13.4 инч",
    processor: "Intel Core i7",
  },
  {
    id: "20",
    productName: "Apple MacBook Pro 16",
    colors: ["silver", "space grey"],
    price: "2800",
    images: [
      "https://www.apple.com/newsroom/images/tile-images/Apple_16-inch-MacBook-Pro_111319.jpg.landing-big_2x.jpg",
      "https://www.apple.com/v/macbook-pro-14-and-16/a/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxULVl_5XqbxadyrLGoTd1wG5VHxv6Q_1Yg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVZ0_sWN0-vZy4a4NNhkpN9dMZLrqoYVJkg&s",
    ],
    category: "1",
    memory: "16GB",
    brand: "Apple",
    about: "Ноутбуки пурқувват барои таҳиягарон ва муҳандисон.",
    screenSize: "16 инч",
    processor: "Intel Core i9",
  },
  {
    id: "21",
    productName: "Asus TUF Gaming F15",
    colors: ["black", "green"],
    price: "1400",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjru5bU0Ql75Y6ZaYCXmE3Uuou39exVTdfA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuyAbt77Ui6R1imFiwoMjMfgUtOG4E6qOgA&s",
      "https://in.store.asus.com/media/catalog/product/1/1/11-fx506_l.jpg?width=439&height=439&store=en_IN&image-type=image",
      "https://api.fortress.com.hk/medias/zoom-BACK-13199178.jpg?context=bWFzdGVyfGZ0cmhrL2ltYWdlc3wxMTAzNTh8aW1hZ2UvanBlZ3xhRFJsTDJoaFlTOHhNRFEwTlRnek16QXhNVEl6TUM5R1ZGSklTeTB4TXpFNU9URTNPQzFDUVVOTExtcHdad3w1MzliNDk2ZGFmMzFlNjQyYzdhYjA0ZDg2MjRlMjA1MTFkZTAxNmZkYjFiYTNiNGZmNGRmMWUwM2U0NTdmOTBj",
    ],
    category: "4",
    memory: "16GB",
    brand: "Asus",
    about: "Ноутбук геймерӣ бо графикаи NVIDIA GeForce RTX 30.",
    screenSize: "15.6 инч",
    processor: "Intel Core i7",
  },
  {
    id: "22",
    productName: "Lenovo Legion 5 Pro",
    colors: ["black", "grey"],
    price: "1700",
    images: [
      "https://p4-ofp.static.pub/fes/cms/2022/06/16/s444ye7sqwg6rv1b8on54vm77eopra543125.png",
      "https://m.media-amazon.com/images/I/51AcvnP+Q2S._AC_UF894,1000_QL80_.jpg",
      "https://tsikart.in/wp-content/uploads/2023/07/Lenovo-Legion-5-Pro_Cover_Storm-Grey.jpg",
      "https://www.notebookcheck.net/uploads/tx_nbc2/_HZM3199.jpg",
    ],
    category: "4",
    memory: "16GB",
    brand: "Lenovo",
    about: "Ноутбук геймерӣ бо экран 16 инч ва графикаи NVIDIA GeForce RTX 30.",
    screenSize: "16 инч",
    processor: "AMD Ryzen 7",
  },
  {
    id: "23",
    productName: "HP Omen 15",
    colors: ["black", "red"],
    price: "1600",
    images: [
      "https://laptopsking.com/cdn/shop/files/HPOMEN15-DC0020NR_1.jpg?v=1683183713",
      "https://www.cnet.com/a/img/resize/ec0012d280475f2e3d21b19f58ba95db2cb29dea/hub/2017/09/01/6945e54f-5df0-44a7-8f18-67f40734bc00/asus-omen-laptop-6.jpg?auto=webp&fit=crop&height=1200&width=1200",
      "https://laptopsking.com/cdn/shop/files/HPOMEN15-DC0020NR_1.jpg?v=1683183713&width=1946",
      "https://www.cnet.com/a/img/resize/ec0012d280475f2e3d21b19f58ba95db2cb29dea/hub/2017/09/01/6945e54f-5df0-44a7-8f18-67f40734bc00/asus-omen-laptop-6.jpg?auto=webp&fit=crop&height=1200&width=1200",
    ],
    category: "4",
    memory: "16GB",
    brand: "HP",
    about: "Ноутбук геймерӣ бо экрани 15.6 инч ва графикаи NVIDIA GeForce RTX.",
    screenSize: "15.6 инч",
    processor: "Intel Core i7",
  },
  {
    id: "24",
    productName: "Acer Aspire 5",
    colors: ["silver", "black"],
    price: "800",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOa-eo6uw_QHAOIhbFVjSsMzuBwkPQIIECZQ&s",
      "https://i.ebayimg.com/images/g/fNUAAOSwN91njmwe/s-l1200.jpg",
      "https://www.alkosto.com/medias/4711474162526-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyODgyOHxpbWFnZS93ZWJwfGFEaGhMMmcwWVM4eE5EZ3lNek13TnpVd09UYzVNQzgwTnpFeE5EYzBNVFl5TlRJMlh6QXdNVjgzTlRCWGVEYzFNRWd8ZmEyY2ZlZWMwMTc4YTI2OWI0NTczMWEwZDFkZGI2OWZhOTgwYmU5ODNhZmRmNTFkZTlkNzNjYTQ3MzhlMmFjZQ",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJOuiUUrY9BAEgaMkHUy1UnKM90GdUWi_PxPk6EAJTfW579sLd2f94GEmzpk9KuytiYA&usqp=CAU",
    ],
    category: "1",
    memory: "8GB",
    brand: "Acer",
    about: "Ноутбук арзон бо экрани 15.6 инч ва коркард муътадил.",
    screenSize: "15.6 инч",
    processor: "Intel Core i5",
  },
  {
    id: "25",
    productName: "Huawei MateBook D 15",
    colors: ["silver"],
    price: "900",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_X62L_08b8lCajlhd78vgIBnMESPHkk_GQ&s",
      "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/184188_2022.jpg",
      "https://cdn.store-assets.com/s/561/i/42442071.png?width=480",
      "https://monaliza.com.my/wp-content/uploads/2022/09/HUAWEI-MATEBOOK-D15-I3-11TH-MYSTIC-SILVER-optimized.png",
    ],
    category: "1",
    memory: "8GB",
    brand: "Huawei",
    about: "Ноутбук бо экран 15.6 инч барои таҳсил ва кор.",
    screenSize: "15.6 инч",
    processor: "Intel Core i5",
  },
  {
    id: "26",
    productName: "Razer Blade Stealth 13",
    colors: ["black"],
    price: "1800",
    images: [
      "https://i.pcmag.com/imagery/reviews/02mjQPLooUwAHHBZd29rAvg-1..v1569469979.jpg",
      "https://media.wired.com/photos/5c5cc754a94a9659db78cc9e/master/w_2560%2Cc_limit/Razer-Blade-Stealth-%255B2019%255D-4K-Display---PNG-(1).jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXDNK1ueQchtLK6IjKq9VpoPVYztyIAe9Cg&s",
      "https://images.tokopedia.net/img/cache/700/product-1/2019/6/15/1070405/1070405_5503124d-f5a1-4fcf-a717-b5d290f731a4_700_700",
    ],
    category: "2",
    memory: "16GB",
    brand: "Razer",
    about: "Ноутбук сабук ва пурқувват барои кор ва бозӣ.",
    screenSize: "13.3 инч",
    processor: "Intel Core i7",
  },
  {
    id: "27",
    productName: "Dell XPS 17",
    colors: ["silver", "black"],
    price: "2500",
    images: [
      "https://d154tzc5g79pmr.cloudfront.net/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/i/n/indhs-xps-9730-co.jpg",
      "https://amso.eu/hpeciai/e5e4326b9f29e88b3841669191422a52/eng_pl_New-Dell-XPS-17-9730-i9-13900H-64GB-1TB-1920x1200-NVIDIA-GeForce-RTX-4080-Windows-11-Home-265323_2.png",
      "https://i.pcmag.com/imagery/reviews/01hVqiHjH9X85jJPttOdW1a-3..v1686232861.jpg",
      "https://astringo-rugged.com/wp-content/uploads/2021/12/XPS-9510.jpg",
    ],
    category: "1",
    memory: "16GB",
    brand: "Dell",
    about: "Ноутбук пурқувват барои таҳиягарон ва муҳандисон бо экран 17 дюйм.",
    screenSize: "17 инч",
    processor: "Intel Core i9",
  },
  {
    id: "28",
    productName: "Microsoft Surface Laptop 4 for Business",
    colors: ["platinum", "black"],
    price: "2200",
    images: [
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Panel1-sp1b-FBShortHero-O:VP2-859x540",
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Immersive-Surf-Bndls-SurfaceLaptop4-Business-MSComplete-ArcMouse:VP2-859x540",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjDeMIXzOc82uhwzhh8BNg8ypmlJddifj1g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKttCLXHwC05RhZYYIhx9WRN8hEwppH882AA&s",
    ],
    category: "1",
    memory: "16GB",
    brand: "Microsoft",
    about: "Ноутбук барои кор ва сафар бо чипи Intel Core i7.",
    screenSize: "13.5 инч",
    processor: "Intel Core i7",
  },
  {
    id: "29",
    productName: "Apple MacBook Pro 13",
    colors: ["silver", "space grey"],
    price: "2000",
    images: [
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111999_SP747_mbp13-gray.jpg",
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111999_SP747_mbp13-gray.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcajVjSCltoQwuv9h6ydrn_1YxaWjx_zAuqHEjrrrq5RDBBY8WRnrDlsEUzDx9E9JSAqM&usqp=CAU",
      "https://static.fnac-static.com/multimedia/Images/EA/EA/5F/EC/15491050-3-1541-1/tsp20200903154246/MacBook-Pro-Retina-13-i5-2-3-Ghz-8-Go-RAM-256-Go-D-Gris-Sideral-2017-Reconditionne.jpg",
    ],
    category: "1",
    memory: "16GB",
    brand: "Apple",
    about: "Ноутбук дар сатҳи олӣ бо чипи M1 ва экрани Retina.",
    screenSize: "13.3 инч",
    processor: "Apple M1",
  },
  {
    id: "30",
    productName: "Lenovo Yoga 7i",
    colors: ["grey", "black"],
    price: "1000",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz9As5YOAsorWSgeM15JMbMPpneHAx-FWHQ&s",
      "https://m.media-amazon.com/images/I/51KFgjK2C7L.jpg",
      "https://p1-ofp.static.pub//medias/26220743266_Yoga_7i_2-in-1_14_9_Tidal_Teal_NoFPR_202312140421121707247191098.png",
      "https://p3-ofp.static.pub/fes/cms/2022/11/14/4johwio60azfst72gk76fl5e5hho1k314761.png",
    ],
    category: "1",
    memory: "8GB",
    brand: "Lenovo",
    about: "Ноутбук 2-в-1 бо экран гардишкунанда ва иҷрои аъло.",
    screenSize: "14 инч",
    processor: "Intel Core i5",
  },
]);
export let Brand = atom([
  {
    brendName: "Dell",
    id: "1",
    brandimage: "https://static.brandirectory.com/logos/dell001_dell.jpg",
    founded: "1984",
    headquarters: "Round Rock, Texas, USA",
    ceo: "Michael S. Dell",
    revenue: "$102.3 billion",
    employees: "133,000+",
    about:
      "Dell Technologies is an American multinational technology company that develops, sells, repairs, and supports computers and related products and services. It is known for its innovations in supply chain management and e-commerce.",
    history: [
      { year: "1984", event: "Founded by Michael Dell as PC's Limited" },
      { year: "1988", event: "Renamed Dell Computer Corporation" },
      { year: "2003", event: "Renamed Dell Inc." },
      { year: "2013", event: "Michael Dell takes the company private" },
      {
        year: "2016",
        event: "Merged with EMC Corporation, forming Dell Technologies",
      },
    ],
    values: [
      "Customer Commitment",
      "Innovation",
      "Results",
      "Integrity",
      "Teamwork",
    ],
    testimonials: [
      {
        name: "John Miller",
        position: "IT Manager",
        company: "TechFusion",
        image: "/placeholder.svg?height=60&width=60",
        text: "Dell servers have provided us with consistent performance and excellent support.",
        rating: 5,
      },
    ],
    news: [
      {
        title: "Dell Launches AI-Powered Laptops",
        date: "April 2024",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "Dell introduces new laptops with integrated AI processors to boost productivity.",
      },
    ],
    partnerships: ["Intel", "Microsoft", "VMware", "NVIDIA"],
    awards: [
      { year: "2023", award: "Best Workplaces in Technology" },
      { year: "2022", award: "Top 100 Global Innovators" },
    ],
    socialMedia: {
      twitter: "https://twitter.com/Dell",
      facebook: "https://facebook.com/Dell",
      instagram: "https://instagram.com/Dell",
      linkedin: "https://linkedin.com/company/dell",
      youtube: "https://youtube.com/user/DellVlog",
    },
    contact: {
      email: "support@dell.com",
      phone: "+1-800-624-9896",
      address: "1 Dell Way, Round Rock, TX 78682, USA",
      website: "https://www.dell.com",
    },
    faq: [
      {
        question: "Does Dell offer international shipping?",
        answer:
          "Yes, Dell ships to many countries around the world. Availability may vary by region.",
      },
      {
        question: "How long is the warranty on Dell laptops?",
        answer:
          "Most Dell laptops come with a 1-year limited warranty, with optional extended plans available.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "HP",
    id: "2",
    brandimage:
      "https://download.logo.wine/logo/Hewlett-Packard/Hewlett-Packard-Logo.wine.png",
    founded: "1939",
    headquarters: "Palo Alto, California, USA",
    ceo: "Enrique Lores",
    revenue: "$53.7 billion",
    employees: "58,000+",
    about:
      "HP Inc. is an American multinational information technology company that develops personal computers (PCs), printers, and related supplies. HP is known for its reliable laptops and advanced printing technology.",
    history: [
      { year: "1939", event: "Founded by Bill Hewlett and Dave Packard" },
      { year: "1966", event: "Introduced first computer, HP 2100" },
      { year: "2002", event: "Merged with Compaq" },
      {
        year: "2015",
        event: "Split into HP Inc. and Hewlett Packard Enterprise",
      },
    ],
    values: [
      "Innovation",
      "Customer First",
      "Sustainability",
      "Integrity",
      "Excellence",
    ],
    testimonials: [
      {
        name: "Sarah Adams",
        position: "Freelance Designer",
        company: "CreativeHub",
        image: "/placeholder.svg?height=60&width=60",
        text: "HP laptops are perfect for my creative workflows with amazing screen quality and speed.",
        rating: 4,
      },
    ],
    news: [
      {
        title: "HP Expands Its Sustainable PC Lineup",
        date: "March 2024",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "HP introduces eco-friendly laptops made with recycled materials.",
      },
    ],
    partnerships: ["Intel", "Microsoft", "Adobe", "NVIDIA"],
    awards: [
      { year: "2023", award: "World’s Most Ethical Companies" },
      { year: "2022", award: "ENERGY STAR Partner of the Year" },
    ],
    socialMedia: {
      twitter: "https://twitter.com/HP",
      facebook: "https://facebook.com/HP",
      instagram: "https://instagram.com/HP",
      linkedin: "https://linkedin.com/company/hp",
      youtube: "https://youtube.com/user/HPcomputers",
    },
    contact: {
      email: "support@hp.com",
      phone: "+1-800-474-6836",
      address: "1501 Page Mill Road, Palo Alto, CA 94304, USA",
      website: "https://www.hp.com",
    },
    faq: [
      {
        question: "Does HP provide student discounts?",
        answer:
          "Yes, HP offers exclusive discounts for students and educators through its education store.",
      },
      {
        question: "What is HP Instant Ink?",
        answer:
          "HP Instant Ink is a subscription service that delivers ink to your door before you run out.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "Lenovo",
    id: "3",
    brandimage: "https://cdn-icons-png.flaticon.com/512/882/882717.png",
    founded: "1984",
    headquarters: "Beijing, China & Morrisville, North Carolina, USA",
    ceo: "Yang Yuanqing",
    revenue: "$62 billion",
    employees: "75,000+",
    about:
      "Lenovo is a global technology company known for its innovation in PCs, smartphones, tablets, and servers. The company is especially known for its ThinkPad and Yoga series laptops.",
    history: [
      { year: "1984", event: "Founded as Legend in Beijing" },
      {
        year: "2005",
        event: "Acquired IBM's personal computer division",
      },
      { year: "2014", event: "Acquired Motorola Mobility from Google" },
      {
        year: "2017",
        event: "Became #1 PC maker in the world by market share",
      },
    ],
    values: [
      "Customer-Centric Innovation",
      "Global Diversity",
      "Entrepreneurship",
      "Integrity",
      "Excellence",
    ],
    testimonials: [
      {
        name: "Michael Chen",
        position: "IT Manager",
        company: "BlueTech",
        image: "/placeholder.svg?height=60&width=60",
        text: "ThinkPad is my go-to for business needs. Reliable, secure, and long-lasting.",
        rating: 5,
      },
    ],
    news: [
      {
        title: "Lenovo Launches AI-Powered Laptops",
        date: "April 2024",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "Lenovo introduces next-gen laptops optimized for AI workloads and smarter features.",
      },
    ],
    partnerships: ["Microsoft", "Intel", "AMD", "NVIDIA", "Google Cloud"],
    awards: [
      { year: "2023", award: "PCMag Reader's Choice Award" },
      { year: "2022", award: "CES Innovation Award" },
    ],
    socialMedia: {
      twitter: "https://twitter.com/Lenovo",
      facebook: "https://facebook.com/Lenovo",
      instagram: "https://instagram.com/lenovous",
      linkedin: "https://linkedin.com/company/lenovo",
      youtube: "https://youtube.com/user/LenovoVision",
    },
    contact: {
      email: "support@lenovo.com",
      phone: "+1-855-253-6686",
      address: "8001 Development Drive, Morrisville, NC 27560, USA",
      website: "https://www.lenovo.com",
    },
    faq: [
      {
        question: "What is Lenovo Vantage?",
        answer:
          "Lenovo Vantage is a tool to optimize your PC performance, update drivers, and manage hardware settings.",
      },
      {
        question: "Do Lenovo laptops support Linux?",
        answer:
          "Yes, many Lenovo laptops, especially ThinkPads, have good Linux compatibility.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "Acer",
    id: "4",
    brandimage:
      "https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo.png",
    founded: "1976",
    headquarters: "New Taipei City, Taiwan",
    ceo: "Jason Chen",
    revenue: "$9.5 billion",
    employees: "7,000+",
    about:
      "Acer is a Taiwanese multinational hardware and electronics corporation specializing in advanced electronics technology. It is best known for its wide range of laptops, desktops, monitors, and accessories with strong price-to-performance value.",
    history: [
      { year: "1976", event: "Founded as Multitech in Taiwan" },
      { year: "1987", event: "Renamed to Acer" },
      { year: "2007", event: "Acquired Gateway and Packard Bell" },
      { year: "2010", event: "Became world’s second largest PC vendor" },
    ],
    values: [
      "Innovation",
      "Simplicity",
      "Affordability",
      "Environmental Sustainability",
      "Global Reach",
    ],
    testimonials: [
      {
        name: "Sarah Lin",
        position: "Freelance Designer",
        company: "Pixel Arts",
        image: "/placeholder.svg?height=60&width=60",
        text: "Acer Swift is my favorite for design work — sleek, fast, and dependable.",
        rating: 4.5,
      },
    ],
    news: [
      {
        title: "Acer Unveils Eco-Friendly Vero Series",
        date: "March 2024",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "The new Vero laptops are built from recycled materials and optimized for sustainability.",
      },
    ],
    partnerships: ["Intel", "Microsoft", "NVIDIA", "AMD", "Google"],
    awards: [
      { year: "2023", award: "Good Design Award for Acer Vero" },
      { year: "2021", award: "Red Dot Design Award for Predator Series" },
    ],
    socialMedia: {
      twitter: "https://twitter.com/Acer",
      facebook: "https://facebook.com/Acer",
      instagram: "https://instagram.com/acer",
      linkedin: "https://linkedin.com/company/acer",
      youtube: "https://youtube.com/user/AcerGroup",
    },
    contact: {
      email: "support@acer.com",
      phone: "+886-2-2696-1234",
      address:
        "8F, 88, Sec. 1, Xintai 5th Rd., Xizhi, New Taipei City 221, Taiwan",
      website: "https://www.acer.com",
    },
    faq: [
      {
        question: "How do I update drivers on Acer laptops?",
        answer:
          "You can use the Acer Care Center app or visit the official Acer support website to download and install the latest drivers.",
      },
      {
        question: "Is Acer good for gaming?",
        answer:
          "Yes, the Acer Predator and Nitro series are designed specifically for gaming with high-end GPUs and cooling systems.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "Asus",
    id: "5",
    brandimage:
      "https://images.seeklogo.com/logo-png/50/2/asus-logo-png_seeklogo-500532.png",
    founded: "1989",
    headquarters: "Taipei, Taiwan",
    ceo: "S.Y. Hsu & Samson Hu",
    revenue: "$15.3 billion",
    employees: "15,000+",
    about:
      "Asus is a global technology company known for its top-quality laptops, motherboards, graphics cards, and gaming hardware. Asus is widely respected in the PC building community and gaming world.",
    history: [
      {
        year: "1989",
        event: "Founded by four former Acer engineers in Taiwan",
      },
      {
        year: "2006",
        event: "Introduced Republic of Gamers (ROG) brand",
      },
      { year: "2011", event: "Released Zenbook ultra-slim laptops" },
      {
        year: "2019",
        event: "30th anniversary with premium line of products",
      },
    ],
    values: [
      "Innovation",
      "Quality",
      "Performance",
      "Design Excellence",
      "Gaming Leadership",
    ],
    testimonials: [
      {
        name: "Alex Rivera",
        position: "Esports Player",
        company: "Team Blitz",
        image: "/placeholder.svg?height=60&width=60",
        text: "ROG Strix never disappoints in tournaments — performance and design are unmatched.",
        rating: 5.0,
      },
    ],
    news: [
      {
        title: "Asus Launches ROG Ally Handheld Console",
        date: "April 2024",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "Asus enters the portable gaming market with a powerful Windows-based handheld console.",
      },
    ],
    partnerships: ["Intel", "AMD", "NVIDIA", "Microsoft", "Corsair"],
    awards: [
      {
        year: "2022",
        award: "CES Innovation Award for ROG Zephyrus Duo",
      },
      { year: "2023", award: "IF Design Award for Zenbook Pro Duo" },
    ],
    socialMedia: {
      twitter: "https://twitter.com/ASUS",
      facebook: "https://facebook.com/ASUS",
      instagram: "https://instagram.com/asus",
      linkedin: "https://linkedin.com/company/asus",
      youtube: "https://youtube.com/user/asus",
    },
    contact: {
      email: "support@asus.com",
      phone: "+886-2-2894-3447",
      address: "No. 15, Li-Te Rd., Peitou, Taipei 112, Taiwan",
      website: "https://www.asus.com",
    },
    faq: [
      {
        question: "What is the difference between ROG and TUF series?",
        answer:
          "ROG focuses on premium gaming performance and aesthetics, while TUF provides durability and value for budget-conscious gamers.",
      },
      {
        question: "How do I update BIOS on Asus laptops?",
        answer:
          "You can use the MyAsus utility or download the BIOS update file from the official Asus support website.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "Apple",
    id: "6",
    brandimage: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    founded: "April 1, 1976",
    headquarters: "Cupertino, California, USA",
    ceo: "Tim Cook",
    revenue: "$394.3 billion (2023)",
    employees: "164,000+",
    about:
      "Apple is one of the world’s most valuable technology companies, known for designing and selling consumer electronics such as the iPhone, iPad, Mac, and Apple Watch. Apple is renowned for its innovation, design, and closed ecosystem of hardware and software.",
    history: [
      {
        year: "1976",
        event:
          "Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne",
      },
      { year: "1984", event: "Launched the first Macintosh computer" },
      { year: "2007", event: "Introduced the first iPhone" },
      { year: "2015", event: "Released the first Apple Watch" },
      {
        year: "2020",
        event: "Transitioned Mac lineup to Apple Silicon chips",
      },
    ],
    values: [
      "Innovation",
      "User Privacy",
      "Accessibility",
      "Environmental Responsibility",
      "Design Excellence",
    ],
    testimonials: [
      {
        name: "Emily Johnson",
        position: "UX Designer",
        company: "Designify",
        image: "/placeholder.svg?height=60&width=60",
        text: "The MacBook Pro with M2 chip gives me unmatched speed and battery life.",
        rating: 5.0,
      },
    ],
    news: [
      {
        title: "Apple Unveils iPhone 16 with AI-Powered Camera",
        date: "September 2024",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "Apple introduces advanced AI capabilities in the iPhone 16 camera system, enhancing photo and video quality significantly.",
      },
    ],
    partnerships: ["Foxconn", "TSMC", "Broadcom", "IBM", "Goldman Sachs"],
    awards: [
      { year: "2022", award: "TIME's Most Influential Company" },
      {
        year: "2023",
        award: "Best Smartphone Award for iPhone 15 Pro Max",
      },
    ],
    socialMedia: {
      twitter: "https://twitter.com/Apple",
      facebook: "https://facebook.com/apple",
      instagram: "https://instagram.com/apple",
      linkedin: "https://linkedin.com/company/apple",
      youtube: "https://youtube.com/apple",
    },
    contact: {
      email: "contact@apple.com",
      phone: "+1-800-MY-APPLE",
      address: "Apple Park, 1 Apple Park Way, Cupertino, CA 95014, USA",
      website: "https://www.apple.com",
    },
    faq: [
      {
        question: "What is the difference between MacBook Air and MacBook Pro?",
        answer:
          "MacBook Air is thinner and more portable, while MacBook Pro offers more performance for professionals.",
      },
      {
        question: "How can I back up my iPhone?",
        answer:
          "You can back it up using iCloud or through Finder on a Mac or iTunes on a Windows PC.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "Microsoft",
    id: "7",
    brandimage: "https://pngimg.com/uploads/microsoft/microsoft_PNG14.png",
    founded: "April 4, 1975",
    headquarters: "Redmond, Washington, USA",
    ceo: "Satya Nadella",
    revenue: "$211.9 billion (2023)",
    employees: "221,000+",
    about:
      "Microsoft is a global technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, and personal computers and services. Known for its operating system, Windows, and the productivity software suite, Microsoft Office, it also has a significant presence in cloud computing with Azure.",
    history: [
      {
        year: "1975",
        event: "Microsoft founded by Bill Gates and Paul Allen",
      },
      {
        year: "1980",
        event: "Signed a contract with IBM to provide an operating system",
      },
      { year: "1985", event: "Launched Windows 1.0" },
      {
        year: "2000",
        event: "Bill Gates stepped down as CEO, Steve Ballmer took over",
      },
      { year: "2014", event: "Satya Nadella becomes CEO" },
      { year: "2016", event: "Acquired LinkedIn for $26.2 billion" },
      {
        year: "2021",
        event: "Announced plans to acquire Activision Blizzard",
      },
    ],
    values: [
      "Integrity and honesty",
      "Passion for technology",
      "Open and respectful behavior",
      "Willingness to embrace change",
      "Being accountable",
    ],
    testimonials: [
      {
        name: "Mark Johnson",
        position: "IT Manager",
        company: "Tech Innovations",
        image: "/placeholder.svg?height=60&width=60",
        text: "Microsoft Azure's cloud services have allowed our company to scale efficiently and securely.",
        rating: 5,
      },
    ],
    news: [
      {
        title: "Microsoft Announces Major Update to Windows 11",
        date: "July 2024",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "Microsoft is rolling out a new update to Windows 11 with enhanced performance and security features.",
      },
    ],
    partnerships: ["Intel", "Adobe", "SAP", "Dell", "NVIDIA"],
    awards: [
      { year: "2022", award: "Best Cloud Platform - Azure" },
      { year: "2023", award: "Most Innovative Tech Company" },
    ],
    socialMedia: {
      twitter: "https://twitter.com/Microsoft",
      facebook: "https://facebook.com/Microsoft",
      instagram: "https://instagram.com/Microsoft",
      linkedin: "https://linkedin.com/company/microsoft",
      youtube: "https://youtube.com/Microsoft",
    },
    contact: {
      email: "contact@microsoft.com",
      phone: "+1-800-MICROSOFT",
      address: "One Microsoft Way, Redmond, WA 98052-6399, USA",
      website: "https://www.microsoft.com",
    },
    faq: [
      {
        question: "How do I upgrade to Windows 11?",
        answer:
          "To upgrade, visit the Windows Update section in your settings and check for updates to install Windows 11.",
      },
      {
        question: "What is Microsoft Teams?",
        answer:
          "Microsoft Teams is a collaboration platform that integrates with Office 365 for team communication, file sharing, and project management.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "Razer",
    id: "8",
    brandimage:
      "https://logohistory.net/wp-content/uploads/2024/01/Razer-Logo-1998.png",
    founded: "2005",
    headquarters: "Singapore",
    ceo: "Min-Liang Tan",
    revenue: "$1 billion (2020)",
    employees: "1,000+",
    about:
      "Razer is a global gaming hardware manufacturing company and an esports and gaming entertainment platform. Known for high-performance gaming peripherals, Razer also develops software platforms like Razer Synapse for customizable settings.",
    history: [
      {
        year: "2005",
        event: "Razer founded by Min-Liang Tan and Robert Krakoff",
      },
      { year: "2006", event: "Launched the Razer DeathAdder mouse" },
      {
        year: "2010",
        event: "Razer introduces its first gaming laptop, the Razer Blade",
      },
      {
        year: "2015",
        event: "Acquired THX Ltd. to strengthen its gaming audio division",
      },
      {
        year: "2020",
        event: "Razer celebrates 15th anniversary and announces new products",
      },
    ],
    values: ["Innovation", "Precision", "Immersion", "Community", "Excellence"],
    testimonials: [
      {
        name: "Emily Clarke",
        position: "Professional Gamer",
        company: "Gaming Pro League",
        image: "/placeholder.svg?height=60&width=60",
        text: "Razer's products have elevated my gaming experience with their superior performance and design.",
        rating: 5,
      },
    ],
    news: [
      {
        title: "Razer Unveils New Gaming Laptop with Enhanced Performance",
        date: "August 2024",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "Razer has launched its latest gaming laptop with improved graphics and cooling system for pro gamers.",
      },
    ],
    partnerships: ["Intel", "AMD", "NVIDIA", "Twitch", "Ubisoft"],
    awards: [
      { year: "2021", award: "Best Gaming Hardware - Razer DeathAdder" },
      { year: "2022", award: "Best Gaming Laptop - Razer Blade 15" },
    ],
    socialMedia: {
      twitter: "https://twitter.com/Razer",
      facebook: "https://facebook.com/Razer",
      instagram: "https://instagram.com/Razer",
      linkedin: "https://linkedin.com/company/razer",
      youtube: "https://youtube.com/Razer",
    },
    contact: {
      email: "contact@razer.com",
      phone: "+1-800-RAZER",
      address: "1 Razer Drive, Singapore 689694",
      website: "https://www.razer.com",
    },
    faq: [
      {
        question: "How do I customize my Razer mouse settings?",
        answer:
          "Use Razer Synapse, the software that allows you to personalize your mouse's sensitivity, lighting, and macros.",
      },
      {
        question: "Is Razer Blade good for video editing?",
        answer:
          "Yes, the Razer Blade's powerful GPU and high-performance CPU make it suitable for both gaming and video editing tasks.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "Alienware",
    id: "9",
    brandimage:
      "https://www.pngplay.com/wp-content/uploads/6/Alienware-Vector-PNG.png",
    founded: "1996",
    headquarters: "Round Rock, Texas, United States",
    ceo: "Michael Dell",
    revenue: "$10.2 billion (2020)",
    employees: "1,000+",
    about:
      "Alienware is a subsidiary of Dell Inc., known for its high-performance gaming computers, laptops, and accessories. It is recognized for its distinctive designs, advanced technology, and performance tailored for gamers and esports enthusiasts.",
    history: [
      {
        year: "1996",
        event: "Alienware founded by Nelson Gonzalez and Alex Aguila",
      },
      {
        year: "2006",
        event: "Acquired by Dell to expand its gaming product line",
      },
      {
        year: "2010",
        event: "Introduced the Alienware M11x, a portable gaming laptop",
      },
      {
        year: "2014",
        event:
          "Released the Alienware Alpha, a small form-factor gaming console",
      },
      {
        year: "2017",
        event:
          "Alienware launched the Aurora desktop with new upgradable design",
      },
    ],
    values: ["Innovation", "Performance", "Design", "Immersion", "Esports"],
    testimonials: [
      {
        name: "John Williams",
        position: "Gamer",
        company: "Freelance",
        image: "/placeholder.svg?height=60&width=60",
        text: "The Alienware Aurora desktop has taken my gaming experience to the next level. The performance is flawless and the design is out of this world.",
        rating: 5,
      },
      {
        name: "Sarah Lee",
        position: "Esports Athlete",
        company: "Esports Team X",
        image: "/placeholder.svg?height=60&width=60",
        text: "I trust Alienware for its reliability in competitive gaming. The M15 laptop is powerful, light, and fast, giving me the edge I need during tournaments.",
        rating: 5,
      },
    ],
    news: [
      {
        title: "Alienware Unveils New Gaming Laptop with 240Hz Display",
        date: "March 2023",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "Alienware introduces its latest gaming laptop with a stunning 240Hz display, providing ultra-smooth gaming performance.",
      },
      {
        title: "Alienware Partners with Nvidia for Exclusive Ray-Tracing Tech",
        date: "January 2023",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "A new partnership with Nvidia brings exclusive ray-tracing support to Alienware's gaming systems, enhancing visual fidelity in games.",
      },
    ],
    partnerships: ["Nvidia", "Intel", "Corsair", "Razer", "Ubisoft"],
    awards: [
      { year: "2020", award: "Best Gaming Laptop - Alienware m15 R3" },
      {
        year: "2021",
        award: "Best Desktop - Alienware Aurora Ryzen Edition",
      },
    ],
    socialMedia: {
      twitter: "https://twitter.com/Alienware",
      facebook: "https://facebook.com/Alienware",
      instagram: "https://instagram.com/Alienware",
      linkedin: "https://linkedin.com/company/alienware",
      youtube: "https://youtube.com/Alienware",
    },
    contact: {
      email: "support@alienware.com",
      phone: "+1-800-456-3355",
      address: "1 Dell Way, Round Rock, TX 78682, United States",
      website: "https://www.alienware.com",
    },
    faq: [
      {
        question: "How can I customize my Alienware desktop?",
        answer:
          "Alienware desktops are highly customizable. Visit the Alienware website to choose your preferred components and build your system.",
      },
      {
        question: "Does Alienware offer extended warranties?",
        answer:
          "Yes, Alienware offers extended warranties for their products. You can choose the warranty plan during checkout or contact customer support for more details.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "MSI",
    id: "10",
    brandimage: "https://brandmentions.com/wiki/images/1/1a/msi.png",
    founded: "1986",
    headquarters: "New Taipei City, Taiwan",
    ceo: "Charles Chiang",
    revenue: "$7.8 billion (2020)",
    employees: "10,000+",
    about:
      "MSI (Micro-Star International) is a Taiwanese multinational information technology corporation known for its high-performance gaming laptops, desktops, graphics cards, motherboards, and other computer components. MSI is widely recognized in the gaming and eSports industries.",
    history: [
      { year: "1986", event: "MSI founded in Taiwan" },
      {
        year: "2000",
        event: "MSI becomes one of the top producers of motherboards",
      },
      { year: "2010", event: "MSI enters the gaming laptop market" },
      { year: "2015", event: "Launches the first VR-Ready gaming laptops" },
      {
        year: "2020",
        event:
          "Introduced high-end gaming desktops and laptops with RTX graphics",
      },
    ],
    values: ["Innovation", "Performance", "Gaming", "Quality", "Reliability"],
    testimonials: [
      {
        name: "David Lee",
        position: "Professional Gamer",
        company: "Team MSI",
        image: "/placeholder.svg?height=60&width=60",
        text: "MSI products have always provided me with the performance and reliability I need to stay ahead in competitive gaming. The GE66 Raider is my go-to laptop for tournaments.",
        rating: 5,
      },
      {
        name: "Emily Huang",
        position: "Esports Commentator",
        company: "ESL",
        image: "/placeholder.svg?height=60&width=60",
        text: "The MSI gaming products offer incredible power, and the design is second to none. Whether it's a laptop, graphics card, or monitor, MSI has got the best gear.",
        rating: 5,
      },
    ],
    news: [
      {
        title: "MSI Unveils New Gaming Laptops with RTX 30 Series GPUs",
        date: "April 2023",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "MSI has launched new gaming laptops featuring Nvidia's latest RTX 30 series GPUs, offering gamers next-level performance and ray-tracing technology.",
      },
      {
        title:
          "MSI Launches Next-Gen Gaming Motherboards for Ryzen 5000 Series",
        date: "March 2023",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "MSI has unveiled its next-gen gaming motherboards, specifically designed for AMD Ryzen 5000 Series processors, with enhanced features and overclocking support.",
      },
    ],
    partnerships: ["Intel", "Nvidia", "AMD", "SteelSeries", "Corsair"],
    awards: [
      { year: "2020", award: "Best Gaming Laptop - MSI GE66 Raider" },
      {
        year: "2021",
        award: "Best Graphics Card - MSI RTX 3080 Gaming X Trio",
      },
    ],
    socialMedia: {
      twitter: "https://twitter.com/MSI_Computing",
      facebook: "https://facebook.com/MSI",
      instagram: "https://instagram.com/msigaming",
      linkedin: "https://linkedin.com/company/msi",
      youtube: "https://youtube.com/user/MSI",
    },
    contact: {
      email: "support@msi.com",
      phone: "+1-626-271-1004",
      address:
        "No. 69, Lide Street, Xizhi District, New Taipei City 221, Taiwan",
      website: "https://www.msi.com",
    },
    faq: [
      {
        question: "How do I choose the right MSI laptop for gaming?",
        answer:
          "MSI offers a range of gaming laptops catering to different needs. Choose based on your desired performance (CPU, GPU), display quality, and portability.",
      },
      {
        question: "Can I upgrade my MSI laptop's components?",
        answer:
          "Yes, many MSI laptops offer the ability to upgrade components such as RAM, storage, and even GPU in some models.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "Toshiba",
    id: "11",
    brandimage:
      "https://exchange4media.gumlet.io/news-photo/1538123043_2tqXyZ_Toshiba.jpg",
    founded: "1875",
    headquarters: "Minato, Tokyo, Japan",
    ceo: "Satoshi Tsunakawa",
    revenue: "$34.09 billion (2021)",
    employees: "130,000+",
    about:
      "Toshiba is a Japanese multinational conglomerate corporation that produces a wide variety of products including electronics, power systems, and storage devices. Known for innovation and technology leadership, Toshiba is one of the world's largest producers of flash memory and storage devices.",
    history: [
      { year: "1875", event: "Toshiba founded as Tokyo Electric Company" },
      { year: "1939", event: "Company adopts the name Toshiba" },
      {
        year: "1950",
        event: "Toshiba develops Japan's first home-use television",
      },
      {
        year: "1980",
        event: "Introduces the first portable computer in Japan",
      },
      { year: "2008", event: "Acquires Westinghouse Electric Company" },
    ],
    values: [
      "Innovation",
      "Sustainability",
      "Customer Commitment",
      "Technology Leadership",
    ],
    testimonials: [
      {
        name: "John Smith",
        position: "IT Specialist",
        company: "Tech Solutions Inc.",
        image: "/placeholder.svg?height=60&width=60",
        text: "Toshiba products are incredibly reliable and have consistently helped us maintain high performance in our operations. The Toshiba laptops are great for professional use.",
        rating: 5,
      },
      {
        name: "Sarah Lee",
        position: "Project Manager",
        company: "Digital Media Group",
        image: "/placeholder.svg?height=60&width=60",
        text: "Toshiba storage solutions provide exceptional performance and reliability. We trust them for all of our data storage needs.",
        rating: 5,
      },
    ],
    news: [
      {
        title: "Toshiba Expands Its Semiconductor Business with New Plant",
        date: "March 2023",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "Toshiba has announced the construction of a new semiconductor manufacturing plant to expand its production of flash memory and chips.",
      },
      {
        title: "Toshiba Launches a New Line of 4K Smart TVs",
        date: "February 2023",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "The new line of Toshiba 4K Smart TVs features cutting-edge display technology and enhanced smart functionality for home entertainment.",
      },
    ],
    partnerships: ["Intel", "Seagate", "Western Digital", "Microsoft"],
    awards: [
      {
        year: "2020",
        award: "Best External Hard Drive - Toshiba Canvio Advance",
      },
      { year: "2021", award: "Innovation in Storage - Toshiba XG6 SSD" },
    ],
    socialMedia: {
      twitter: "https://twitter.com/ToshibaCorp",
      facebook: "https://facebook.com/Toshiba",
      instagram: "https://instagram.com/toshiba",
      linkedin: "https://linkedin.com/company/toshiba",
      youtube: "https://youtube.com/user/toshibacorp",
    },
    contact: {
      email: "contact@toshiba.com",
      phone: "+81-3-3457-2111",
      address: "1-1, Shibaura 1-chome, Minato-ku, Tokyo, Japan",
      website: "https://www.toshiba.com",
    },
    faq: [
      {
        question: "How can I improve the performance of my Toshiba laptop?",
        answer:
          "Make sure your laptop has the latest drivers installed, upgrade RAM if necessary, and perform regular disk cleanups to maintain smooth performance.",
      },
      {
        question: "How do I restore my Toshiba laptop to factory settings?",
        answer:
          "You can restore your Toshiba laptop to factory settings by using the recovery media or accessing the recovery partition during boot-up.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "LG",
    id: "12",
    brandimage: "https://mma.prnewswire.com/media/1225363/LG.jpg?p=facebook",
    founded: "1958",
    headquarters: "Seoul, South Korea",
    ceo: "Koo Kwang-mo",
    revenue: "$56.5 billion (2020)",
    employees: "74,000+",
    about:
      "LG Corporation is a South Korean multinational conglomerate, known for its wide range of consumer electronics, chemicals, and telecommunications products. It has a strong presence in the global market, particularly in the areas of home appliances, display technology, and electronics.",
    history: [
      { year: "1958", event: "LG founded as Lak-Hui" },
      { year: "1966", event: "First production of color televisions" },
      { year: "1983", event: "LG develops first cell phone in South Korea" },
      { year: "1995", event: "Adopts the name LG Corporation" },
      { year: "2009", event: "Launches LG's first OLED TV" },
    ],
    values: [
      "Innovation",
      "Sustainability",
      "Customer Satisfaction",
      "Technology Leadership",
    ],
    testimonials: [
      {
        name: "Michael Johnson",
        position: "Tech Enthusiast",
        company: "Consumer Electronics Review",
        image: "/placeholder.svg?height=60&width=60",
        text: "LG continues to push the boundaries of consumer electronics with its innovative products. The OLED TVs are a game changer in the home entertainment space.",
        rating: 5,
      },
      {
        name: "Emma Davis",
        position: "Product Manager",
        company: "Tech World",
        image: "/placeholder.svg?height=60&width=60",
        text: "We have been using LG products for years, and their durability and performance are unmatched. The LG V60 ThinQ is one of the best smartphones in its class.",
        rating: 5,
      },
    ],
    news: [
      {
        title: "LG Expands OLED TV Lineup with New 8K Models",
        date: "April 2023",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "LG has unveiled new 8K OLED TV models, bringing ultra-high-definition viewing to the next level with even more vibrant colors and clarity.",
      },
      {
        title: "LG Unveils New AI-powered Washing Machines",
        date: "March 2023",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "The latest washing machines from LG incorporate artificial intelligence to optimize wash cycles and improve efficiency.",
      },
    ],
    partnerships: ["Google", "Intel", "Microsoft", "Spotify"],
    awards: [
      { year: "2020", award: "Best OLED TV - LG OLED CX" },
      {
        year: "2021",
        award: "Most Innovative Appliance - LG InstaView Refrigerator",
      },
    ],
    socialMedia: {
      twitter: "https://twitter.com/LGUS",
      facebook: "https://facebook.com/LGUS",
      instagram: "https://instagram.com/lgus",
      linkedin: "https://linkedin.com/company/lg",
      youtube: "https://youtube.com/user/LGUSA",
    },
    contact: {
      email: "contact@lg.com",
      phone: "+82-2-3777-1114",
      address:
        "LG Twin Towers, 128, Yeoui-daero, Yeongdeungpo-gu, Seoul, South Korea",
      website: "https://www.lg.com",
    },
    faq: [
      {
        question: "How do I connect my LG TV to the internet?",
        answer:
          "You can connect your LG TV to the internet through Wi-Fi or an Ethernet cable by following the on-screen instructions in the settings menu.",
      },
      {
        question: "What is the warranty on LG appliances?",
        answer:
          "LG appliances come with a limited warranty period, typically ranging from 1 to 10 years depending on the product category.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    brendName: "Huawei",
    id: "13",
    brandimage:
      "https://bsmedia.business-standard.com/_media/bs/img/about-page/1562577670.jpg",
    founded: "1987",
    headquarters: "Shenzhen, China",
    ceo: "Ren Zhengfei",
    revenue: "$136 billion (2020)",
    employees: "194,000+",
    about:
      "Huawei is a Chinese multinational technology company that specializes in telecommunications equipment, consumer electronics, and technology solutions. It is one of the world's largest telecommunications and smartphone manufacturers.",
    history: [
      { year: "1987", event: "Huawei founded by Ren Zhengfei" },
      { year: "1997", event: "First international expansion into Europe" },
      { year: "2003", event: "Launch of Huawei's first mobile phone" },
      {
        year: "2008",
        event:
          "Huawei becomes the largest telecom equipment supplier in the world",
      },
      {
        year: "2018",
        event:
          "Huawei becomes the second largest smartphone manufacturer globally",
      },
    ],
    values: [
      "Innovation",
      "Customer-Centric",
      "Sustainability",
      "Globalization",
    ],
    testimonials: [
      {
        name: "John Smith",
        position: "Tech Reviewer",
        company: "TechRadar",
        image: "/placeholder.svg?height=60&width=60",
        text: "Huawei's smartphones are some of the best on the market, offering superb performance and features that rival the best in the industry.",
        rating: 5,
      },
      {
        name: "Sarah Lee",
        position: "Gadget Enthusiast",
        company: "Gizmodo",
        image: "/placeholder.svg?height=60&width=60",
        text: "I love my Huawei P40 Pro. It has one of the best cameras in a smartphone and performs incredibly well across the board.",
        rating: 5,
      },
    ],
    news: [
      {
        title: "Huawei Launches HarmonyOS for Smartphones",
        date: "June 2021",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "Huawei has officially launched its own operating system, HarmonyOS, which is set to replace Android on its devices.",
      },
      {
        title: "Huawei Unveils 5G Network Technology",
        date: "March 2021",
        image: "/placeholder.svg?height=150&width=250",
        summary:
          "Huawei has revealed its latest advancements in 5G network technology, pushing the boundaries of mobile connectivity.",
      },
    ],
    partnerships: ["Google", "Intel", "Qualcomm", "Vodafone"],
    awards: [
      { year: "2020", award: "Best Smartphone Camera - Huawei P40 Pro" },
      { year: "2019", award: "Best Innovation in Telecommunications" },
    ],
    socialMedia: {
      twitter: "https://twitter.com/HuaweiMobile",
      facebook: "https://facebook.com/HuaweiMobile",
      instagram: "https://instagram.com/huawei",
      linkedin: "https://linkedin.com/company/huawei",
      youtube: "https://youtube.com/user/HuaweiMobile",
    },
    contact: {
      email: "contact@huawei.com",
      phone: "+86-755-28780808",
      address:
        "Huawei Industrial Base, Bantian, Longgang District, Shenzhen, Guangdong, China",
      website: "https://www.huawei.com",
    },
    faq: [
      {
        question: "How do I transfer data from my old Huawei phone?",
        answer:
          "You can use Huawei's Phone Clone app to easily transfer your contacts, photos, and apps from your old phone to your new Huawei device.",
      },
      {
        question: "Does Huawei support Google services?",
        answer:
          "Due to recent developments, Huawei phones no longer come pre-installed with Google services, but they offer their own alternatives through the Huawei AppGallery.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
]);


