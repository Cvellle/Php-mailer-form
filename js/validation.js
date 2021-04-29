function validation() {
  const formElements = document.querySelectorAll(".validationCheck");
  const selectField = document.querySelector("#selectField");
  const submitBtn = document.querySelector(".submitBtn");
  const inputs = document.querySelectorAll("input");

  const makeSelectOptions = () => {
    let selectOptions = "";
    const date = new Date();
    const currentYear = date.getFullYear();

    for (var i = 1900; i <= currentYear; i++) {
      selectOptions += `<option value="${i}">${i}</option>`;
    }
    selectField.innerHTML += selectOptions;
  };

  const checkCondition = (e) => {
    let currentValue = e.target.value;
    e.stopPropagation();

    const addValid = () => {
      e.target.classList.add("is-valid");
      e.target.classList.remove("is-invalid");
    };

    const addInvalid = () => {
      e.target.classList.add("is-invalid");
      e.target.classList.remove("is-valid");
    };

    if (
      e.target.matches("#validationCustom01") ||
      e.target.matches("#validationCustom02") ||
      e.target.matches("#validationTextarea") ||
      e.target.matches("#validationCustom04")
    ) {
      const reg = e.target.dataset.condition;
      if (currentValue.match(reg)) {
        addValid();
      } else {
        addInvalid();
      }
    } else if (e.target.matches("#selectField")) {
      if (e.target.value !== "") {
        addValid();
      } else {
        addInvalid();
      }
    } else if (e.target.matches(".form-check-input")) {
      if (e.target.checked == true) {
        addValid();
      } else {
        addInvalid();
      }
    } else if (e.target.matches(".radio-input")) {
      if (e.target.checked == true) {
        addValid();
      } else {
        addInvalid();
      }
      const radiosDiv = e.target.parentNode.parentNode;
      radiosDiv.lastChild.previousElementSibling.previousElementSibling.classList.add(
        "is-valid"
      );
    } else {
      return;
    }

    let checkAllInputs = [...formElements].every((el) =>
      el.classList.contains("is-valid")
    );

    let checkBlank = [...inputs].some((el) =>
      el.value == " "
    );

    if (checkAllInputs && !checkBlank) {
      submitBtn.disabled = false;
    }

    checkAllInputs();
  };

  makeSelectOptions();
  window.addEventListener("blur", checkCondition);
  window.addEventListener("change", checkCondition);
  window.addEventListener("keyup", checkCondition);
}

window.addEventListener("load", validation);
