let con = document.querySelectorAll('.con')
let computer = document.querySelectorAll('.computer')
let user = document.querySelector('.user')
let pc = document.querySelector('.pc')
let winmodal = document.querySelector('.win-modal')
let winner = document.querySelector('.winner')
let tiemodal = document.querySelector('.tie-modal')
let tieup = document.querySelector('.tie-up')
let play = document.querySelector('.play')
let replay = document.querySelector('.replay')
let random = Math.floor(Math.random()*3)
let triangle = document.querySelector('.triangle')
let yscore = JSON.parse(localStorage.getItem('yscore'))
let cscore = JSON.parse(localStorage.getItem('cscore'))
let yscoreElem = document.getElementById('YS')
let cscoreElem = document.getElementById('CS')
let ruleBtn = document.querySelector('.btn-rule')
let ruleModal = document.querySelector('.rule-modal')
let ruleImg = document.querySelector('.rule-img')
let nxtBtn = document.querySelector('.nxt-btn')
if(yscore){
    yscoreElem.innerText=yscore
}
if(cscore){
    cscoreElem.innerText=cscore
}
let ycount = 0;
let ccount = 0;
con.forEach((element, index)=>{
    element.addEventListener('click',()=>{
        user.style.opacity='1'
        triangle.style.display='none';
        con.forEach(item =>{
            item.style.display='none';
        })
        element.style.display='block';
        element.classList.add('show')
        setTimeout(() => {
            pc.style.opacity='1';
            setTimeout(() => {
                computer[random].style.display='block';
                computer[random].classList.add('right');
            }, 1000);
        }, 500);
        setTimeout(() => {
            if(random==index){
                tiemodal.style.display='grid';
            }
            else if(index==1 && random==2 || index==0 && random==1 || index==2 && random==0){
                winmodal.style.display="grid";
                winner.innerText="YOU WIN";
                ycount=yscore;
                ycount++;
                yscoreElem.innerText=ycount;
                localStorage.setItem('yscore', JSON.stringify(ycount))
                nxtBtn.style.opacity='1';
            }else{
                winmodal.style.display="grid";
                winner.innerText="YOU LOSE";
                ccount=cscore;
                ccount++;
                cscoreElem.innerText=ccount;
                localStorage.setItem('cscore', JSON.stringify(ccount))
            }
        }, 1500);
    })
})
play.addEventListener('click', ()=>{
    window.location.reload()
})
replay.addEventListener('click', ()=>{
    window.location.reload()
})
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