
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
  };

  // In biến formData ra console
  console.log(formData);


});
