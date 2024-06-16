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

  createEquipment(formData);
});

function createEquipment(data) {
  fetch(`http://localhost:3000/equipment`, {
    method: "POST",
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
      window.location.href = "equipment.html";
    })
    .catch((error) => console.error("Error:", error));
}
