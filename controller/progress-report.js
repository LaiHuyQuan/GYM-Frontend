let MemberData;

function fetchMembersData() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      MemberData = data;
      for (let i = 0; i < MemberData.length; i++) {
        addMemberReport(MemberData[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function addMemberReport(data, i) {
  var newRow =
    `<tbody data-id = "` +
    data.user_id +
    `">
                    <tr>
                      <td><div class="text-center">` +
    (i + 1) +
    `</div></td>
                      <td><div class="text-center">` +
    data.fullname +
    `</div></td>
                      <td><div class="text-center">` +
    data.services +
    `</div></td>
                      <td>
                        <div class="text-center edit">
                          <a
                            ><i class="fas fa-file"></i> View Progress Report</a
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>`;
  $(".table").append(newRow);
}

$(".container-fluid").on("click", ".edit", function (e) {
  e.preventDefault();
  currentEId = $(this).parent().parent().parent().data("id");
  console.log(currentEId);
  redirectTo("view-progress-report.html", "user_id", currentEId);
});

fetchMembersData();
