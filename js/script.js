// date now
const x = new Date();
document.getElementById("currentDate").innerHTML = x;

// submission
function genderFunction(gender) {
    document.getElementById("result").value = gender;
}

function submission() {
    var inpName = document.getElementById("name").value;
    document.getElementById("disName").innerHTML = inpName;
    document.getElementById("headName").innerHTML = inpName;
    var inpBirth = document.getElementById("birthdate").value;
    document.getElementById("disBirth").innerHTML = inpBirth;
    var inpGender = document.getElementById("result").value;
    document.getElementById("disGender").innerHTML = inpGender;
    var inpPesan = document.getElementById("pesan").value;
    document.getElementById("disPesan").innerHTML = inpPesan;
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
