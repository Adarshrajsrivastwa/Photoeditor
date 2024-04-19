let btn=document.querySelector(".btn");
let pic=document.querySelector(".pic");
let photo=document.querySelector(".gal");
let icons=document.querySelectorAll(".icons");
let icons1=document.querySelectorAll(".icons1");
let slider=document.querySelector(".slider");
let headingbar=document.querySelector(".headingbar")
let range=document.querySelector(".range");
let reset=document.querySelector(".reset")
let save=document.querySelector(".save");
let access=document.querySelector(".access");
let brightness=100;
let contrast=100;
let saturate=100;
let invert=0;
let blur=0;
let rotate=0;
let flip_X=1;
let flip_y=1;

slider.innerText=`${brightness}%`;

btn.addEventListener("click",() => pic.click());


pic.addEventListener("change" ,()=>{
    let file=photo.files
    photo.src=URL.createObjectURLgpt(file);
})


pic.addEventListener("change" ,()=>{
    let file=pic.files[0];
    photo.src=URL.createObjectURL(file);

    document.querySelector(".disable").classList.remove("disable");
})

icons.forEach((element)=>{
    element.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active")
        headingbar.innerText=element.id;

        if(element.id==="Brightness"){
            range.max="200"
           range.value=brightness;
           slider.innerText=`${brightness}%`
        }
         else if(element.id==="Contrast"){
            range.max="200";
            range.value=contrast;
        slider.innerText=`${contrast}%`;
        }
       
        else if(element.id==="Saturate"){
            range.max="200";
            range.value=saturate;
            slider.innerText=`${saturate}%`
        }

        else if(element.id==="Invert"){
            range.max="100";
            range.value=invert;
            slider.innerText=`${invert}%`
        }

        else if(element.id==="Blur"){
            range.max="100";
            range.value=blur;
            slider.innerText=`${blur}px`
        }

    });
});


range.addEventListener('input',()=>{
    let active_state=document.querySelector(".icon .active");

    if(active_state.id==="Brightness"){
    brightness=range.value;
    slider.innerText=`${brightness}%`
    }

    else if(active_state.id==="Contrast"){
    contrast=range.value;
    slider.innerText=`${contrast}%`
    }
    
    else if(active_state.id==="Saturate"){
    Saturated=range.value;
    slider.innerText=`${saturate}%`
    }
    
    else if(active_state.id==="Invert"){
    invert=range.value;
    slider.innerText=`${invert}%`
    }

    else if(active_state.id==="Blur"){
    blur=range.value;
    slider.innerText=`${blur}px`
    }

    photo.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`;
})


icons1.forEach((element) => {
    element.addEventListener("click",()=>{

    if(element.id==="Rotate_left")
    rotate-=90;

    else if(element.id==="Rotate_right")
    rotate+=90;
    
    else if(element.id==="flip_X")
    flip_X=flip_X===1?-1:1;

    else if(element.id==="flip_y")
    flip_y=flip_y===1?-1:1;

    photo.style.transform=`rotate(${rotate}deg) scale(${flip_X} ,${flip_y})`
})
})

reset.addEventListener("click",()=>{
brightness=100;
contrast=100;
saturate=100;
invert=0;
blur=0;
rotate=0;
 flip_X=1;
 flip_y=1;
 photo.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`;
 photo.style.transform=`rotate(${rotate}deg) scale(${flip_X} ,${flip_y})`
})

save.addEventListener("click",()=>{
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = photo.naturalWidth;
    canvas.height = photo.naturalHeight;
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(flip_X, flip_y);
    ctx.drawImage(
      photo,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();

})


