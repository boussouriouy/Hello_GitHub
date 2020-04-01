//this function is how to generate a random picture or anything
document.querySelector('#btn-1').addEventListener('click', generate);

function generate() {
    let items = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg'];
    let single = Math.floor(Math.random() * 4);

    let pictur = document.createElement('img');
    pictur.src = `images/${items[single]}`;
    document.querySelector('#bdy').appendChild(pictur);
}


//this function is how to display all the pictures or anything
document.querySelector('#btn-1').addEventListener('click', printer);

function printer() {
    let items = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg'];
    for (let i = 0; i < items.length; i++) {
        let image = document.createElement('img');
        image.src = `images/${items[i]}`;
        document.querySelector('#bdy').appendChild(image);
    }
}