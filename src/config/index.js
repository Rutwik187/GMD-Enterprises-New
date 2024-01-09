export const NAVBAR_ITEMS = [
  {
    name: 'Home',
    href: `/`
  },
  {
    name: 'About-Us',
    href: `/`
  },
  {
    name: 'Blogs',
    href: `/`
  },
  {
    name: 'Contact-us',
    href: `/`
  },
]

export const PRODUCT_CATEGORIES = [
    {
      label: 'Categories',
      value: 'Categories' ,
      featured: [
        {
          name: 'category 1',
          href: `/categories`,
          imageSrc: '/categories.jpg',
        },
        {
          name: 'Category 2',
          href: '/products?category=ui_kits&sort=desc',
          imageSrc: '/categories.jpg',
        },
        {
          name: 'Category 3',
          href: '/products?category=ui_kits',
          imageSrc: '/categories.jpg',
        },
      ],
    },
    
  ]

