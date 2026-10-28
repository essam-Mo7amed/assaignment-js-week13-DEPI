const registrationForm = document.getElementById("registrationForm");
const registrationMessage = document.getElementById("registrationMessage");

registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const studentAge = document.getElementById("studentAge").value;
    const studentEmail = document.getElementById("studentEmail").value.trim();
    const studentTrack = document.getElementById("studentTrack").value;

    const subject1 = document.getElementById("subject1").value;
    const subject2 = document.getElementById("subject2").value;
    const subject3 = document.getElementById("subject3").value;

    registrationMessage.textContent = "";
    registrationMessage.className = "message";

    if (
        studentName === "" ||
        studentId === "" ||
        studentAge === "" ||
        studentEmail === "" ||
        studentTrack === "" ||
        subject1 === "" ||
        subject2 === "" ||
        subject3 === ""
    ) {
        showMessage("Please fill in all fields.", "error");
        return;
    }

    const age = Number(studentAge);
    const mark1 = Number(subject1);
    const mark2 = Number(subject2);
    const mark3 = Number(subject3);

    if (!Number.isFinite(age) || age < 16) {
        showMessage("Age must be at least 16 years.", "error");
        return;
    }

    if (
        !Number.isFinite(mark1) ||
        !Number.isFinite(mark2) ||
        !Number.isFinite(mark3) ||
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100
    ) {
        showMessage("Each subject mark must be between 0 and 100.", "error");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(studentEmail)) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }

    showMessage(
        `Welcome, ${studentName}! Your registration was successful. Your track is ${studentTrack}.`,
        "success"
    );

});

function showMessage(message, type) {

    registrationMessage.textContent = message;
    registrationMessage.className = `message ${type}`;

}