var money = 0,
    percentage, persons = 1,
    tip = 0;

document.getElementById("money").addEventListener("keyup", function() {
    money = document.getElementById("money").value;
    if (!(money > 0 || money < 0)) {
        alert("please press number");
    }
});

document.getElementById("percentage").addEventListener("click", function() {
    percentage = document.getElementById("percentage").value;
    console.log(percentage);
});

document.getElementById("persons").addEventListener("keyup", function() {
    persons = document.getElementById("persons").value || 1;
    if (persons < 2) {
        alert("The min people  is one");
    }
});

document.getElementById("Tinh_tien").addEventListener("click", function() {
    tip = (money * percentage) / (persons);
    document.getElementById("tien").innerHTML = "<i class=\"fas fa-dollar-sign\"></i>" + tip + "  each";
});