let MemberData;

function fetchMembersData() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      MemberData = data;
      for (let i = 0; i < MemberData.length; i++) {
        addPaymentDetail(MemberData[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function addPaymentDetail(data, i) {
  var newRow =
    `<tbody data-id="` +
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
    data.paid_date.split("T")[0] +
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
                        <div class="text-center add-btn">
                          <a
                            ><button class="btn btn-success add-btn">
                              <i class="fas fa-dollar-sign"></i> Make Payment
                            </button></a
                          >
                        </div>
                      </td>
                      
                    </tr>
                  </tbody>`;
  $(".table").append(newRow);
}

$(".container-fluid").on("click", ".add-btn", function (e) {
  e.preventDefault();
  currentUserId = $(this).parent().parent().parent().data("id");
  console.log(currentUserId);
  redirectTo("user-payment.html", "user_id", currentUserId);
});

fetchMembersData();
