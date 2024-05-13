document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tags').addEventListener('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    });
});
