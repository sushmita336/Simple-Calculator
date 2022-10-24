console.log("Welocome to Calculator made by Me")
let string ="";
let buttons=document.querySelectorAll('.button');
// console.log(buttons)
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }else if(e.target.innerHTML=='+/-'){
            let s='-';
            string.
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }else{
            console.log(e.target);
            let p=e.target.innerHTML;
            console.log(p);
            string=string+e.target.innerHTML;
            console.log(string)
            document.querySelector('input').value=string;
        }
    })
})