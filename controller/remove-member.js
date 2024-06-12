let MemberData;

function fetchMembersData() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      MemberData = data;
      for (let i = 0; i < MemberData.length; i++) {
        addMemberRemove(MemberData[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function deleteMember(id) {
  fetch(`http://localhost:3000/members/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(1);
    })
    .catch((error) => console.error("Error:", error));
}

function addMemberRemove(data, i) {
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
    data.contact +
    `</div></td>
  <td><div class="text-center">` +
    data.dor +
    `</div></td>
  <td><div class="text-center">` +
    data.address +
    `</div></td>
  <td><div class="text-center">` +
    data.amount +
    `</div></td>
  <td><div class="text-center">$` +
    data.services +
    `</div></td>
  <td><div class="text-center">` +
    data.plan +
    ` Month/s</div></td>
                      <td>
                        <div class="remove-btn text-center">
                          <a
                            href=""
                            style="color: #f66"
                            ><i class="fas fa-trash"></i> Remove</a
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>`;
  $(".table").append(newRow);
}

$(".container-fluid").on("click", ".remove-btn", function (event) {
  event.preventDefault();
  $(this).parent().parent().parent().remove();
  var removeid = $(this).parent().parent().parent().data("id");
  deleteMember(removeid);
  console.log(removeid);
});

fetchMembersData();
