export function chunckFile() {
    const element = document.createElement('div');

    element.innerHTML = '运行中动态加载的文件';
    return new Promise(rs => {
        document.body.appendChild(element);
        rs()
    })
}