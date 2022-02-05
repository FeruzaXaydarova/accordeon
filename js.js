const contents = document.querySelectorAll('[data-name="accordeon-title"]');

contents.forEach((item) => {
    console.log(item);
    item.addEventListener("click", showContent);   
})  

function showContent(){
    this.nextElementSibling.classList.toggle("hidden");
}
