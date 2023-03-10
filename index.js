let userNames = ["Kofi", "Ama", "Kwame", "Akosua"];

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
userNames.map(function (name) {
  // Add the names inside ul li to the DOM
  document.querySelector("ul").innerHTML += `<li>${name}</li>`;
});
users.map(function (user) {
  document.getElementById("users").innerHTML += `
  <div id="user">
    <div>
      <img height="100" width="100" src="${
        user.profilePic
      }" alt="profile picture" />
    </div>
    <div id="user-info">
      <h3>${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}</h3>
      <p>${user.age}</p>
      
      <button>Follow</button>
      <button>Message</button>
      
    </div>
    
  </div>`;
});

let people = ["Joy", "Kevin", "Munira", "Shasha"];
let peopleObjects = [
  {
    name: "Rama",
    address: "Kenya",
  },
  {
    name: "Kevin",
    address: "Rwanda",
  },
  {
    name: "Munira",
    address: "Ethiopia",
  },
  {
    name: "John",
    address: "Kenya",
  },
  {
    name: "Shasha",
    address: "Rwanda",
  },
  {
    name: "Joy",
    address: "Ethiopia",
  },
];

let peopleFromEthiopia = peopleObjects.filter(function (person) {
  return person.address.toLowerCase() == "ethiopia";
});

console.log("People from Ethiopia", peopleFromEthiopia);

peopleObjects
  .filter((person) => person.address.toLowerCase() == "kenya")
  .map((person) => {
    document.getElementById("people").innerHTML += `
      <div>
        <h3>${person.name}</h3>
        <p>${person.address}</p>
      </div>
   `;
  });

// peopleObjects.map(function (person) {
//   document.getElementById("people").innerHTML += `
//     <div>
//       <h3>${person.name}</h3>
//       <p>${person.address}</p>
//     </div>
//   `;
// });

people.map(
  (person) =>
    (document.querySelector(
      "ol"
    ).innerHTML += `<li>Hello ${person}! See you soon!!!</li>`)
);
