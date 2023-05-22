function Smart_menu() {
    var x = document.getElementById("menu1");
    if (x.className === "menu") {
      x.className += "responsive";
    } else {
      x.className = "menu";
    }
  }