let EquipmentData;

function fetchMembersData() {
  fetch("http://localhost:3000/equipment")
    .then((response) => response.json())
    .then((data) => {
      EquipmentData = data;
      for (let i = 0; i < EquipmentData.length; i++) {
        addEquipmentDetail(EquipmentData[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function addEquipmentDetail(data, i) {
  var newRow =
    `<tbody>
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
                    </tr>
                  </tbody>`;

  $(".table").append(newRow);
}

fetchMembersData();
