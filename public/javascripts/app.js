
// Sub-nav open
document.querySelector('.inner-item').addEventListener('mouseenter', function () {
  document.querySelector('.drop-menu--inner').style.display = "block";
});

// Sub-nav collapse
document.querySelector('.drop-menu').addEventListener('mouseleave', function(){
  document.querySelector('.drop-menu--inner').style.display = "none";
})

