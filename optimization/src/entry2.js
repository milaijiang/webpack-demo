function component() {
    const element = document.createElement('div');

    element.innerHTML = '入口2';

    return element;
}

document.body.appendChild(component());