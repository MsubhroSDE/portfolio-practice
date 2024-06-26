console.log("Subhro Mukherjee Portfolio");

// Blogs Filter Starts
function handleBlogFilterClick(filterValue) {
  //   console.log("handleBlogFilterClick", filterValue);

  const allBlogList = document.getElementsByClassName("blog_card");

  for (let i = 0; i < allBlogList.length; i++) {
    const blogPost = allBlogList[i];

    if (filterValue === "all" || blogPost.classList.contains(filterValue)) {
      blogPost.style.display = "block";
    } else {
      blogPost.style.display = "none";
    }
  }
}
// Blogs Filter Ends

// Testimonial Swiper Code Starts
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Testimonial Swiper Code Ends
