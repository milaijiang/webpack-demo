function component() {
    const element = document.createElement('div');

    element.innerHTML = '入口';

    return element;
}

document.body.appendChild(component());