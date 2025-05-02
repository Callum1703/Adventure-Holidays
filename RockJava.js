



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitButton").addEventListener("click",function() {
        document.getElementById("confirmationModal").style.display = "flex";
    });

    window.redirect = function() {
        window.location.href="http://127.0.0.1:5500/Index.html";
    
};

});