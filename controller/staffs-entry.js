$(".container-fluid").on("click", ".submit", function (event) {
  event.preventDefault(); // Ngăn chặn form submit ngay lập tức
  if ($(this).val() === "Submit") {
    console.log(1);
    const formData = {
      fullname: $("#fullname").val(),
      username: $("#username").val(),
      password: $("#password").val(),
      //   password2: $("#password2").val(),
      email: $("#email").val(),
      address: $("#address").val(),
      role: $("#designation").val(),
      gender: $("#gender").val(),
      contact: $("#contact").val(),
      gymId: GymID,
    };
    console.log(formData);
    addStaff(formData);
  }
});

function addStaff(data) {
  fetch(`http://localhost:3000/staff`, {
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
      window.location.href = "staffs.html";
    })
    .catch((error) => console.error("Error:", error));
}
