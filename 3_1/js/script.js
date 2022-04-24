
let date = document.getElementById("date");


function validateDate() { 
    var regDate =   /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if (regDate.test(date.value) == false) {
        document.getElementById("labelDate").style.display = 'block';
    } else { 
        document.getElementById("labelDate").style.display = 'none';
    }
}