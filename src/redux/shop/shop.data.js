const SHOP_DATA = {
    single: {
      id: 1,
      title: 'Single',
      routeName: 'single',
      items: [
        {
            id: 1,
            name: 'Black Berry Jam',
            imageUrl: 'https://ibb.co/D85Chk0',
            price: 4,
            info: '355ml', 
            details: 'Deep, jammy, bold. Blackberry Jam is like the bass solo on a Neo-Bop track you heard once in dream. That is to say: this is the flavor you’ve been dreaming of.'
        },
        {
            id: 2,
            name: 'Cherry Pop',
            imageUrl: 'https://ibb.co/FY7YvPy',
            price: 4,
            info: '355ml', 
            details: 'Fruity with a ripe finish. Our Cherry is like a Shirley Temple for grown-ups — still cute, still bubbly, but somehow more mature. Like the coolest mom around.'        },
        {
            id: 3,
            name: 'Extra Peach',
            imageUrl: 'https://ibb.co/XpkVWv5',
            price: 4,
            info: '355ml', 
            details: 'Juicy and dangerously savory. Don\'t expect just your average southern peach. This one delivers big on the boldness and the sass — it’s no wonder we call it Extra.'
        },
        {
            id: 4,
            name: 'Gingery Ale',
            imageUrl: 'https://ibb.co/V3RQ8Sh',
            price: 4,
            info: '355ml', 
            details: 'Zesty and earthy. Gingery Ale is best enjoyed while reading prose by firelight. Spicy, subtle with a lot of bubble — like a fine champagne on NYE.'
        },
        {
            id: 5,
            name: 'Lemon Verbena',
            imageUrl: 'https://ibb.co/rGV4vXF',
            price: 4,
            info: '355ml', 
            details: 'Lemony-limey, lightly floral. Lemon Verbena is a class act, with a touch of herbaceous swagger. Always crisp on the uptake, it\'ll leave you feeling so fresh and so clean.'
        },
        {
            id: 6,
            name: 'Orange Nectarine',
            imageUrl: 'https://ibb.co/hyB0hBy',
            price: 4,
            info: '355ml', 
            details: 'Bright, tangy, satisfying. Orange Nectarine is down to earth but more adventurous than your typical orange — like watching the sun rise over Machu Picchu on a Tuesday.'
        },
        {
            id: 7,
            name: 'Pear Elder Flower',
            imageUrl: 'https://ibb.co/6b1L0DK',
            price: 4,
            info: '355ml', 
            details: 'Fragrant and lovely. Pear Elderflower is inspired by visions of manicured topiary gardens and just-so French-country cottages. We may have put that feeling in a can, but it’s best served in fine china.'
        },
        {
            id: 8,
            name: 'Sour Blueberry',
            imageUrl: 'https://ibb.co/sRjZDyG',
            price: 4,
            info: '355ml', 
            details: 'Bold with a little bite in the back. This rebel feels like riding a motorcycle through an Oregon blueberry patch. Sure, she\'s a bad girl, but you always come back for more.'
        },
        {
            id: 9,
            name: 'Strawberry Basil',
            imageUrl: 'https://ibb.co/zfBG8Rk',
            price: 4,
            info: '355ml', 
            details: 'Fresh with a hint of earthy basil. Lush as a garden of succulents kissed by the sun —this one\'s best experienced with your head in the clouds and your feet in the grass.'
        },
        {
            id: 10,
            name: 'Toasted Coconut',
            imageUrl: 'https://ibb.co/2sT7D45',
            price: 4,
            info: '355ml', 
            details: 'Creamy, nutty, marshmallowy. Mr. Coconut is a tropical state-of-mind that whisks you far, far away. So smooth, rum simply couldn’t ask for a better dance partner.'
        },
        {
            id: 11,
            name: 'White Grape',
            imageUrl: 'https://ibb.co/PMXJzjS',
            price: 4,
            info: '355ml', 
            details: 'Dewy, delicately sweet. White Grape is how a fine wine dresses during the daytime. Light bodied and a little nostalgic — this is the grape you know and love with a touch of graceful charm.'
        },
        {
            id: 12,
            name: 'Young Mango',
            imageUrl: 'https://ibb.co/tzfXRQB',
            price: 4,
            info: '355ml', 
            details: 'Sm000000th mango with passionfruit vibes. This one\'s tropical to level 💯— a flavor straight from a future with no rules, only chill.'
        },
      ]
    },
    pack: {
        id: 2,
        title: 'Pack',
        routeName: 'pack',
        items: [
          {
              id: 1,
              name: 'The Finer Things Club',
              imageUrl: 'https://ibb.co/hftm4mW',
              price: 42,
              info: '12-PACK', 
              details: `One mood, three flavors—explore our best-selling flavor combinations. 

              For those feeling fresh, floral and a little fancy. Pinkies Up, Toby.  Includes:
              - Strawberry Basil (x4 cans)
              - Lemon Verbena (x4 cans)
              - Pear Elderflower (x4 cans)
              
              Sip freely. 30 calories a can, organically sweetened with a dash of real cane sugar, and artificial-free. 
              `
          },
          {
              id: 2,
              name: 'The New Classics',
              imageUrl: 'https://ibb.co/Ky72h0f',
              price: 42,
              info: '12-PACK', 
              details: `One mood, three flavors—explore our best-selling flavor combinations. 

              For those feeling fresh, floral and a little fancy. Pinkies Up, Toby.  Includes:
              - Strawberry Basil (x4 cans)
              - Lemon Verbena (x4 cans)
              - Pear Elderflower (x4 cans)
              
              Sip freely. 30 calories a can, organically sweetened with a dash of real cane sugar, and artificial-free. 
              `
          },
          {
              id: 3,
              name: 'The Blues',
              imageUrl: 'https://ibb.co/fNPrXKf',
              price: 42,
              info: '12-PACK', 
              details: `One mood, three flavors—explore our best-selling flavor combinations. 

              With deep flavors (and deep feels), this smooth yet jazzy trio has range. Includes:
              - White Grape (x4 cans)
              - Sour Blueberry (x4 cans)
              - Blackberry Jam (x4 cans)
              
              Sip freely. 30 calories a can, organically sweetened with a dash of real cane sugar, and artificial-free. 
              `
          },
          {
              id: 4,
              name: 'Toga Party',
              imageUrl: 'https://ibb.co/hmLBfnY',
              price: 42,
              info: '12-PACK', 
              details: `One mood, three flavors—explore our best-selling flavor combinations. 

              Beachy vibes in a can; tastes like spring break for your mouth. Includes:
              - Extra Peach (x4 cans)
              - Young Mango (x4 cans)
              - Toasted Coconut (x4 cans)
              
              Sip freely. 30 calories a can, organically sweetened with a dash of real cane sugar, and artificial-free. 
              `
          },

        ]
    }

  };
  
  export default SHOP_DATA;