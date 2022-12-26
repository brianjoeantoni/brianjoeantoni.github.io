const toggleBtn = document.querySelector("#toggleBtn");
const divList = document.querySelector(".work-list-2");
var flag = 1;

toggleBtn.addEventListener("click", () => {
    if(flag === 1){
        divList.style.display = "grid";
        flag = 0;
        toggleBtn.innerHTML = "Show Less"
    }else{
        divList.style.display = "none";
        flag = 1;
        toggleBtn.innerHTML = "Show More"
    }
});

// document.body.innerHTML = '<h1>test</h1>'