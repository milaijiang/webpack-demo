import './common';

export function chunckFile2() {
    const element = document.createElement('div');

    element.innerHTML = '运行中动态加载的文件2';
    document.body.appendChild(element);
}