let EquipmentData;

function fetchEquipmentData() {
  fetch("http://localhost:3000/equipment")
    .then((response) => response.json())
    .then((data) => {
      EquipmentData = data;
      for (let i = 0; i < EquipmentData.length; i++) {
        addEquipmentUpdate(EquipmentData[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function updateEquipment(id) {
  fetch(`http://localhost:3000/equipment/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(1);
    })
    .catch((error) => console.error("Error:", error));
}

function addEquipmentUpdate(data, i) {
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
    data.address +
    `</div></td>     
                      <td><div class="text-center">` +
    data.contact +
    `</div></td>
                      <td><div class="text-center">` +
    data.dateOfImport +
    `</div></td>
    <td>
                        <div class="text-center edit-btn">
                            <i class="fas fa-edit"></i> Edit
                        </div>
                      </td>
                    </tr>
                  </tbody>`;

  $(".table").append(newRow);
}


$(".container-fluid").on("click", ".edit-btn", function (e) {
  e.preventDefault();
  currentEId = $(this).parent().parent().parent().data("eid");
  console.log(currentEId);
  redirectTo("edit-equipmentform.html", "equipment_id", currentEId);
});

fetchEquipmentData();
