let userNames = ["Kofi", "Ama", "Kwame", "Akosua", "Yaa", "Afua"];
let users = [
  {
    firstName: "Kofi",
    lastName: "Ama",
    profilePic:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
    age: 20,
  },
  {
    firstName: "John",
    lastName: "Doe",
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    age: 20,
  },
  {
    firstName: "Mary",
    lastName: "Smith",
    profilePic:
      "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408",
    age: 24,
  },
];
// Map
users.map(function (user) {
  document.getElementById("users").innerHTML += `
  <div id="user">
    <img height="100" width="100" src="${user.profilePic}" alt="profile picture" />
  </div>`;
});
