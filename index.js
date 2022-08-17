let username;
let password;

const alertName = () => {
  alert("Ramazani Mwemedi");
  confirm("Is your name Ramazani");
};

const openNewTab = () => {
  window.open(
    "/login.html",
    "_blank",
    "width=500, height=500 , left=500, top=50"
  );
};

const closeTab = () => {
  console.log(form);
};

const usernameOnchage = (value) => {
  username = value;
};

const passwordOnchage = (value) => {
  password = value;
};

const onSubmit = (event) => {
  event.preventDefault();
  console.log(username, password)
};
