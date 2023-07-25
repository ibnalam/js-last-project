let input = document.querySelector(".input");
let post = document.querySelector(".post");
let allPost = document.querySelector(".allPost");
let nopost = document.querySelector(".nopost");
let update = document.querySelector(".update");
let total = document.querySelector(".total");
let search = document.querySelector(".search");
let searInpt  = document.querySelector(".searInpt");


let arr = [];

let updateIndex;
let score = 0;



search.addEventListener("click", ()=> {
 
  allPost.innerHTML = ""
  arr.map(item => {
    let text = ""
    for(let i=0; i<searInpt.value.length; i++){
      text += item.input.split("")[i]
      console.log(text)
    }
    if(text == searInpt.value){
      allPost.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" data-text="">${item.input}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="btn btn-primary editBtn">Edit</button>
          <button class="btn btn-danger deleteBtn">Delet</button>
        </div>
      </div>`
    }
  })

  searInpt.value = ""
})





post.addEventListener("click", ()=>{
  allPost.innerHTML = ""
  arr.push({
    input: input.value
  })

  input.value = ""
  score++

  display();

  if(arr.length == 0){
    nopost.innerHTML = "No Post"
  }else{
    nopost.innerHTML = " "
  }
  
});

update.addEventListener("click", ()=>{
  allPost.innerHTML = ""
  arr[updateIndex] = {
    input: input.value
  }
  post.style.display = "inline-block";
  update.style.display = "none";

  display()

  input.value = ""
})


function display() {

  
  arr.map((item)=>{

    allPost.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title" data-text="${item.input}"></h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button class="btn btn-primary editBtn">${isNaN(item.input) ? "Edit" : "play"}</button>
      <button class="btn btn-danger deleteBtn">Delet</button>
    </div>
    </div>`
    
    let typeText = document.querySelectorAll(".card-title");
    let typeArr = Array.from(typeText);

    typeArr.map(item => {
      let count = 0;

      function typeJs(){
        item.innerHTML += item.dataset.text.charAt(count);
        count++

        if(count == item.dataset.text.length + 1) {
          item.innerHTML = "";
          count = 0;
        }
      }

      let stop = setInterval(()=>{
        typeJs()
      }, 500);

    })

  let card = document.querySelectorAll(".play");
  let carArr = Array.from(card);

  if(isNaN(item.input)){
    carArr.map((item) =>{
      item.style.backgroundColor = "blue";
      item.style.color = "white";
    })
  }

  });


  let editBtn = document.querySelectorAll(".editBtn");
  ediArray = Array.from(editBtn);

  ediArray.map((item, index) => {
    item.addEventListener("click",()=>{
      updateIndex = index;
      if(item.innerHTML == "play"){
        console.log("Game is End");
      }
      input.value = arr[index].input;
      post.style.display = "none";
      update.style.display = "inline-block";
    })
  })
  
  let deletBtn = document.querySelectorAll(".deleteBtn");
  let delArr = Array.from(deletBtn);

  delArr.map((item, index) =>{
    item.addEventListener("click", function(){
      allPost.innerHTML = "";
      arr.splice(index,1)
      score--
      display()

      if(arr.length == 0) {
        nopost.innerHTML = "No Post";
      }else {
        nopost.innerHTML = "";
      }
    })
  })

  total.innerHTML = `Total Post = ${score}`;

}