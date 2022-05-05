//tea,coffee,milk,cornflakes, Bread,butter every morning
//salad every night
//salad and curd every noon

const menu = {
  southmess: {
    week1: {
      sunday: {
        breakfast: [
          'Dosa & Masala',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',
          'Coconut Chutney',
          'Sambar',
          'Pineapple Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Veg Biryani (Basmati)',
          'Chapathi',
          'Kadadi Paneer',
          'Boondi Raita',
          'Papad',
          'Gulab Jamun',
          'Mango Pickle',
        ],
        dinner: [
          'Rice',
          'Pepper Rasam',
          'Phulka',
          'Sambar',
          'Dal Makhani',
          'Raw Banana',
          'Masala Papad',
          'Lemon Pickle',
          'Butter Milk',
          'Pineapple',
        ],
      },
      monday: {
        breakfast: [
          'Idly & Vada',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',
          'Coconut Chutney',
          'Sambar',
          'Sprouts',
          'Mixed Fruit Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Garlic Rasam',
          'Phulka',
          'Rajma Masala',
          'Sambar',
          'Brinjal Fry',
          'Fryums',
          'Ginger Thovaiyal',
          'Lemon Pickel',
        ],
        dinner: [
          'Rice',
          'Lemon Rasam',
          'Phulka',
          'Crispy Veg(no Potato)',
          'Green Peas Masala',
          'Vatthal',
          'Lemon Pickel',
          'Butter Milk',
          'Banana',
        ],
      },
      tuesday: {
        breakfast: [
          'Puttu & Kadala Curry',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Rava Khichidi',
          'Coconut Chutney',
          'Pineapple Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Lemon Rasam',
          'Chapathi',
          'Gongura Pappu',
          'Puli Kuzhambu',
          'Crispy Onion Pakoda',
          'Masala Papad',
          'Tomato Thovaiyal',
          'Mix Veg Pickle',
        ],
        dinner: [
          'Rice',
          'Tomato Rasam',
          'Alu Paratha',
          'Tomato Curry',
          'Papad',
          'Lemon Pickle',
          'Lemon Juice',
          'Rava Keshari',
        ],
      },
      wednesday: {
        breakfast: [
          'Onion Uthapam',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Groundnut Chutney',
          'Sambar',
          'Mixed Fruit Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Tomato Rasam',
          'Phulka',
          'Carrot Peas',
          'Sambar',
          'Bottle Gourd Kottu',
          'Vatthal',
          'Mint Thovaiyal',
          'Lemon Pickle',
        ],
        dinner: [
          'Veg Fried Rice',
          'Chapathi',
          'Dal Fry',
          'Gobi Manchurian',
          'Fryums',
          'Mix Veg Pickle',
          'Butter Milk',
          'Water Melon',
        ],
      },
      thursday: {
        breakfast: [
          'Pesarattu & Upma',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',
          'Ginger Chutney',
          'Sambar',
          'Mango Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Pepper Rasam',
          'Chapathi',
          'Sambar',
          'Avial',
          'Gobi 65',
          'Masala Papad',
          'Curry Leaves Thovaiyal',
          'Gongura Pickel',
        ],
        dinner: [
          'Rice',
          'Tomato Rasam',
          'Ragi Dosa',
          'Sambar',
          'Tomato Chutney',
          'Potato Fry',
          'Papad',
          'Lemon Pickle',
          'Lemon Juice',
          'Papaya',
        ],
      },
      friday: {
        breakfast: [
          'Pongal & Vada',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',
          'Coconut Chutney',
          'Sambar',
          'Mango Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Tomato Rasam',
          'Phulka',
          'Shahi Paneer',
          'Moor Kuzhambu',
          'Ridge Gourd',
          'Fryums',
          'Tomato Thovaiyal',
          'Lemon Pickle',
        ],
        dinner: [
          'Rice',
          'Tomato Rasam',
          'Uthapam',
          'Sambar',
          'Groundnut Chutney',
          'Carrot Beans Cabbage Poriyal',
          'Fryums',
          'Mango Pickle',
          'Lemon Juice',
        ],
      },
      saturday: {
        breakfast: [
          'Poori',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',
          'Aloo Masala',
          'Boiled Chana Sprouts',
          'Mixed Fruit Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Lemon Rasam',
          'Chapathi',
          'Chow Chow',
          'Sambar',
          'Keerai Vada',
          'Papad',
          'Mint Thovaiyal',
          'Mix Veg Pickle',
        ],
        dinner: [
          'Sambar Rice',
          'Puliogare',
          'Curd Rice',
          'Potato Chips',
          'Pickle',
          'Boost',
          'Yellow Banana',
        ],
      },
    },
    week2: {
      sunday: {
        breakfast: [
          'Poha',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',
          'Coconut Chutney',
          'Sambar',
          'Peanut Sundal',
          'Pineapple Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Veg Biryani(Basmati)',
          'Phulka',
          'Paneer Butter Masala',
          'Raita',
          'Papad',
          'Mysore Pak',
          'Mango Pickle',
        ],
        dinner: [
          'Rice',
          'Tomato Rice',
          'Bhatura',
          'Chole Masala',
          'Fryums',
          'Mango Pickle',
          'Lemon Juice',
        ],
      },
      monday: {
        breakfast: [
          'Rava Idly',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Coconut Chutney',
          'Sambar',
          'Mixed Fruid Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Garlic Rasam',
          'Chapathi',
          'Palak Pappu',
          'Sambar',
          'Beetroot Poriyal',
          'Fryums',
          'Gonguar Thoviyal',
          'Lemon Pickle',
        ],
        dinner: [
          'Rice',
          'Lemon Rasam',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Phulka',
          'Veg Kurma',
          'Sambar',
          'Vatthal',
          'Lemon Pickle',
          'Butter Milk',
          'Papaya',
        ],
      },
      tuesday: {
        breakfast: [
          'Rava Dosa',
          'Kara Chutney',
          'Sambar',
          'Mixed Fruit Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Lemon Rasam',
          'Phulka',
          'Chow Chow Kootu',
          'Mooru Kuzhambu',
          'Aloo Kara Poriyal',
          'Masala Papad',
          'Mint Thovaiyal',
          'Mix Veg Pickel',
        ],
        dinner: [
          'Jeera Rice',
          'Chapathi',
          'Paneer Mutter Masala',
          'Dal Fry',
          'Fryums',
          'Mix Veg Pickle',
          'Butter Milk',
          'Pineapple',
        ],
      },
      wednesday: {
        breakfast: [
          'Maggi',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Masala Vada',
          'Tomato Ketchup',
          'Ragi Koozh',
          'Mixed Fruit Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Tomato Rasa,',
          'Chapathi',
          'Gongura Dal',
          'Sambar',
          'Tindly fry',
          'Vatthal',
          'Ridge Gourd Thoviyal',
          'Lemon Pickle',
        ],
        dinner: [
          'Rice',
          'Tomato Rasam',
          'PLain Dosa',
          'Coconut Chutney',
          'Sambar & Podi',
          'Papad',
          'Lemon Pickle',
          'Lemon Juice',
          'Double Ka Meetha',
        ],
      },
      thursday: {
        breakfast: [
          'Pongal & Vada',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Groundnut Chutney',
          'Sambar',
          'Mixed Sprouts',
          'Pineaple Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Pepper Rasam',
          'Phulka',
          'Mixed Dal',
          'Vathal Kuzhambu',
          'Carrot Beans Poriyal',
          'Papad',
          'Curry Leaves Thovaiyal',
          'Gongura Pickle',
        ],
        dinner: [
          'Rice',
          'Pepper Rasam',
          'Chapathi',
          'Crispy Veg(no Potato)',
          'Navaratan Korma',
          'Masala Papad',
          'Lemon Pickle',
          'Butter Milk',
          'Seasonal Fruit',
        ],
      },
      friday: {
        breakfast: [
          'Poori',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Aloo Masala',
          'Boiled Chana Sprouts',
          'Mango Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Tomato Rasam',
          'Chapathi',
          'Palak Paneer',
          'Sambar',
          'Bhindi Dry',
          'Fryums',
          'Gongura Thoviyal',
          'Lemon Pickle',
        ],
        dinner: [
          'Rice',
          'Tomato Rasam',
          'Millet Dosa',
          'Onion Chutney',
          'Sambar',
          'Papad',
          'Lemon Pickle',
          'Lemon Juice',
          'Water Melon',
        ],
      },
      saturday: {
        breakfast: [
          'Kal Dosa',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Pudhina Chutney',
          'Vada Curry',
          'Boiled Moong Sprout',
          'Mango Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Lemon Rasam',
          'Phulka',
          'Tomato Dal',
          'Sambar',
          'Beans & Aloo Poriyal',
          'Masala Papad',
          'Curry Leaves Thovaiyal',
          'Mix Veg Pickel',
        ],
        dinner: [
          'Sambar Rice',
          'Tomato Rice',
          'Curd Rice',
          'Potato Chips',
          'Pickle',
          'Boost',
          'Banana',
        ],
      },
    },
    week3: {
      sunday: {
        breakfast: [
          'Idiyappam',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Coconut Chutney',
          'Veg Kuruma',
          'Pineapple Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Veg Biryani (Basmati)',
          'Chapathi',
          'Kadadi Paneer',
          'Boondi Raita',
          'Papad',
          'Ice cream',
          'Mango Pickle',
        ],
        dinner: [
          'Rice',
          'Pepper Rasam',
          'Phulka',
          'Sambar',
          'Dal Makhani',
          'Red Pumpkin',
          'Masala Papad',
          'Lemon Pickle',
          'Butter Milk',
          'Pineapple',
        ],
      },
      monday: {
        breakfast: [
          'Idly & Vada',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Garlic Chutney',
          'Sambar',
          'Sprouts',
          'Mixed Fruit Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Garlic Rasam',
          'Phulka',
          'Rajma Masala',
          'Sambar',
          'Brinjal MoChhe',
          'Fryums',
          'Ginger Thovaiyal',
          'Lemon Pickel',
        ],
        dinner: [
          'Rice',
          'Lemon Rasam',
          'Phulka',
          'Crispy Veg(no Potato)',
          'Green Peas Masala',
          'Vatthal',
          'Lemon Pickel',
          'Butter Milk',
          'Banana',
        ],
      },
      tuesday: {
        breakfast: [
          'Puttu & Kadala Curry',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Rava Khichidi',
          'Coconut Chutney',
          'Pineapple Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Lemon Rasam',
          'Chapathi',
          'Gongura Pappu',
          'Puli Kuzhambu',
          'Bitter Gourd 65',
          'Masala Papad',
          'Tomato Thovaiyal',
          'Mix Veg Pickle',
        ],
        dinner: [
          'Rice',
          'Tomato Rasam',
          'Gobi Paratha',
          'Tomato Curry',
          'Papad',
          'Lemon Pickle',
          'Lemon Juice',
          'Pineapple Keshari',
        ],
      },
      wednesday: {
        breakfast: [
          'Onion Uthapam',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Groundnut Chutney',
          'Sambar',
          'Mixed Fruit Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Tomato Rasam',
          'Phulka',
          'Carrot Beans Poriyal',
          'Sambar',
          'Bottle Gourd Kottu',
          'Vatthal',
          'Mint Thovaiyal',
          'Lemon Pickle',
        ],
        dinner: [
          'Veg Fried Rice',
          'Chapathi',
          'Dal Fry',
          'Gobi Manchurian',
          'Fryums',
          'Mix Veg Pickle',
          'Butter Milk',
          'Water Melon',
        ],
      },
      thursday: {
        breakfast: [
          'Pesarattu & Upma',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Ginger Chutney',
          'Sambar',
          'Mango Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Pepper Rasam',
          'Chapathi',
          'Sambar',
          'Avial',
          'Bhindi Fry',
          'Masala Papad',
          'Curry Leaves Thovaiyal',
          'Gongura Pickel',
        ],
        dinner: [
          'Rice',
          'Tomato Rasam',
          'Rava Idly',
          'Sambar',
          'Coconut Chutney',
          'Potato Fry',
          'Papad',
          'Lemon Pickle',
          'Lemon Juice',
          'Papaya',
        ],
      },
      friday: {
        breakfast: [
          'Pongal & Vada',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Coconut Chutney',
          'Sambar',
          'Mango Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Tomato Rasam',
          'Phulka',
          'Shahi Paneer',
          'Moor Kuzhambu',
          'Keerai Beetroot Poriyal',
          'Fryums',
          'Tomato Thovaiyal',
          'Lemon Pickle',
        ],
        dinner: [
          'Rice',
          'Tomato Rasam',
          'Uthapam',
          'Sambar',
          'Groundnut Chutney',
          'Carrot Beans Cabbage Poriyal',
          'Fryums',
          'Mango Pickle',
          'Lemon Juice',
        ],
      },
      saturday: {
        breakfast: [
          'Poori',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Aloo Masala',
          'Boiled Chana Sprouts',
          'Mixed Fruit Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Lemon Rasam',
          'Chapathi',
          'Snake Gourd Kootu',
          'Sambar',
          'Keerai Vada',
          'Papad',
          'Mint Thovaiyal',
          'Mix Veg Pickle',
        ],
        dinner: [
          'Sambar Rice',
          'Gongura Rice',
          'Curd Rice',
          'Potato Chips',
          'Pickle',
          'Boost',
          'Yellow Banana',
        ],
      },
    },
    week4: {
      sunday: {
        breakfast: [
          'Seviya Upma',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Coconut Chutney',
          'Sambar',
          'Peanut Sundal',
          'Pineapple Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Veg Biryani(Basmati)',
          'Phulka',
          'Paneer Butter Masala',
          'Raita',
          'Papad',
          'Payasam',
          'Mango Pickle',
        ],
        dinner: [
          'Rice',
          'Tomato Rice',
          'Bhatura',
          'Chole Masala',
          'Fryums',
          'Mango Pickle',
          'Lemon Juice',
        ],
      },
      monday: {
        breakfast: [
          'Idly & Vada',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Coconut Chutney',
          'Sambar',
          'Mixed Fruid Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Garlic Rasam',
          'Chapathi',
          'Palak Pappu',
          'Sambar',
          'Beetroot Poriyal',
          'Fryums',
          'Gonguar Thoviyal',
          'Lemon Pickle',
        ],
        dinner: [
          'Rice',
          'Lemon Rasam',
          'Phulka',
          'Veg Kurma',
          'Sambar',
          'Vatthal',
          'Lemon Pickle',
          'Butter Milk',
          'Papaya',
        ],
      },
      tuesday: {
        breakfast: [
          'Rava Dosa',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Kara Chutney',
          'Sambar',
          'Mixed Fruit Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Lemon Rasam',
          'Phulka',
          'Chow Chow Kootu',
          'Mooru Kuzhambu',
          'Aloo Kara Poriyal',
          'Masala Papad',
          'Mint Thovaiyal',
          'Mix Veg Pickel',
        ],
        dinner: [
          'Jeera Rice',
          'Chapathi',
          'Paneer Mutter Masala',
          'Dal Fry',
          'Fryums',
          'Mix Veg Pickle',
          'Butter Milk',
          'Pineapple',
        ],
      },
      wednesday: {
        breakfast: [
          'Maggi',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Masala Vada',
          'Tomato Ketchup',
          'Ragi Koozh',
          'Mixed Fruit Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Tomato Rasa,',
          'Chapathi',
          'Gongura Dal',
          'Sambar',
          'Tindly fry',
          'Vatthal',
          'Ridge Gourd Thoviyal',
          'Lemon Pickle',
        ],
        dinner: [
          'Rice',
          'Tomato Rasam',
          'Idly',
          'Coconut Chutney',
          'Sambar & Podi',
          'Papad',
          'Lemon Pickle',
          'Lemon Juice',
          'Carrot Halwa',
        ],
      },
      thursday: {
        breakfast: [
          'Pongal & Vada',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Groundnut Chutney',
          'Sambar',
          'Mixed Sprouts',
          'Pineaple Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Pepper Rasam',
          'Phulka',
          'Mixed Dal',
          'Vathal Kuzhambu',
          'Carrot Beans Poriyal',
          'Papad',
          'Curry Leaves Thovaiyal',
          'Gongura Pickle',
        ],
        dinner: [
          'Rice',
          'Pepper Rasam',
          'Chapathi',
          'Crispy Veg(no Potato)',
          'Navaratan Korma',
          'Masala Papad',
          'Lemon Pickle',
          'Butter Milk',
          'Seasonal Fruit',
        ],
      },
      friday: {
        breakfast: [
          'Poori',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Aloo Masala',
          'Boiled Chana Sprouts',
          'Mango Jam',
          'Omlet',
        ],
        lunch: [
          'Rice',
          'Tomato Rasam',
          'Chapathi',
          'Palak Paneer',
          'Sambar',
          'Bhindi Dry',
          'Fryums',
          'Gongura Thoviyal',
          'Lemon Pickle',
        ],
        dinner: [
          'Rice',
          'Tomato Rasam',
          'Kerala Parota',
          'Onion Chutney',
          'Carrot Poriyal',
          'Papad',
          'Lemon Pickle',
          'Lemon Juice',
          'Water Melon',
        ],
      },
      saturday: {
        breakfast: [
          'Kal Dosa',
          'Tea, Coffee, Milk',
          'Cornflakes',
          'Bread & Butter',

          'Pudhina Chutney',
          'Vada Curry',
          'Boiled Moong Sprout',
          'Mango Jam',
          'Boiled Egg',
        ],
        lunch: [
          'Rice',
          'Lemon Rasam',
          'Phulka',
          'Tomato Dal',
          'Sambar',
          'Beans & Aloo Poriyal',
          'Masala Papad',
          'Curry Leaves Thovaiyal',
          'Mix Veg Pickel',
        ],
        dinner: [
          'Sambar Rice',
          'Coconut Rice',
          'Curd Rice',
          'Potato Chips',
          'Pickle',
          'Boost',
          'Banana',
        ],
      },
    },
  },
  northmess: {},
};

// sunday: {breakfast: [''], lunch: [], dinner: []},
// monday: {breakfast: [''], lunch: [], dinner: []},
// tuesday: {breakfast: [], lunch: [], dinner: []},
// wednesday: {breakfast: [], lunch: [], dinner: []},
// thursday: {breakfast: [], lunch: [], dinner: []},
// friday: {breakfast: [], lunch: [], dinner: []},
// saturday: {breakfast: [], lunch: [], dinner: []},
export default menu;