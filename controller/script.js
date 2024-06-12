function fetchMembersData() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      $(".label.label-important").text(data.length);
    })
    .catch((error) => console.error("Error:", error));
}
