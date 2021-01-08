console.log('skrypt JavaScript2');

const btn = document.getElementById('btn');
const cel = document.getElementById('cel');
const tekst = document.getElementById('input');

btn.addEventListener("click",() => tekst.value=cel.textContent);

const dbBtn = document.getElementById('dbBtn');
const dbBtn2 = document.getElementById('dbBtn2');


function getData(querry)
{
    const ajax = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        ajax.onreadystatechange = () => {
            if(ajax.readyState === XMLHttpRequest.DONE){
                if(ajax.status >=200 && ajax.status < 300){
                    resolve(JSON.parse(ajax.response));
                }else {
                    reject('ERR');
                }
            }
        };
        const url = `http://192.168.0.164/php/getData.php?querry=${querry}`;
        ajax.open('GET', url, true);
        ajax.send();
    });

};

const querry ="SELECT * FROM user";



dbBtn.addEventListener("click", () => getData(querry).then(data => console.log(data)));
dbBtn2.addEventListener("click", () => getData(querry).then(data => cel.textContent=data[1].name));

