let MemberData;
let color;
function fetchMembersData() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      MemberData = data;
      for (let i = 0; i < MemberData.length; i++) {
        addMemberStatus(MemberData[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function addMemberStatus(data, i) {
  switch (data.status) {
    case "Active":
      color = "green";
      break;
    case "Expired":
      color = "red";
      break;
    default:
      color = "green";
  }
  var newRow =
    `<tbody>
                    <tr>
                      <td><div class="text-center">` +
    (i + 1) +
    `</div></td>
                      <td><div class="text-center">` +
    data.fullname +
    `</div></td>
                      <td><div class="text-center">` +
    data.contact +
    `</div></td>
                      <td><div class="text-center">` +
    data.services +
    `</div></td>
                      <td><div class="text-center">` +
    data.plan +
    ` Month/s</div></td>
                      <td>
                        <div class="text-center">
                          <i class="fas fa-circle" style="color: ` +
    color +
    `"></i>
                          ` +
    data.status +
    `
                        </div>
                      </td>
                    </tr>
                  </tbody>`;

  $(".table").append(newRow);
}

fetchMembersData();
