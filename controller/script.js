let currentEId;
let currentUserId;
let GymID;

function loadGYM() {
  fetch("http://localhost:3000/gym")
    .then((response) => response.json())
    .then((data) => {
      GymID = data[0].gymId;
    })
    .catch((error) => console.error("Error:", error));
}

function loadMembersNum() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      $(".label.label-important").text(data.length);
      console.log(data.length);
    })
    .catch((error) => console.error("Error:", error));
}

function loadEquipmentsNum() {
  fetch("http://localhost:3000/equipment")
    .then((response) => response.json())
    .then((data) => {
      $(".label.label-important").text(data.length);
      console.log(data.length);
    })
    .catch((error) => console.error("Error:", error));
}

function redirectTo(url, paramName, paramValue) {
  const separator = url.includes("?") ? "&" : "?";
  const newUrl = `${url}${separator}${paramName}=${encodeURIComponent(
    paramValue
  )}`;
  window.location.href = newUrl;
}

loadGYM();
loadMembersNum();
loadEquipmentsNum();
