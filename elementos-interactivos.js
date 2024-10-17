document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalBtn = document.getElementById('modal-btn');
    const closeBtn = document.getElementsByClassName('close')[0];

    modalBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
