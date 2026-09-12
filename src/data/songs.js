const songs = [
  {
    id: 1,
    title: "Winning Speech",
    artist: "Karan Aujla",
    image: "https://picsum.photos/300/300?random=1",
  },
  {
    id: 2,
    title: "Tauba Tauba",
    artist: "Karan Aujla",
    image: "https://picsum.photos/300/300?random=2",
  },
  {
    id: 3,
    title: "Softly",
    artist: "Karan Aujla",
    image: "https://picsum.photos/300/300?random=3",
  },
  {
    id: 4,
    title: "Admirin' You",
    artist: "Karan Aujla",
    image: "https://picsum.photos/300/300?random=4",
  },
  {
    id: 5,
    title: "52 Bars",
    artist: "Karan Aujla",
    image: "https://picsum.photos/300/300?random=5",
  },

  {
    id: 6,
    title: "295",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=6",
  },
  {
    id: 7,
    title: "So High",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=7",
  },
  {
    id: 8,
    title: "The Last Ride",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=8",
  },
  {
    id: 9,
    title: "Levels",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=9",
  },
  {
    id: 10,
    title: "Legend",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=10",
  },

  {
    id: 11,
    title: "Same Beef",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=11",
  },
  {
    id: 12,
    title: "Never Fold",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=12",
  },
  {
    id: 13,
    title: "Baller",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=13",
  },
  {
    id: 14,
    title: "Just Listen",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=14",
  },
  {
    id: 15,
    title: "East Side Flow",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=15",
  },

  {
    id: 16,
    title: "25-25",
    artist: "Arjan Dhillon",
    image: "https://picsum.photos/300/300?random=16",
  },
  {
    id: 17,
    title: "Munde Pindan De",
    artist: "Arjan Dhillon",
    image: "https://picsum.photos/300/300?random=17",
  },
  {
    id: 18,
    title: "My Thoughts",
    artist: "Arjan Dhillon",
    image: "https://picsum.photos/300/300?random=18",
  },
  {
    id: 19,
    title: "Back To Start",
    artist: "Arjan Dhillon",
    image: "https://picsum.photos/300/300?random=19",
  },
  {
    id: 20,
    title: "Future",
    artist: "Arjan Dhillon",
    image: "https://picsum.photos/300/300?random=20",
  },

  {
    id: 21,
    title: "Old Skool",
    artist: "Prem Dhillon",
    image: "https://picsum.photos/300/300?random=21",
  },
  {
    id: 22,
    title: "Majha Block",
    artist: "Prem Dhillon",
    image: "https://picsum.photos/300/300?random=22",
  },
  {
    id: 23,
    title: "Lost Love",
    artist: "Prem Dhillon",
    image: "https://picsum.photos/300/300?random=23",
  },
  {
    id: 24,
    title: "Boot Cut",
    artist: "Prem Dhillon",
    image: "https://picsum.photos/300/300?random=24",
  },
  {
    id: 25,
    title: "Aadmiyach",
    artist: "Prem Dhillon",
    image: "https://picsum.photos/300/300?random=25",
  },

  {
    id: 26,
    title: "Radio",
    artist: "Navaan Sandhu",
    image: "https://picsum.photos/300/300?random=26",
  },
  {
    id: 27,
    title: "Jatt Life",
    artist: "Navaan Sandhu",
    image: "https://picsum.photos/300/300?random=27",
  },
  {
    id: 28,
    title: "Drivery Anthem",
    artist: "Navaan Sandhu",
    image: "https://picsum.photos/300/300?random=28",
  },
  {
    id: 29,
    title: "Taare",
    artist: "Navaan Sandhu",
    image: "https://picsum.photos/300/300?random=29",
  },
  {
    id: 30,
    title: "Tere Karke",
    artist: "Navaan Sandhu",
    image: "https://picsum.photos/300/300?random=30",
  },

  {
    id: 31,
    title: "410",
    artist: "Cheema Y",
    image: "https://picsum.photos/300/300?random=31",
  },
  {
    id: 32,
    title: "California Love",
    artist: "Cheema Y",
    image: "https://picsum.photos/300/300?random=32",
  },
  {
    id: 33,
    title: "Bandana",
    artist: "Cheema Y",
    image: "https://picsum.photos/300/300?random=33",
  },
  {
    id: 34,
    title: "Hassdi",
    artist: "Cheema Y",
    image: "https://picsum.photos/300/300?random=34",
  },
  {
    id: 35,
    title: "Winning",
    artist: "Cheema Y",
    image: "https://picsum.photos/300/300?random=35",
  },

  {
    id: 36,
    title: "Still Here",
    artist: "SMG",
    image: "https://picsum.photos/300/300?random=36",
  },
  {
    id: 37,
    title: "No Cap",
    artist: "SMG",
    image: "https://picsum.photos/300/300?random=37",
  },
  {
    id: 38,
    title: "Game",
    artist: "SMG",
    image: "https://picsum.photos/300/300?random=38",
  },
  {
    id: 39,
    title: "Lifestyle",
    artist: "SMG",
    image: "https://picsum.photos/300/300?random=39",
  },
  {
    id: 40,
    title: "Never Back Down",
    artist: "SMG",
    image: "https://picsum.photos/300/300?random=40",
  },

  {
    id: 41,
    title: "Mexico",
    artist: "Karan Aujla",
    image: "https://picsum.photos/300/300?random=41",
  },
  {
    id: 42,
    title: "Players",
    artist: "Karan Aujla",
    image: "https://picsum.photos/300/300?random=42",
  },
  {
    id: 43,
    title: "Don't Look",
    artist: "Karan Aujla",
    image: "https://picsum.photos/300/300?random=43",
  },
  {
    id: 44,
    title: "So High",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=44",
  },
  {
    id: 45,
    title: "Legend",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=45",
  },
  {
    id: 46,
    title: "Levels",
    artist: "Sidhu Moose Wala",
    image: "https://picsum.photos/300/300?random=46",
  },
  {
    id: 47,
    title: "Future",
    artist: "Arjan Dhillon",
    image: "https://picsum.photos/300/300?random=47",
  },
  {
    id: 48,
    title: "Old Skool",
    artist: "Prem Dhillon",
    image: "https://picsum.photos/300/300?random=48",
  },
  {
    id: 49,
    title: "Radio",
    artist: "Navaan Sandhu",
    image: "https://picsum.photos/300/300?random=49",
  },
  {
    id: 50,
    title: "California Love",
    artist: "Cheema Y",
    image: "https://picsum.photos/300/300?random=50",
  },
];

export default songs;