// 1. AJAX

$(".submitBtn").on("click", function () {
  var valueToPost = $('.formEl').serialize()
  $.post("php/post.php", valueToPost, function () {
    userOutput()
  })
    .fail(function () {
      alert("error");
    })
});

function userOutput() {
  $.get("php/data.php", function (data) {
    let parsedData = JSON.parse(data);
    let latestAddedUser = parsedData[parsedData.length - 1];
    $(".contentWrapper").html(`
        <div class="displayResult container col-12 d-flex flex-wrap justify-content-center">
          Poštovani,<br>
          Vaša porudžbuna je uspešno poslata.
        </div>
      `);
  })
    .fail(function () {
      alert("error");
    })
}


const numInputs = document.querySelectorAll(".numInput");
numInputs.forEach(el => el.addEventListener("change", showWineInput));

function showWineInput(e) {
  if (e.target.value > 0) {
    e.target.nextElementSibling.style = "display:block";
    e.target.nextElementSibling.value = e.target.value;
    e.target.nextElementSibling.name = "wine3";
  }
}

// 2. FETCH

// $(".submitBtn").on("click", function () {
//   var valueToPost = $('.formEl').serialize()
  // fetch(
  //   'php/post.php',
  //   {
  //     method: 'post',
  //     body: valueToPost
  //   }
  // )
  //   .then(userOutput())
// });


// function userOutput() {
//   fetch('php/data.php')
//     .then(response => response.json())
//     .then(users => {
//       let latestAddedUser = users[users.length - 1];
//       $(".contentWrapper").html(`
//           <div class="displayResult container col-12 d-flex flex-wrap justify-content-center">
//             <h3 class="mb-5 col-12 d-flex justify-content-center text-center">Your messeage has been sent successfully!</h3>
//             <h4 class="mb-3 col-12 d-flex justify-content-center">Data submited:</h4>
//             <p class="col-12  d-flex justify-content-center">First name: ${latestAddedUser.first_name}</p>
//             <p class="col-12  d-flex justify-content-center">Last name${latestAddedUser.last_name}</p>
//             <p class="col-12  d-flex justify-content-center">Gender: ${latestAddedUser.gender}</p>
//             <p class="col-12  d-flex justify-content-center">Year of birth${latestAddedUser.birth_year}</p>
//             <p class="col-12  d-flex justify-content-center">Address: ${latestAddedUser.address}</p>
//             <p class="col-12  d-flex justify-content-center"> City: ${latestAddedUser.city}</p>
//           </div>
//         `);
//     })
// }
