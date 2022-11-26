var CLUSTER = document.getElementsByClassName('CLUSTER')[0];


var numberOBJ = ARRAY.length;
console.log('Объектов всего:', numberOBJ);


var n = 0;

while (n < numberOBJ) {
    if (ARRAY[n].NAME){ // не выводить пустые эл.
        CLUSTER.innerHTML += `

            <div class="BOX">
                <div>
                    <a href="https://${ARRAY[n].NAME}"><h2>${ARRAY[n].NAME}</h2></a>
                    <div title="${ARRAY[n].TITLE}" class="VALID" style="background-image: url(IMG/${validCheck()}.svg)"></div>
                </div>
                <div class="NOTE">${ARRAY[n].NOTE}</div>
            </div>
        `;
    };
    n++;
};


console.log('Кол-во завершённых итераций:', n);


// проверка актуальности [true = зеленая галочка]
function validCheck(){
    if(ARRAY[n].VALID == true){var nameSVG = "done"}
    else {var nameSVG = "close"}
    return nameSVG;
}

// скачивание файла
function download(){
    if(ARRAY[n].NAME == true){
        
    }
    
}



/////////////////////////////////////
//            <div class="BOX">
//                <a href="https://${ARRAY[n].NAME}"><h2>${ARRAY[n].NAME}</h2></a>
//                <div>${ARRAY[n].NOTE}</div>
//                <a href="FILE/${ARRAY[n].NAME}/style.txt" download>скачать</a>
//            </div>

