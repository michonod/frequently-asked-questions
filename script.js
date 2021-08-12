const buttons = document.querySelectorAll(".btn-toggle");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const answer =
      e.currentTarget.previousElementSibling.parentElement.nextElementSibling;
    answer.classList.toggle("active");
  });
});
