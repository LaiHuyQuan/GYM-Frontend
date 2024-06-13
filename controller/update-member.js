let MemberData;

function fetchMembersData() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      MemberData = data;
      for (let i = 0; i < MemberData.length; i++) {
        addMemberEdit(MemberData[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function addMemberEdit(data, i) {
  var newRow =
    `<tbody data-id= "` +
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
    data.username +
    `</div></td>
  <td><div class="text-center">` +
    data.gender +
    `</div></td>
  <td><div class="text-center">` +
    data.contact +
    `</div></td>
  <td><div class="text-center">` +
    data.dor +
    `</div></td>
  <td><div class="text-center">` +
    data.address +
    `</div></td>
  <td><div class="text-center">$` +
    data.amount +
    `</div></td>
  <td><div class="text-center">` +
    data.services +
    `</div></td>
  <td><div class="text-center">` +
    data.plan +
    ` Month/s</div></td>
                      <td>
                        <div class="edit-btn text-center">
                            <i class="fas fa-edit"></i> Edit</a
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>`;
  $(".table").append(newRow);

  $(".container-fluid").on("click", ".edit-btn", function (e) {
    e.preventDefault();
    currentUserId = $(this).parent().parent().parent().data("id");
    redirectTo("edit-memberform.html", "user_id", currentUserId);
  });
}

fetchMembersData();
