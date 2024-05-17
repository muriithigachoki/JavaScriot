const availableFoods = [
  { id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234 },
  { id: "qwe2356dxh", name: "pizza", image: "🍕🍕", price: 400 },
  { id: "qwe2456yh", name: "meat", image: "🍖🍖", price: 500 },
  { id: "qwe2785yh", name: "chicken", image: "🍗🍗", price: 1200 },
];

let foods = availableFoods.filter((foodObj) => {
  return foodObj.price > 450;
});

let totalPrice = foods
  .map((food) => food.price)
  .reduce((Acc, price) => Acc + price);

console.log(`my total bill for items above 450 is: ${totalPrice}`);
// output
// my total bill for items above 450 is: 1700

const users = [
  {
    id: 1,
    name: "John",
    location: "New York",
    friends: [2, 3, 4],
    posts: [
      {
        content: "Great day at Central Park!",
        timestamp: "2024-05-10T12:00:00",
        likes: 15,
      },
      {
        content: "Loving the vibes in NYC!",
        timestamp: "2024-05-15T08:30:00",
        likes: 8,
      },
      {
        content: "Visited the Statue of Liberty today!",
        timestamp: "2024-05-05T17:45:00",
        likes: 20,
      },
    ],
  },
  {
    id: 2,
    name: "Alice",
    location: "San Francisco",
    friends: [1, 3],
    posts: [
      {
        content: "Hiking in the Bay Area!",
        timestamp: "2024-05-12T14:20:00",
        likes: 12,
      },
      {
        content: "Enjoying the sunny weather!",
        timestamp: "2024-05-14T11:10:00",
        likes: 6,
      },
    ],
  },
  {
    id: 3,
    name: "Emily",
    location: "Los Angeles",
    friends: [1, 2, 4],
    posts: [
      {
        content: "Beach day in LA!",
        timestamp: "2024-05-08T09:45:00",
        likes: 25,
      },
      {
        content: "Exploring Hollywood!",
        timestamp: "2024-05-16T16:55:00",
        likes: 5,
      },
    ],
  },
  {
    id: 4,
    name: "David",
    location: "Chicago",
    friends: [2],
    posts: [
      {
        content: "Deep dish pizza is the best!",
        timestamp: "2024-05-11T10:30:00",
        likes: 18,
      },
      {
        content: "Trying out a new jazz club tonight!",
        timestamp: "2024-05-13T20:00:00",
        likes: 3,
      },
    ],
  },
  {
    id: 5,
    name: "Sarah",
    location: "Seattle",
    friends: [3, 1],
    posts: [
      {
        content: "Coffee time in the Pacific Northwest!",
        timestamp: "2024-05-09T15:15:00",
        likes: 9,
      },
      {
        content: "Exploring the Olympic National Park!",
        timestamp: "2024-05-14T07:00:00",
        likes: 11,
      },
    ],
  },
];

function dashbord(users) {
  const activeUsers = [];
  const postsArrs = [];
  const likes = [];
  let totalLikes = 0;
  users.map((userArr) => {
    postsArrs.push(userArr.posts);
    userArr.posts.map((info) => {
      const today = new Date();
      const expdate = new Date(info.timestamp);
      const diffInDays = (today - expdate) / (24 * 60 * 60 * 1000);

      if (diffInDays < 7) {
        activeUsers.push(userArr.name);
      }
    });
  });

  const filterdUser = activeUsers.filter(
    (user, index) => activeUsers.indexOf(user) === index
  );

  console.log(`number of active users: ${filterdUser.length}`);
  // number of active users: 5

  console.log(`Active users are: ${filterdUser} `);

  // Active users are: John,Alice,Emily,David,Sarah

  console.log(`popular posts are:`);

  //   popular posts are:
  // {
  //   content: 'Great day at Central Park!',
  //   timestamp: '2024-05-10T12:00:00',
  //   likes: 15
  // }
  // {
  //   content: 'Visited the Statue of Liberty today!',
  //   timestamp: '2024-05-05T17:45:00',
  //   likes: 20
  // }
  // {
  //   content: 'Hiking in the Bay Area!',
  //   timestamp: '2024-05-12T14:20:00',
  //   likes: 12
  // }
  // {
  //   content: 'Beach day in LA!',
  //   timestamp: '2024-05-08T09:45:00',
  //   likes: 25
  // }
  // {
  //   content: 'Deep dish pizza is the best!',
  //   timestamp: '2024-05-11T10:30:00',
  //   likes: 18
  // }
  // {
  //   content: 'Exploring the Olympic National Park!',
  //   timestamp: '2024-05-14T07:00:00',
  //   likes: 11
  // }

  postsArrs.map((postsArr) => {
    postsArr.map((popularPosts) => {
      if (popularPosts.likes > 10) {
        likes.push(popularPosts.likes);
        console.log(popularPosts);
      }
    });
  });

  totalLikes = likes.reduce((prev, next) => prev + next);
  const averageLikesPerUser = totalLikes / users.length;
  console.log(`Average likes paractie users is: ${averageLikesPerUser}`);

  // Average likes paractie users is: 20.2
}

dashbord(users);
