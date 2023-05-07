// import img from "./assets/diaochan.png";

// import './stylecss.css'
// import './styleless.less'

function component() {
    const element = document.createElement('div');

    // element.classList.add('hello')

    element.innerHTML = '单入口';

    /* 引入图片 */
    // const element2 = document.createElement('img');
    // element.src = img;
    // document.body.appendChild(element2);

    // import('./chunkname').then(data => {
    //     data.chunckFile();
    // });

    // return element;
    return new Promise(rs => rs(element))
}


// document.body.appendChild(component());

component().then(element => {
    document.body.appendChild(element);
})