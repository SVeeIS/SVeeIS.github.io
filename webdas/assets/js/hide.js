var coll = document.getElementsByClassName("tampil");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var hide = this.nextElementSibling;
        if (hide.style.maxHeight) {
            hide.style.maxHeight = null;
        } else {
            hide.style.maxHeight = hide.scrollHeight + "px";
        }
    });
}