// import { events } from 'example-events.js';

function addData() { 
    // Get input values 
    let event = document.getElementById("eventInput").value; 
    let eventPlaceholder = document.getElementById("eventInput").placeholder; 
    let description = document.getElementById("descriptionInput").value; 
    let category = document.getElementById("categoryInput").value; 
    let startDate = document.getElementById("startDateInput").value; 
    let startDatePlaceholder = document.getElementById("startDateInput").placeholder; 
    let endDate = document.getElementById("endDateInput").value; 
    let link = document.getElementById("linkInput").value; 
    
    // Get the table and insert a new row at the end 
    let table = document.getElementById("outputTable"); 
    let newRow = table.insertRow(table.rows.length); 
    
    // Check if required data are filled
    var eventValid = isVariableValid(event, eventPlaceholder);
    var startdateValid = isVariableValid(startDate, startDatePlaceholder);

    // Insert data into cells of the new row 
    if ( eventValid !== false && startdateValid !== false ) {
        newRow.insertCell(0).innerHTML = '###'; 
        newRow.insertCell(1).innerHTML = event; 
        newRow.insertCell(2).innerHTML = description; 
        newRow.insertCell(3).innerHTML = category; 
        newRow.insertCell(4).innerHTML = startDate; 
        newRow.insertCell(5).innerHTML = endDate;
        if (link === '') {
            newRow.insertCell(6).innerHTML = '';
        } else {
            newRow.insertCell(6).innerHTML = '<p><a class="link" href="' + link + '">click</a></p>';
        };
        newRow.insertCell(7).innerHTML =
            '<button type="button" class="btn btn-outline-dark edit" onclick="editData(this)"><img src="/assets/icons/write-removebg-preview.png" alt="quotes" width="20" height="20" /></button>'+ 
            '<button type="button" class="btn btn-outline-dark delete" onclick="deleteData(this)"><img src="/assets/icons/trash-removebg-preview.png" alt="quotes" width="20" height="20" /></button>'; 

        // Clear input fields 
        clearInputs(); 
    }
} 

function editData(button) { 
            
    // Get the parent row of the clicked button 
    let row = button.parentNode.parentNode; 
    
    // Get the cells within the row 
    let eventCell = row.cells[1]; 
    let descriptionCell = row.cells[2]; 
    let categoryCell = row.cells[3]; 
    let startDateCell = row.cells[4]; 
    let endDateCell = row.cells[5];
    let linkCell = row.cells[6];
    
    // Prompt the user to enter updated values 
    let eventInput = 
        prompt("Enter the updated event:", 
        eventCell.innerHTML); 
    let descriptionInput = 
        prompt("Enter the updated description:", 
        descriptionCell.innerHTML); 
    let categoryInput = 
        prompt("Enter the updated category:", 
        categoryCell.innerHTML 
        ); 
    let startDateInput = 
        prompt("Enter the updated start date:", 
        startDateCell.innerHTML 
        ); 
    let endDateInput = 
        prompt("Enter the updated end date:", 
        endDateCell.innerHTML 
        ); 
    let linkInput = 
        prompt("Enter the link event:", 
        linkCell.innerHTML
        ); 
    
    // Update the cell contents with the new values 
    eventCell.innerHTML = eventInput; 
    descriptionCell.innerHTML = descriptionInput; 
    categoryCell.innerHTML = categoryInput; 
    startDateCell.innerHTML = startDateInput; 
    endDateCell.innerHTML = endDateInput; 
    linkCell.innerHTML = '<p><a class="link" href="' + linkInput + '">click</a></p>'; 
} 


function deleteData(button) { 
    
    // Get the parent row of the clicked button 
    let row = button.parentNode.parentNode; 

    // Remove the row from the table 
    row.parentNode.removeChild(row);
} 


function clearInputs() { 
    
    // Clear input fields 
    document.getElementById("eventInput").value = ""; 
    document.getElementById("descriptionInput").value = ""; 
    document.getElementById("categoryInput").value = ""; 
    document.getElementById("startDateInput").value = "";
    document.getElementById("endDateInput").value = ""; 
    document.getElementById("linkInput").value = ""; 
} 

function clearAllData() {
    location.reload();
}


function isVariableValid(validatedVariable, validatedVariablePlaceholder) {
    if (validatedVariable === '') {
        alert(validatedVariablePlaceholder + ' (field with star)');
        return false;
    } else {
        return validatedVariable;
    }
}