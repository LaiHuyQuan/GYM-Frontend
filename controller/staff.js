let StaffData;

function loadStaffData() {
  fetch("http://localhost:3000/staff")
    .then((response) => response.json())
    .then((data) => {
      StaffData = data;
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        addStaffDetail(data[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function removeStaff(id) {
  fetch(`http://localhost:3000/staff/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(1);
    })
    .catch((error) => console.error("Error:", error));
}

function addStaffDetail(data, i) {
  var newRow =
    `<tbody data-sid= "` +
    data.staffId +
    `">
                    <tr class="">
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
    data.role +
    `</div></td>
                      <td><div class="text-center">` +
    data.email +
    `</div></td>
                      <td><div class="text-center">` +
    data.address +
    `</div></td>
                      <td><div class="text-center">` +
    data.contact +
    `</div></td>
                      <td>
                        <div class="text-center">
                          <a class = "edit"
                            ><i class="fas fa-edit" style="color: #28b779"></i>
                            Edit |</a
                          >
                          <a class = "remove" style="color: #f66"
                            ><i class="fas fa-trash"></i> Remove</a
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>`;
  $(".table").append(newRow);
}

$(".container-fluid").on("click", ".edit", function (e) {
  e.preventDefault();
  currentstaffId = $(this).parent().parent().parent().parent().data("sid");
  redirectTo("edit-staff-form.html", "staff_id", currentstaffId);
});

$(".container-fluid").on("click", ".remove", function (e) {
  e.preventDefault();
  var removeid = $(this).parent().parent().parent().parent().data("sid");
  removeStaff(removeid);
  location.reload();
});

loadStaffData();
