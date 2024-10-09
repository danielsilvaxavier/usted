let nome = prompt('Seu nome meu docinho crocante?')
if(nome == null){
    window.location="https://www.google.com.br/?hl=pt-BR"
}else if(nome == 'Anna' || nome == 'Anna Clara' || nome == 'anna' || nome == 'anna clara' || nome == 'Amor' || nome == 'amor' || nome == 'Docinho' || nome == 'docinho')
    alert('Seja bem vida meu amorrrr!!!')
    else{
        alert('Não é meu docinho :(')
        window.location= "https://www.google.com.br/?hl=pt-BR"
    }
let p1 = document.querySelector('p.parag')
let p2= document.querySelector('p.p2')
let yes = document.querySelector('button.sim')
let no = document.querySelector('button.no')
let what = document.querySelector('button.what')
let elemento = document.querySelector('div.element')
let bolapreta = document.querySelector('div.bola-black')
let corpo = document.getElementsByTagName('body') [0]
bolapreta.addEventListener('click', escuro)
bolapreta.addEventListener('click', movedireita )
bolapreta.addEventListener('dblclick', claro)
bolapreta.addEventListener('dblclick', moveesquerda)
yes.addEventListener('click', sim)
no.addEventListener('click' , nao)
what.addEventListener('click' , wha)

function escuro(){
    corpo.style.background = 'rgb(54, 5, 18)'
}
function movedireita(){
    bolapreta.style = 'transform: translateX(100%)'
}
function claro(){
    corpo.style.background = 'rgb(175, 26, 63)'
}
function moveesquerda(){
    bolapreta.style = 'transform: translateX(-8%)'
}
function sim() {
    alert('Ainda bem que sabes :)')
    window.location="https://www.youtube.com/watch?v=Af7ieNv0wXY"

}
function nao(){
    alert('Momo tá sad agr :(')
    window.location="https://www.google.com/search?sca_esv=427163c40a0d98b7&q=o+que+%C3%A9+a+depress%C3%A3o&spell=1&sa=X&sqi=2&ved=2ahUKEwiWuaaArfyIAxXkILkGHXhrAG4QBSgAegQICRAB&biw=1440&bih=773&dpr=1"
}
function wha(){
    p1.style= 'display: none'
    p2.innerHTML='<p>"Te adoro em tudo... tudo... tudo... Quero mais que tudo tudo... tudo... Te amar sem limites... tchana tchanaa...😅(esqueci a letra 🙈) escrever uma linda históriaaaa💖💖💖"</p>'
    p2.innerHTML+=`Ent casa comigo 💍, ${nome} me amor crocante, my love?`
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function demo() {
        for (let i = 0; i < 5; i++) {
            console.log(`Waiting ${i} seconds...`);
            await sleep(i * 1000);
        }
        window.location="https://www.youtube.com/watch?v=Af7ieNv0wXY"
    }
    
    demo();
    

}


