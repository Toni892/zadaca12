var gradovi=[];
document.getElementById('dodajGrad').addEventListener('click',function(){
    var grad=prompt('Unesite grad')
    grad=grad.split(" ");
    
    
    var privremeniGrad={
        ime:grad[0],
        temperatura:parseInt(grad[1])
    }


    gradovi.push(privremeniGrad);
})

document.getElementById('prikazt').addEventListener('click',function(){
    
    document.getElementById('prognoza').innerHTML="";
    for(let i = 0; i < gradovi.length; i++) {
        if (gradovi[i].temperatura >= 12) {
            document.getElementById('prognoza').innerText += `${gradovi[i].ime} ${gradovi[i]["temperatura"]}`;
            document.getElementById('prognoza').innerHTML += "<br></br>";
        }
    }
});

document.getElementById('prikazh').addEventListener('click',function(){
    
    document.getElementById('prognoza').innerText="";
    for(let i = 0; i < gradovi.length; i++) {
        if (gradovi[i].temperatura < 12) {
            document.getElementById('prognoza').innerText += `${gradovi[i].ime} ${gradovi[i]["temperatura"]}`;
            document.getElementById('prognoza').innerHTML += "<br></br>";
        }
    }
});


