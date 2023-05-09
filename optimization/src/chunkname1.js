import './common';

export function chunckFile1() {
    const element = document.createElement('div');

    element.innerHTML = '运行中动态加载的文件1';
    document.body.appendChild(element);
}