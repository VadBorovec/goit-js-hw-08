const toTopButton = document.querySelector('.to-top-btn');

window.addEventListener('scroll', function () {
  // Show the button when the user scrolls down 50px from the top of the document
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
});

// Scroll back to the top of the document when the button is clicked
toTopButton.addEventListener('click', () => {
  document.body.scrollTo({
    top: 0,
    behavior: 'smooth',
  }); // For Safari
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  }); // For Chrome, Firefox, IE and Opera
});
