var main = document.getElementById("main");
let arr = 
[
    "https://i.pinimg.com/736x/a0/8d/1b/a08d1b025ab9fe00d03d8dab98fddaeb.jpg",
    "https://i.pinimg.com/1200x/92/c3/07/92c307470891d3fd1a66c6bbacae7bb2.jpg",
    "https://i.pinimg.com/736x/f1/31/d4/f131d4559a06abd2fecdaf4519dde5e4.jpg",
    "https://i.pinimg.com/736x/93/a6/98/93a6981f87aa7ba217ad7f38f24b0af9.jpg",
    "https://i.pinimg.com/1200x/4e/97/d0/4e97d0f7c6d167c1eb29e920220cafa3.jpg",
    "https://i.pinimg.com/1200x/aa/b6/bb/aab6bbef339848633e9cd1228c8de6e3.jpg"
];
let s = "";
for(let i=1;i<=78;i++)
{
    let r = Math.floor(Math.random() * arr.length);
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;


// https://i.pinimg.com/736x/a0/8d/1b/a08d1b025ab9fe00d03d8dab98fddaeb.jpg
// https://i.pinimg.com/1200x/92/c3/07/92c307470891d3fd1a66c6bbacae7bb2.jpg
// https://i.pinimg.com/736x/f1/31/d4/f131d4559a06abd2fecdaf4519dde5e4.jpg
// https://i.pinimg.com/736x/93/a6/98/93a6981f87aa7ba217ad7f38f24b0af9.jpg
// https://i.pinimg.com/1200x/4e/97/d0/4e97d0f7c6d167c1eb29e920220cafa3.jpg