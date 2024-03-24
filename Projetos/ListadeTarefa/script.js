function toggleContent(itemId) {
    var content = document.getElementById('content' + itemId);
    if (content.classList.contains("close")) {
      content.classList.remove("close");
      content.classList.add("open");
      abrir(itemId)
    } else {
      content.classList.remove("open");
      content.classList.add("close");
      fecha(itemId)
    }
  }

function abrir(index){
    let plus = document.getElementById("plus"+ index);
    let men = document.getElementById("men"+ index);
    plus.style.animationName = "rot";
    plus.style.rotate = "90deg";
    setTimeout(()=> {
       plus.style.animationName = "";
        plus.style.display = "none";
        men.style.display = "block";
        men.style.zIndex = "10";
        plus.style.rotate = "0deg";
       
    }, 1000)
}

function fecha(index){
    let plus = document.getElementById("plus"+ index);
    let men = document.getElementById("men"+ index);
    men.style.animationName = "rot";
    men.style.rotate = "90deg";
    plus.style.zIndex = "-10";
    setTimeout(()=> {
        men.style.display = "none";
        men.style.animationName = "";
        
        plus.style.display = "block";
        men.style.rotate = "0deg";
        plus.style.zIndex = "10";

    }, 1000)
}

let cont = 40

let content2 = document.getElementById("cont");
let fundo = document.getElementById("fundo");

let btn_nova = document.getElementById("btn1");
btn_nova.addEventListener("click", () => {
  
  content2.style.display = "flex";
  fundo.style.display = "block";
})

function adiciona(){
    const lista = document.getElementById("lista");
    let tamanho = lista.getElementsByTagName("li").length
    const lis = document.getElementById("lista");
    const conteiner = document.getElementById("contein");
    const nome = document.getElementById("ititulo");
    const conteudo = document.getElementById("conteudo");
    let numT = tamanho + 1
    if (cont < 80){
      cont += 10
    }
    lis.innerHTML += ` <li id="li${numT}">
    <span onclick="toggleContent(${numT})">
      <input type="checkbox" name="check" id="check${numT}" onchange="feito(${numT})">
      ${nome.value}
      <div class="simbols">
        <i class="fa-solid fa-plus mais" id="plus${numT}"></i>
        <i class="fa-solid fa-minus minus" id="men${numT}"></i>
      </div>
    </span>
    <div id="content${numT}" class="item-content close">
      ${conteudo.value}
    </div>
    <hr>
  </li>
  `;
    conteiner.style.height = `${cont}%`
    content2.style.display = "none";
    fundo.style.display = "none";
    nome.value = "";
    conteudo.value = "";
}




let percent = 0

function feito(idx){
  const lista = document.getElementById("lista");
  let tamanho = lista.getElementsByTagName("li").length;
  let check = document.getElementById("check"+ idx);
  let bar = document.getElementById("bar");
  let numero = document.getElementById("num");
 
  if (check.checked){
    percent ++
  } else {
    percent --
  }

  function porcentagem(num){
    let x = (num * 100)/ tamanho
    return parseInt(x)
  }

  let percento = porcentagem(percent)
  bar.style.width = `${percento}%`
  numero.innerText = `${percento}%`
}

function atualizarid(){
  let lista = document.getElementById("lista").getElementsByTagName("li");

 

  for (let c = 0; c < lista.length; c++){
    lista[c].id = "li" + (c + 1)
  }

  for (let e = 1; e <= lista.length; e++){
    let li = lista[e-1].getElementsByTagName("span")
    console.log(li)
    let check = li[e-1].getElementsByTagName("input")
    console.log(check)
    check[e-1].id = "check"+e
  }
}


let btn_delete = document.getElementById("btn2");
btn_delete.addEventListener("click", () => {
  const lista = document.getElementById("lista");
  let tamanho = lista.getElementsByTagName("li").length;
  let bar = document.getElementById("bar");
  let numero = document.getElementById("num");
  for (let i = 1; i <= tamanho; i ++){
    let check = document.getElementById("check"+ i);
    if (check.checked){
        console.log(i)
        let item = document.getElementById("li"+ i);
        lista.removeChild(item);
        check.checked = false

        percent --
        function porcentagem(num){
          let x = (num * 100)/ tamanho
          return parseInt(x)
        }
      
        let percento = porcentagem(percent)
        bar.style.width = `${percento}%`
        numero.innerText = `${percento}%`

        atualizarid()
    } else {
      continue
    }

  }
  
})

