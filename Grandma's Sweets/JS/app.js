document.getElementById('cart-info').addEventListener
('click', function () {
    const cart = document.getElementById('cart');
    cart.classList.toggle('show-cart');
    console.log(cart);
})

// ********* nav fixed ************
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 76) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});