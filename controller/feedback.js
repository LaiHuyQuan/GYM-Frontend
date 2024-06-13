let FeedbackData;

function loadFeedback() {
  fetch("http://localhost:3000/feedback")
    .then((response) => response.json())
    .then((data) => {
      FeedbackData = data;
      for (let i = 0; i < data.length; i++) {
        addFeedbackDetail(data[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function deleteFeedback(id) {
  fetch(`http://localhost:3000/feedback/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(1);
    })
    .catch((error) => console.error("Error:", error));
}

function addFeedbackDetail(data, i) {
  var newRow =
    `<tbody data-id="` +
    data.feedbackId +
    `">
                    <tr>
                      <td><div class="text-center">` +
    (i + 1) +
    `</div></td>
                      <td><div class="text-center">` +
    data.date.split("T")[0] +
    `</div></td>
                      <td><div class="text-center">` +
    data.feedback +
    `</div></td>
                      <td>
                        <div class="text-center remove-btn">
                          <a style="color: #f66"
                            ><i class="fas fa-trash"></i> Remove</a
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>`;
  $(".table").append(newRow);
}

$(".container-fluid").on("click", ".remove-btn", function (e) {
  e.preventDefault();
  var removeid = $(this).parent().parent().parent().data("id");
  console.log(removeid);
  deleteFeedback(removeid);
  location.reload();
});

loadFeedback();
