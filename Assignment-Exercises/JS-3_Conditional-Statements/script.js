function checkAge() {
    let category = ['Invalid age. Please enter a valid number.', 'Child','Teenager', 'Adult'];

    if (document.getElementById('ageInput').value <= -1) {
        alert(category[0])
    }
    else if (document.getElementById('ageInput').value <= 12) {
        alert(category[1]);
    }

    else if  (document.getElementById('ageInput').value <= 19) {
        alert(category[2]);
    }

    else if  (document.getElementById('ageInput').value >= 20) {
        alert(category[3]);
    }
}
