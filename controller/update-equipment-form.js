const urlParams = new URLSearchParams(window.location.search);
const eId = urlParams.get("equipment_id");
let EquipmentData;
let currentEquipmentData;

function fetchEquipmentData() {
  fetch("http://localhost:3000/equipment")
    .then((response) => response.json())
    .then((data) => {
      EquipmentData = data;
      for (let i = 0; i < EquipmentData.length; i++) {
        if (EquipmentData[i].equipmentId == eId) {
          currentEquipmentData = EquipmentData[i];
          console.log(currentEquipmentData);
          changeFormWithEquipmentData(currentEquipmentData);
        }
      }
    })
    .catch((error) => console.error("Error:", error));
}

function changeFormWithEquipmentData(data) {
  // Thiết lập giá trị cho các trường trong form
  $('input[name="name"]').val(data.name);
  $('input[name="description"]').val(data.description);
  $('input[name="date"]').val(data.dateOfImport.split("T")[0]); // Chỉ lấy phần ngày
  $('input[name="quantity"]').val(data.quantity);
  $('input[name="contact"]').val(data.contact);
  $('input[name="vendor"]').val(data.vendor);
  $('input[name="address"]').val(data.address);
  $('input[name="amount"]').val(data.amount);
}

$(".container-fluid").on("click", ".submit", function (event) {
  event.preventDefault(); // Ngăn chặn hành động submit mặc định
  console.log(1);

  // Lấy các giá trị từ form
  var formData = {
    name: $('input[name="ename"]').val(),
    description: $('input[name="description"]').val(),
    dateOfImport: $('input[name="date"]').val(),
    quantity: $('input[name="quantity"]').val(),
    vendor: $('input[name="vendor"]').val(),
    address: $('input[name="address"]').val(),
    contact: $('input[name="contact"]').val(),
    amount: $('input[name="amount"]').val(),
    gymId: GymID,
  };

  updateEquipment(formData, eId);
});

function updateEquipment(data, id) {
  fetch(`http://localhost:3000/equipment/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      window.location.href = "edit-equipment.html";
    })
    .catch((error) => console.error("Error:", error));
}

fetchEquipmentData();
