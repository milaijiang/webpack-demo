function component() {
    const element = document.createElement('div');

    element.innerHTML = '单入口';

    return element;
}

document.body.appendChild(component());