let mainButton = document.getElementById('mainButton');
let mainImage = document.getElementById('mainImage');
let cheeseName = document.getElementById('cheeseName');
let selectMenu = document.getElementById('themeDropDown');

mainButton.addEventListener('click', function(){
    
   
    
    
    fetch('https://cheese-api.onrender.com/random')

        
        .then(res => res.json())
        .then(result =>{

        
           //cheeseName.innerText = result[0].breeds[0].alt_names;
           cheeseName.innerText = result.name;
           cheeseName.setAttribute("href", result.image)
           mainImage.src = result.image;
           
        })
        .catch(err=>console.log(err))
    
})



