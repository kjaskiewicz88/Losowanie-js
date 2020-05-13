function create(){
    const box = document.getElementById('content');

// zbudowanie kul i paragrafów
    for(let i = 1; i < 50; i++){
        let div = document.createElement('div');
        let paragraph = document.createElement('p')
        let text = document.createTextNode([i])
        box.appendChild(div);
        div.setAttribute('class','kula')
        div.appendChild(paragraph)
        paragraph.appendChild(text)
    }

}
create()



const array = [];
function youNumber(){

 let inputs = document.getElementsByClassName('num')
 let a = document.getElementById('number1').value
 let b = document.getElementById('number2').value
 let c = document.getElementById('number3').value
 let d = document.getElementById('number4').value
 let e = document.getElementById('number5').value
 let f = document.getElementById('number6').value


  
        for(let i=0; i<inputs.length; i++){
            let t =  inputs[i].value;

        array.push(t)
        }
       
        if(a>49 || b>49 || c>49 || d>49 || e>49 || f>49){
            return document.getElementById('text').innerHTML="Wartoś jest za wysoka"
        }
        if(a==0 || b==0 || c==0 || d==0 || e==0 || f==0){
            return  document.getElementById('text').innerHTML="Uzupełnij pola, pola różne od 0"
        }
        if(a==b || a==c || a==d || a==e || a==f || b==c || b==d || b==e || b==f || c==d || c==e || c==f || d==e || d==f || e==f){
            return  document.getElementById('text').innerHTML="Liczby nie mogą się powtarzać"
        }
        if(a<0 || b<0 || c<0 || d<0 || e<0 || f<0){
            return document.getElementById('text').innerHTML="Wartość jest za niska"
        }
        if( isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e) || isNaN(f) ){
            return document.getElementById('text').innerHTML="Tylko wartość numeryczna"
        }
        if(a>0 && b>0 && c>0 && d>0 && e>0 && f>0){
            return document.getElementById('text').innerHTML=""
        }
    return youNumber() 
}


// tworze pustą tablicę
const result = [];
function oblicz(){

    if(array.length<6){
        return youNumber()
    }
  

    let table = document.getElementsByClassName('kula')
    let span = document.getElementById('result')

// warunek do pustej tablicy
    if(result.length===1) return;

// obliczenie liczby z 49 dostępnych
    let text = Math.floor(Math.random() * table.length) + 1;

//Wrzucenie na tablicę
    for(let j=1; j < table.length; j++){
        table[text-1].style.backgroundColor ='#2196f3';
    }
    
//wynik wrzucam do pustej tablicy
    result.push(text);
        
//przypisanie do spana
    text = document.createTextNode(text)
    span.appendChild(text)
  

//tworze 6 cyfrową tablię
    let tab = array;
    let tab_array = tab.slice(tab.length-6,tab.length)

//porównanie wylosowanej liczby z tablicą
    let table_result = result.join("")
    let table_array_result = tab_array.indexOf(table_result)

    if(table_array_result>=0){
        return document.getElementById('text').innerHTML="GRATULACJE !! WYGRAŁEŚ"
    }else{
        return document.getElementById('text').innerHTML="NO NIESTETY, PRÓBUJ JESZCZE RAZ"
    }


}

document.getElementById('btn').addEventListener('click',oblicz)
document.getElementById('bt').addEventListener('click',youNumber)
document.getElementById('refresh').addEventListener('click',function(){
    location.reload()
})