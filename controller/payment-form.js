const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");
let MemberData;
let GymData;
let currentMemberData;

function fetchMembersData() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      MemberData = data;
      for (let i = 0; i < MemberData.length; i++) {
        if (MemberData[i].user_id == userId) {
          currentMemberData = MemberData[i];
          console.log(currentMemberData);
          changeFormWithMemberData(currentMemberData);
        }
      }
    })
    .catch((error) => console.error("Error:", error));
}

function fetchGymData() {
  fetch("http://localhost:3000/gym")
    .then((response) => response.json())
    .then((data) => {
      GymData = data;
      console.log(GymData);
    })
    .catch((error) => console.error("Error:", error));
}

fetchMembersData();
fetchGymData();
