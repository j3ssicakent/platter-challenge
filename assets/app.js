let productHeight = document.querySelector(".product-card").offsetHeight;
document.querySelector(".products").style.maxHeight = `${(productHeight+16)*4}px`;
document.querySelector(".show-more").addEventListener("click", function () {
    let children = document.querySelector(".products").children;
    for (let i = 4; i < children.length; i++) {
        children[i].style.height = `${productHeight}px`;
        children[i].style.opacity = "1";
    }
    document.querySelector(".show-more").style.display = "none";
    document.querySelector(".products").classList.add('open');
    document.querySelector(".products").style.maxHeight = `${productHeight*12}px`;
});
