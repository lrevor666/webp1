require('../less/app.less');

let img = require('../images/da.png');

console.log('img==>',img);

window.onload = function(){

    let person = ['kevin','mark','iven'];

    let ul = document.createElement('ul');

    person.map(v => {

        let li = document.createElement('li');
        li.textContent = v;
        ul.appendChild(li);

    });

    document.body.appendChild(ul);

    let image = new Image();

    image.src = img;

    // if(/^data:image\/.[A-Za-z]+;base64/.test(img)){
        
    // }else{
    //     image.src = img;
    // }

    document.getElementById('icon').appendChild(image);

}