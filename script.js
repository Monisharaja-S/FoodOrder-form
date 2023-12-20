function submitForm() {

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = getSelectedGender();
    const food = getSelectedFood();
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

 
    const tableBody = document.getElementById('dataTableBody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${address}</td>
                        <td>${pincode}</td>
                        <td>${gender}</td>
                        <td>${food.join(',')}</td>
                        <td>${state}</td>
                        <td>${country}</td>`;


    document.getElementById('myForm').reset();
}

function getSelectedGender() {
    const genderRadio = document.querySelectorAll('input[type="radio"]:checked');
    const selectedGender = Array.from(genderRadio).map(checkbox => checkbox.value);
    return selectedGender;
}

function getSelectedFood() {
    const foodCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedFood = Array.from(foodCheckboxes).map(checkbox => checkbox.value);
    return selectedFood;
}


