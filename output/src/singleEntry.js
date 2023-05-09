// import img from "./assets/diaochan.png";

function component() {
    const element = document.createElement('div');

    element.innerHTML = '单入口';

    /* 动态引入文件 */
    // element.onclick = function() {
    //     import(/* webpackChunkName: 'chunkname' */'./chunkname').then(app => {
    //         app.chunckFile();
    //     })
    // }

    /* 引入图片 */
    // const element2 = document.createElement('img');
    // element.src = img;
    // document.body.appendChild(element2);

    return element;
}

document.body.appendChild(component());