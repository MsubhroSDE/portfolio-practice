console.log("Hello World from Subhro Mukherjee !");

// Blog Section : Filter Blogs Starts

const handleBlogFilterClick = (filterValue) => {
  console.log("handleBlogFilterClick", filterValue);

  const blogCardList = document.getElementsByClassName("blog_card");

  for (let i = 0; i < blogCardList.length; i++) {
    const blogCard = blogCardList[i];

    if (filterValue === "all" || blogCard.classList.contains(filterValue)) {
      blogCard.style.display = "block";
    } else {
      blogCard.style.display = "none";
    }
  }
};
// Blog Section : Filter Blogs Ends
