// Khi form được submit
$(".container-fluid").on("click", ".submit", function (event) {
  event.preventDefault(); // Ngăn chặn form submit mặc định

  var formData = {
    fullname: $('input[name="fullname"]').val(),
    username: $('input[name="username"]').val(),
    password: $('input[name="password"]').val(),
    gender: $('select[name="gender"]').val(),
    dor: $('input[name="dor"]').val(),
    plan: $('select[name="plan"]').val(),
    contact: $('input[name="contact"]').val(),
    address: $('input[name="address"]').val(),
    services: $('input[name="services"]:checked').val(),
    amount: $('input[name="amount"]').val(),
    paid_date: getCurrentDate(),
    p_year: "2024",
    status: "active",
    gymId: GymID,
  };

  createMember(formData);
});

function getCurrentDate() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
  var year = today.getFullYear();

  // Định dạng ngày tháng năm (ví dụ: DD/MM/YYYY)
  var formattedDate =
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day);

  return formattedDate;
}

function createMember(data) {
  fetch(`http://localhost:3000/members`, {
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
      window.location.href = "members.html";
    })
    .catch((error) => console.error("Error:", error));
}
