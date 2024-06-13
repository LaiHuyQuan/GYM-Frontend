function addPaymentDetail() {
  var newRow = `<tbody data-id="12342">
                    <tr>
                      <td><div class="text-center">18</div></td>
                      <td><div class="text-center">12314</div></td>
                      <td><div class="text-center">0000-00-00</div></td>

                      <td><div class="text-center">$0</div></td>
                      <td><div class="text-center">Sauna</div></td>
                      <td><div class="text-center">180 Month/s</div></td>
                      <td>
                        <div class="text-center add-btn">
                          <a
                            ><button class="btn btn-success">
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

addPaymentDetail();
