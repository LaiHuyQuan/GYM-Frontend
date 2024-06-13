let EquipmentData;

function fetchEquipmentData() {
  fetch("http://localhost:3000/equipment")
    .then((response) => response.json())
    .then((data) => {
      EquipmentData = data;
      for (let i = 0; i < EquipmentData.length; i++) {
        addEquipmentRemove(EquipmentData[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function deleteEquipment(id) {
  fetch(`http://localhost:3000/equipment/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(1);
    })
    .catch((error) => console.error("Error:", error));
}

function addEquipmentRemove(data, i) {
  var newRow =
    `<tbody data-eid= "` +
    data.equipmentId +
    `">
                    <tr>
                      <td><div class="text-center">` +
    (i + 1) +
    `</div></td>
                      <td><div class="text-center">` +
    data.name +
    `</div></td>
                      <td><div class="text-center">` +
    data.description +
    `</div></td>
                      <td><div class="text-center">` +
    data.quantity +
    `</div></td>
                      <td><div class="text-center">$` +
    data.amount +
    `</div></td>
                      <td><div class="text-center">` +
    data.vendor +
    `</div></td>
                     
                      <td><div class="text-center">` +
    data.contact +
    `</div></td>
                      <td><div class="text-center">` +
    data.dateOfImport +
    `</div></td>
    <td>
                        <div class="text-center remove-btn">
                          <a
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
  var removeid = $(this).parent().parent().parent().data("eid");
  deleteEquipment(removeid);
  console.log(removeid);
});

fetchEquipmentData();
