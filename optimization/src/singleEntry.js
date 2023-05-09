import _ from "lodash";
import BigNumber from "bignumber.js";

function component() {
    const element = document.createElement('div');

    element.innerHTML = '单入口';

    console.log(_.join(['hello', 'world']));
    console.log(new BigNumber(123.4567));

    import(/* webpackChunkName: 'chunkFile1' */'./chunkname1').then(data => {
        data.chunckFile1();
    });
    import(/* webpackChunkName: 'chunkFile2' */'./chunkname2').then(data => {
        data.chunckFile2();
    });

    return element;
}

document.body.appendChild(component());