function handlesubmit(event) {
    event.preventDefault();

    console.log(searchFormElement);
    
}
let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handlesubmit)