
// btn-slide
let btnSlide=document.querySelectorAll('.btn-slide');
let mood="close"
btnSlide.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        btn.classList.toggle('btn-slide-close')
        e.target.querySelector('.btn-point').classList.toggle('btn-point-close')
        if(mood==="close"){
            e.target.querySelector('.btn-point').innerHTML=`<span class="material-symbols-outlined">cancel</span>`
            mood="open"
        }
        else{
            e.target.querySelector('.btn-point').innerHTML=`<span class="material-symbols-outlined">check_circle</span>`
            mood="close"
        }
    })
})
// ====================== 
// in file page the bar
document.querySelector('.files .icon-bar').addEventListener('click',()=>{
    document.querySelector('.files-continar .right').classList.toggle('right-show')
    console.log("mo")
})