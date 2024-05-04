function purchase() {
    var days = prompt("Enter the number of days until expiration:");
    
    if (days !== null && !isNaN(days)) {
        var currentDate = new Date();
        var expirationDate = new Date();
        expirationDate.setDate(currentDate.getDate() + parseInt(days));

        alert("Item purchased! Expiration date: " + expirationDate.toDateString());
        
    } else {
        alert("Please enter a valid number of days.");
    }


}
