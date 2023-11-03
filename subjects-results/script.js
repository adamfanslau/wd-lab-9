let app = document.getElementById("app");
let noOfSubjects;
let arrayOfResults = [];
const appIDs = {
    noOfSubjectsInput: "noOfSubjects",
    noOfSubjectsButton: "submitNoOfSubjects",
    marksSubmitButton: "marksButton"
}

function askForNumberOfSubjects () {
    let noOfSubjectsForm =
    `<h2>How many subjects did you take?</h2>
    <h3>(Please enter a number)<h3>
    <input type="number" id="${appIDs.noOfSubjectsInput}">
    <button id="${appIDs.noOfSubjectsButton}">SUBMIT</button>`;

    app.innerHTML = noOfSubjectsForm;
}

function askForMarksOnEachSubject () {
    let marksForm = `<h2>What marks did you get on each subject?</h2><h3>(Enter a number between 0 - 100)<h3>`;

    for (i = 0; i < noOfSubjects; i++) {
        marksForm += `<div><label for="mark${i + 1}">Subject #${i + 1}</label><input type="number" name="mark${i + 1}" id="mark${i + 1}"></div>`;
    }
    
    marksForm += `<div><button id="${appIDs.marksSubmitButton}">SUBMIT</button></div>`;

    app.innerHTML = marksForm;
}

function convertMarksToGrades (marks) {
    if (marks >= 90) {
        return `A`;
    } else if (marks >= 80) {
        return `B`;
    } else if (marks >= 70) {
        return `C`;
    } else if (marks >= 60) {
        return `D`;
    } else {
        return `F`;
    }
}

function displayMarksAndGrades () {
    for (i = 0; i < noOfSubjects; i++) {
        arrayOfResults.push(parseInt(document.getElementById(`mark${i + 1}`).value));
    }

    let tableOfResults = `<h2>Your results:</h2><table><tr><th>Subject</th><th>Marks</th><th>Grade</th></tr>`;
    for (i = 0; i < noOfSubjects; i++) {
        tableOfResults += `<tr><td>Subject #${i + 1}</td><td>${arrayOfResults[i]}</td><td>${convertMarksToGrades(arrayOfResults[i])}</td></tr>`;
    }
    tableOfResults += `</table>`;

    app.innerHTML = tableOfResults;
}

askForNumberOfSubjects();

let noOfSubjectsButton = document.getElementById(appIDs.noOfSubjectsButton);
noOfSubjectsButton.addEventListener("click", () => {
    noOfSubjects = parseInt(document.getElementById(appIDs.noOfSubjectsInput).value);
    console.log(noOfSubjects);
    askForMarksOnEachSubject();
    let marksButton = document.getElementById(appIDs.marksSubmitButton);
    marksButton.addEventListener("click", displayMarksAndGrades);
});
