window.onload = () => {
  var list = document.getElementsByClassName("nav-link");
  for (let item of list) {
      item.onclick = function(event) {
        console.log(event);
        for (let insideItem of list) {
          insideItem.setAttribute("class", "nav-link");
          document.getElementById("bioContainer").style.display = "none";
          document.getElementById("projectsContainer").style.display = "none";
        }
        item.setAttribute("class","nav-link active")
        console.log(item.name);
        if(item.name === "bio") {
          document.getElementById("bioContainer").style.display = "block";
        }
        if(item.name === "projects"){
          document.getElementById("projectsContainer").style.display = "block";
        }
      }
  }

  var projectsList = document.getElementsByClassName("list-group-item");
  for (let item of projectsList) {
    item.onclick = function(event) {
      console.log(event);
      for (let insideItem of projectsList) {
        insideItem.setAttribute("class", "list-group-item");
        document.getElementById("pacmen-info").style.display = "none";
        document.getElementById("eye-exercise-info").style.display = "none";
        document.getElementById("bus-tracking-info").style.display = "none";
        document.getElementById("circles-in-motion-info").style.display = "none";
        document.getElementById("dnd5-bestiary-info").style.display = "none";
        document.getElementById("troika-pdf-info").style.display = "none";
      }
      item.setAttribute("class","list-group-item active")
      let name = item.getAttribute("name");
      switch (name) {
        case "pacmen":
          document.getElementById("pacmen-info").style.display = "block";
          break;
        case "eye-excersice":
          document.getElementById("eye-exercise-info").style.display = "block";
          break;
        case "bus-tracking":
          document.getElementById("bus-tracking-info").style.display = "block";
          break;
        case "circles-in-motion":
          document.getElementById("circles-in-motion-info").style.display = "block";
          break;
        case "dnd5-bestiary":
          document.getElementById("dnd5-bestiary-info").style.display = "block";
          break;
        case "troika-pdf-generator":
          document.getElementById("troika-pdf-info").style.display = "block";
          break;
      }
    }
  }
}
