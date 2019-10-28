var button=document.querySelector(".search-open-button");
var search_container = document.querySelector(".search-container");
var is_open = true;

button.addEventListener("click", function(evt){
  evt.preventDefault();
  if (is_open){
    search_container.classList.remove("search-form-show");
    search_container.classList.add("search-form-hide");
  }
  else{
    search_container.classList.remove("search-form-hide");
    search_container.classList.add("search-form-show");
  }
  is_open = !is_open;

})
