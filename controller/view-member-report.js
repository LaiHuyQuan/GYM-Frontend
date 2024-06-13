const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");
let MemberData;
let currentMemberData;

function fetchMembersData() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      MemberData = data;
      for (let i = 0; i < MemberData.length; i++) {
        if (MemberData[i].user_id == userId) {
          currentMemberData = MemberData[i];
          let newName = currentMemberData.fullname;
          $(".pull-left h4").html(
            "Member " +
              newName +
              ",<br /><br />Membership is currently Active! <br />"
          );
        }
      }
    })
    .catch((error) => console.error("Error:", error));
}

fetchMembersData();
