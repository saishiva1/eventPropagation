
//start of old code
/*
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')
const btn = document.querySelector('.btn')
const p1CB = document.querySelector('#p1-opt');

const onClickFn = (e) => {
console.log(e,this.caller)
    // alert('p1')
    addChild('p1')

    // setTimeout(()=>{p1.style.backgroundColor = 'blue'},0)
}


document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    // alert('button')
    // resetList()
    addChild('button')
    // e.stopPropagation();
    // p1.style.backgroundColor = 'white'
    // p2.style.backgroundColor = 'white'
    // p3.style.backgroundColor = 'white'
})

p1.addEventListener('click', onClickFn)
p2.addEventListener('click', (e) => {
    // alert('p2')
    addChild('p2')
    // setTimeout(()=>{p2.style.backgroundColor = 'green'},0)
})
p3.addEventListener('click', (e) => {
    // alert('p3')
    addChild('p3')
    // setTimeout(()=>{p3.style.backgroundColor = 'red'},0)
})
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetList();
})

p1CB.addEventListener('click',(e)=>{
    const p1 = document.querySelector('.p1')
 p1.removeEventListener('click',onClickFn)
    p1.addEventListener('click',()=>{addChild('p1')},true)

})
*/

//end of old code