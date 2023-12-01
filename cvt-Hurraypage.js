let ruleBtn = document.querySelector('.btn-rule')
let ruleModal = document.querySelector('.rule-modal')
let ruleImg = document.querySelector('.rule-img')
ruleBtn.addEventListener('click', ()=>{
    ruleModal.style.display='flex';
    setTimeout(() => {
        ruleImg.style.transform='translateY(0)';
    }, 400);
})
let close = document.querySelector('.close');
close.addEventListener('click',()=>{
    ruleImg.style.transform="translateY(-200)";
    setTimeout(() => {
        ruleModal.style.display='none';
    }, 400);
})