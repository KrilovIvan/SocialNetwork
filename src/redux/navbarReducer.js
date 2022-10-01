let initialState = {
  navButtons: [
    {
      name: "Profile",
      path: "/profile",
      image:
        "https://img.icons8.com/external-others-inmotus-design/344/external-User-vkontakte-others-inmotus-design-6.png",
    },
    {
      name: "Messages",
      path: "/dialogs",
      image:
        "https://img.icons8.com/external-others-inmotus-design/344/external-Mail-vkontakte-others-inmotus-design.png",
    },
    {
      name: "News",
      path: "/news",
      image:
        "https://img.icons8.com/external-others-inmotus-design/344/external-Info-vkontakte-others-inmotus-design-2.png",
    },
    {
      name: "Music",
      path: "/music",
      image:
        "https://img.icons8.com/external-others-inmotus-design/344/external-Headphones-vkontakte-others-inmotus-design-4.png",
    },
    {
      name: "Settings",
      path: "/settings",
      image:
        "https://img.icons8.com/external-others-inmotus-design/344/external-Settings-vkontakte-others-inmotus-design-3.png",
    },
    {
      name: "Find Users",
      path: "/findusers",
      image:
        "https://img.icons8.com/external-others-inmotus-design/344/external-Magnifier-vkontakte-others-inmotus-design-2.png",
    },
  ],
  friends: [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Azat" },
    { id: 3, name: "Vladimir" },
    { id: 4, name: "Lev" },
    { id: 5, name: "Alexander" },
  ],
};

const navbarReducer = (state = initialState, action) => {
  return state;
};

export default navbarReducer;
