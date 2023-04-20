const macObj = {
  name: "Mac Book Air 13-inch",
  ram: [
    {
      ramSize: 8,
      active: true,
      memory: [
        {
          active: true,
          size: 256,
          price: 12497000,
        },
        {
          active: false,
          size: 512,
          price: 15066000,
        },
      ],
    },
    {
      ramSize: 16,
      active: false,
      memory: [
        {
          active: false,
          size: 256,
          price: 16935000,
        },
        {
          active: true,
          size: 512,
          price: 19270500,
        },
        {
          active: false,
          size: 1024,
          price: 21606500,
        },
      ],
    },
  ],
  colors: [
    {
      id: 'Gold',
      name: "Tilla rang",
      active: true,
      color: '#d29d00',
      img: "img/gold.webp",
      imgs: ['img/gold.webp', 'img/gold.1.webp', 'img/gold.2.webp', 'img/gold.3.webp', 'img/gold.4.webp'],
    },
    {
      id: 'Silver',
      name: "Kumush rang",
      active: false,
      color: 'silver',
      img: "img/silver.webp",
      imgs: ['img/silver.webp', 'img/silver1.webp', 'img/silver2.webp', 'img/silver3.webp', 'img/silver4.webp'],
    },
    {
      id: 'Space Gray',
      name: "Kosmik kulrang",
      active: false,
      color: 'grey',
      img: "img/gray.webp",
      imgs: ['img/gray.webp', 'img/gray1.webp', 'img/gray2.webp', 'img/gray3.webp', 'img/gray4.webp'],
    },
  ],
};