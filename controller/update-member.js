function addMemberEdit() {
  var newRow = `<tbody data-id= "12312" >
                    <tr>
                      <td><div class="text-center">1</div></td>
                      <td><div class="text-center">Harry Denn</div></td>
                      <td><div class="text-center">@harry</div></td>
                      <td><div class="text-center">Male</div></td>
                      <td><div class="text-center">8545878545</div></td>
                      <td><div class="text-center">2019-12-25</div></td>
                      <td><div class="text-center">64 Mulberry Lane</div></td>
                      <td><div class="text-center">$165</div></td>
                      <td><div class="text-center">Fitness</div></td>
                      <td><div class="text-center">3 Month/s</div></td>
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
    window.location.href = "edit-memberform.html";
  });
}

addMemberEdit();
