import defaultImg from "../assets/providers/default.png";

export const providersData = {
  ac: [
    {
      id: 1,
      name: "Ramesh AC Services",
      price: 499,
      jobs: 180,
      image: defaultImg,
      reviews: [
        { userId: 11, rating: 5 },
        { userId: 22, rating: 4 },
      ],
    },
    {
      id: 2,
      name: "CoolCare Experts",
      rating: 4.5,
      jobs: 140,
      price: 459,
      image: defaultImg,
    },
  ],

  plumber: [
    {
      id: 3,
      name: "QuickFix Plumbing",
      rating: 4.6,
      jobs: 210,
      price: 299,
      image: defaultImg,
    },
  ],
};
