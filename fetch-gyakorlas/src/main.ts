import { ProductsList } from "./products";

var mom: any[] = [];
async function betoltes(){
    let eredmeny = await fetch('products.json');
    let tartalom = await eredmeny.json() as ProductsList;
    for (let i = 0; i < tartalom.products.length; i++) {
        mom.push(tartalom.products[i]);
    }
}
function adatMegjelenites(lista:any[]) {
    const app = document.getElementById("app");
    const ul = document.createElement('ul');
    ul.style.listStyleType = "none";
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        const li = document.createElement('li');
        //const elegemvan = document.createTextNode("id: "+ item.id+"\nTermék neve: "+item.title +"\n");
        //li.appendChild(kep);
        //li.appendChild(elegemvan);
        li.innerHTML = '<img src ="'+item.thumbnail+'"style="width: 200px;border: 1px solid black;">'
                        +'<br>'+item.title
                        +'<br><br>'+item.description
                        +'<br><br> $'+ item.price +' - '+item.discountPercentage+'% Off!'
                        +'<br> Rating: '+item.rating+ '/5'
                        +'<br> Only '+item.stock + ' remaining'
                        
                        +'<br><br><br>'
                        ;
        ul.appendChild(li);
    }
    app!.appendChild(ul);
}
document.addEventListener('DOMContentLoaded',()=>{
    const button = document.getElementById("btn");
    const abc = document.getElementById("btn_abc");
    betoltes();
    button!.addEventListener('click',()=>{
        adatMegjelenites(mom);
    });
    abc!.addEventListener('click',()=>{
        let konk = mom.sort()
        adatMegjelenites(konk);
    });
    
});