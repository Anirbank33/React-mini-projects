function customRender(reactElement, Container) {
    const domElement = document.createElement(reactElement.type)
    domElement.textContent = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') containue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement)
}


const reactElements = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(reactElements, mainContainer)