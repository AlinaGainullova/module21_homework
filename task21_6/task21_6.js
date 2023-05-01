const numberInput = document.querySelector('.number_input');
const limitInput = document.querySelector('.limit_input');
const btn = document.querySelector('.btn');
const result  = document.querySelector('.result');
const photos = document.querySelector('.photos');

localStoragePhotos();

function outputTxt(text) {
    result.innerHTML = text;
}

btn.addEventListener('click',() =>{ 
const page = numberInput.value;
const lim = limitInput.value;

if((page <1 || page >10 || isNaN(page)) && (lim <1 || lim >10 || isNaN(lim))){
    outputTxt('«Номер страницы и лимит вне диапазона от 1 до 10');
} else if (page <1 || page >10 || isNaN(page)){
    outputTxt('Номер страницы вне диапазона от 1 до 10');
} else if(lim <1 || lim >10 || isNaN(lim)){
    outputTxt('Лимит вне диапазона от 1 до 10');
} else { 
    outputTxt('Загружены картинки');
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${lim}`)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        photosCard(json);
        localStorage.setItem("last_photos", photos.innerHTML);
    })
    .catch(error => console.log('error', error));
}

});

function photosCard(apiData) {
    let cards= String();
    apiData.forEach(item => {
        const cardImg = `<img src="${item.download_url}"/>`
        cards += cardImg;
    });
    photos.innerHTML = cards;
}

function localStoragePhotos() {
    photos.innerHTML = localStorage.getItem("last_photos");
    return  photos.innerHTML.length > 0;
}