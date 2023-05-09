var selectedRow = null






function onFormSubmit() {
    if (validate()) {
        const formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
// Readmate   code
function readFormData() {
    const formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["mail"] = document.getElementById("mail").value;
    formData["password"] = document.getElementById("password").value;
    return formData;
}

function insertNewRecord(data) {
    const table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    const  newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.mail;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.password;
    cell4 = newRow.insertCell(3);
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

// reset mate code 
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("password").value = "";
    selectedRow = null;
}


// Delete Mate Code 
function onDelete(td) {
    if (confirm('Are you sure ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

// form data show Krawa mate na conditon 
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValid").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValid").classList.contains("hide"))
            document.getElementById("fullNameValid").classList.add("hide");
    }
    return isValid;
}