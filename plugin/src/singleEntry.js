// import img from "./assets/diaochan.png";
import _ from "lodash";

import "./style.css";

function component() {
    const element = document.createElement('div');

    element.innerHTML = '单入口';

    /* 动态引入文件 */
    // import('./chunkname').then(app => {
    //     app.chunckFile();
    // })

    /* 引入图片 */
    // const element2 = document.createElement('img');
    // element.src = img;
    // document.body.appendChild(element2);

    console.log(_.join(['hello', 'world']));
    return element;
}

document.body.appendChild(component());