function filterFunction(colNumber) {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    if (colNumber === 4) {
        input = document.getElementById("startDateSearchInput");
    } else if (colNumber === 5) {
        input = document.getElementById("endDateSearchInput");
    };
    filter = input.value.toUpperCase();
    table = document.getElementById("outputTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[colNumber];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }