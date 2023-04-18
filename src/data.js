const list = [
    {
      id: 1,
      title: "BATTLEGROUND PUBG MOBILE",
      description: "This game also available in Pc as well as android.",
      price: 1289,
      img: "https://wallpaperaccess.com/full/875246.jpg",
      amount: 1,
      review:4.5,
    },
    {
      id:2,
      title: "MARIO",
      description: "A new kind of Mario game that you can play with one hand.",
      price: 689,
      img: "data:image/jpeg;base64,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",
      amount: 1,
      review:4.2,
    },
    {
      id:3,
      title: "SUBWAY CLASH 2",
      description: "Subway Clash 2 is a 3D third-person shooter game with a soviet theme. Fight intense battles in a derelict subway using a variety of weapons and tactics.",
      price: 189,
      img: "https://images.crazygames.com/subway-clash-remastered/20210429120753/subway-clash-remastered-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&fit=crop",
      amount: 1,
      review:3.9,
    },
    {
      id: 4,
      title: "HIGHWAY RACER 2",
      description: "Highway Racer 2 is a racing game with smooth controls, thrilling gameplay, and challenging levels which make this game very addictive to play.",
      price: 369,
      img: "https://images.crazygames.com/games/highway-racer-2/cover-1678723517371.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&fit=crop",
      amount: 1,
      review:4.3,
    },
    {
      id: 5,
      title: "TEKKEN 7",
      description: "TEKKEN 7 represents the final chapter of the 20-year-long Mishima feud.",
      price: 1289,
      img: "data:image/jpeg;base64,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",
      amount: 1,
      review:4.7,
    },
    {
      id: 6,
      title: "GRAND THEFT AUTO V",
      description: "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective.",
      price: 3245,
      img: "https://rukminim1.flixcart.com/image/612/612/av-media/games/u/e/z/grand-theft-auto-v-original-imadxdjnmyf5yhyd.jpeg?q=70",
      amount: 1,
      review:4.6,
    },

    
  ];
  
  export default list;