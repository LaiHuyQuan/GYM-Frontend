function addMemberRemove() {
  var newRow = `<tbody>
                    <tr>
                      <td><div class="text-center">1</div></td>
                      <td><div class="text-center">Harry Denn</div></td>
                      <td><div class="text-center">@harry</div></td>
                      <td><div class="text-center">8545878545</div></td>
                      <td><div class="text-center">2019-12-25</div></td>
                      <td><div class="text-center">64 Mulberry Lane</div></td>
                      <td><div class="text-center">$165</div></td>
                      <td><div class="text-center">Fitness</div></td>
                      <td><div class="text-center">3 Month/s</div></td>
                      <td>
                        <div class="text-center">
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

 $(".table").on("click", ".")

addMemberRemove();
