const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");
let MemberData;
let GymData;
let currentMemberData;

function fetchMembersData() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      MemberData = data;
      for (let i = 0; i < MemberData.length; i++) {
        if (MemberData[i].user_id == userId) {
          currentMemberData = MemberData[i];
          console.log(currentMemberData);
          changeContent(currentMemberData);
        }
      }
    })
    .catch((error) => console.error("Error:", error));
}

function fetchGymData() {
  fetch("http://localhost:3000/gym")
    .then((response) => response.json())
    .then((data) => {
      GymData = data;
      console.log(GymData);
    })
    .catch((error) => console.error("Error:", error));
}

function changeContent(data) {
  let amount;
  switch (data.services) {
    case "Fitness":
      amount = 55;
      break;
    case "Sauna":
      amount = 35;
      break;
    default:
      40;
  }
  // Thay đổi nội dung trong các thành phần HTML
  $(".username strong").text(data.fullname);
  $(".service strong").text(data.services);
  $(".amount input").val(amount);

  // Thay đổi giá trị của các input hidden
  $('input[name="fullname"]').val(data.fullname);
  $('input[name="services"]').val(data.services);
}

$(".container-fluid").on("click", ".submit", function (event) {
  event.preventDefault(); // Ngăn chặn form submit mặc định

  var formData = {
    fullname: currentMemberData.fullname,
    username: currentMemberData.username,
    password: currentMemberData.password,
    gender: currentMemberData.gender,
    dor: currentMemberData.dor,
    plan: currentMemberData.plan + $('select[name="plan"]').val(),
    contact: currentMemberData.contact,
    address: currentMemberData.address,
    services: currentMemberData.services,
    amount:
      currentMemberData.amount +
      (currentMemberData.plan + $('select[name="plan"]').val()) *
        $(".amount input").val(),
    paid_date: getCurrentDate(),
    p_year: "2024",
    status: $('select[name="status"]').val(),
    gymId: GymID,
  };
  console.log(formData);

  editMember(formData, userId);
});

function editMember(data, id) {
  fetch(`http://localhost:3000/members/${id}`, {
    method: "PATCH",
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
      window.location.href = "payment.html";
    })
    .catch((error) => console.error("Error:", error));
}

function getCurrentDate() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1; // Month is zero based, so we add 1
  var year = today.getFullYear();

  // Format the date as dd/mm/yyyy
  var formattedDate = year + "/" + month + "/" + day;

  return formattedDate;
}

// Sử dụng hàm để lấy ngày tháng năm hiện tại và định dạng lại chuỗi
var currentDate = getCurrentDate();
console.log("Ngày tháng năm hiện tại là: " + currentDate);

fetchMembersData();
fetchGymData();
