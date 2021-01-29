const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const title = question.querySelector(".question-title");
    title.addEventListener("click", function () {
    questions.forEach(function (item) {
        if (item !== question) {
        item.classList.remove("show-text");
        }
    });
    question.classList.toggle("show-text");
    });
});



