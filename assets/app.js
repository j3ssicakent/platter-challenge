document.querySelector(".show-more").addEventListener("click", function () {
    let children = document.querySelector(".products").children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.display = "block";
    }
    document.querySelector(".show-more").style.display = "none";
});