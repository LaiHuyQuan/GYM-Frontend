const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");
let MemberData;
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
          changeFormWithMemberData(currentMemberData);
        }
      }
    })
    .catch((error) => console.error("Error:", error));
}

function changeFormWithMemberData(memberData) {
  $('input[name="fullname"]').val(memberData.fullname);
  $('input[name="username"]').val(memberData.username);
  $('select[name="gender"]').val(memberData.gender);
  $('input[name="dor"]').val(memberData.dor.substring(0, 10)); // Lấy ngày từ chuỗi datetime
  $('select[name="plan"]').val(memberData.plan);
  $('input[name="contact"]').val(memberData.contact);
  $('input[name="address"]').val(memberData.address);

  $('input[name="services"]').prop("checked", false); // Đặt tất cả radio button về false trước khi chọn lại
  var services = memberData.services.split(", "); // Tách các dịch vụ thành mảng
  services.forEach(function (service) {
    $('input[name="services"][value="' + service + '"]').prop("checked", true); // Chọn lại các radio button tương ứng
  });

  $('input[name="amount"]').val(memberData.amount);
}

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
    paid_date: currentMemberData.paid_date,
    p_year: "2024",
    status: "active",
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
      window.location.href = "members.html";
    })
    .catch((error) => console.error("Error:", error));
}

fetchMembersData();
