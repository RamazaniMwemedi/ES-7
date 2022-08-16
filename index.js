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
  window.close();
}