const urlParams = new URLSearchParams(window.location.search);
const staffId = urlParams.get("staff_id");
let StaffData;
let currentStaffData;

function fetchStaffData() {
  fetch("http://localhost:3000/staff")
    .then((response) => response.json())
    .then((data) => {
      StaffData = data;
      for (let i = 0; i < StaffData.length; i++) {
        if (StaffData[i].staffId == staffId) {
          currentStaffData = StaffData[i];
          console.log(currentStaffData);
          changeFormWithStaffData(currentStaffData);
        }
      }
    })
    .catch((error) => console.error("Error:", error));
}

function editStaffData(data, id) {
  fetch(`http://localhost:3000/staff/${id}`, {
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
      window.location.href = "staffs.html";
    })
    .catch((error) => console.error("Error:", error));
}

function changeFormWithStaffData(data) {
  $('input[name="fullname"]').val(data.fullname);
  $('input[name="username"]').val(data.username);
  $('input[name="password"]').val(data.password); // Nếu bạn muốn để input password bị disable, bạn có thể bỏ qua dòng này.
  $('input[name="gender"]').val(data.gender);
  $('input[name="contact"]').val(data.contact);
  $('input[name="address"]').val(data.address);
  $('select[name="designation"]').val(data.role);
}

$(".container-fluid").on("click", ".submit", function (e) {
  const formData = {
    fullname: $('input[name="fullname"]').val(),
    username: $('input[name="username"]').val(),
    password: $('input[name="password"]').val(),
    gender: $('input[name="gender"]').val(),
    contact: $('input[name="contact"]').val(),
    address: $('input[name="address"]').val(),
    role: $('select[name="designation"]').val(),
    email: currentStaffData.email,
    gymId: GymID,
  };

  console.log(formData);
  editStaffData(formData, staffId);
});

fetchStaffData();
