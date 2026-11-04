function customRender(reactElement, Container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
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