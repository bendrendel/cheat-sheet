const codeRegularColor = 'green';
const codeHighlightColor = 'yellow';
const docTypeCode = document.querySelector('.code .doctype');
const htmlOpeningCode = document.querySelector('.code .html.opening');
const htmlClosingCode = document.querySelector('.code .html.closing');
const headOpeningCode = document.querySelector('.code .head.opening');
const headClosingCode = document.querySelector('.code .head.closing');
const bodyOpeningCode = document.querySelector('.code .body.opening');
const bodyClosingCode = document.querySelector('.code .body.closing');
const docTypeInfo = document.querySelector('.doctype.info');
const htmlInfo = document.querySelector('.html.info');
const headInfo = document.querySelector('.head.info');
const bodyInfo = document.querySelector('.body.info');

class InteractiveTag {
    constructor(codeElement, codeElementPair, infoElement) {
        this.codeElement = codeElement;
        this.codeElementPair = codeElementPair;
        this.infoElement = infoElement;
    }
}

const test = new InteractiveTag(docTypeCode, null, docTypeInfo);

function highlightCode(codeElement) {
    codeElement.style.color = codeHighlightColor;
}

function unhighlightCode(codeElement) {
    codeElement.style.color = codeRegularColor;
}

function highlightTargetCode(event) {
    highlightCode(event.target);
}

function unhighlightTargetCode(event) {
    unhighlightCode(event.target);
}

function showElement(element) {
    element.style.display = 'block';
}

function hideElement(element) {
    element.style.display = 'none';
}


docTypeCode.addEventListener('mouseover', highlightTargetCode);
docTypeCode.addEventListener('mouseover', () => showElement(docTypeInfo));
docTypeCode.addEventListener('mouseout', unhighlightTargetCode);
docTypeCode.addEventListener('mouseout', () => hideElement(docTypeInfo));

htmlOpeningCode.addEventListener('mouseover', highlightTargetCode);
htmlOpeningCode.addEventListener('mouseover', () => highlightCode(htmlClosingCode));
htmlOpeningCode.addEventListener('mouseover', () => showElement(htmlInfo));
htmlOpeningCode.addEventListener('mouseout', unhighlightTargetCode);
htmlOpeningCode.addEventListener('mouseout', () => unhighlightCode(htmlClosingCode));
htmlOpeningCode.addEventListener('mouseout', () => hideElement(htmlInfo));

htmlClosingCode.addEventListener('mouseover', highlightTargetCode);
htmlClosingCode.addEventListener('mouseover', () => highlightCode(htmlOpeningCode));
htmlClosingCode.addEventListener('mouseover', () => showElement(htmlInfo));
htmlClosingCode.addEventListener('mouseout', unhighlightTargetCode);
htmlClosingCode.addEventListener('mouseout', () => unhighlightCode(htmlOpeningCode));
htmlClosingCode.addEventListener('mouseout', () => hideElement(htmlInfo));

headOpeningCode.addEventListener('mouseover', highlightTargetCode);
headOpeningCode.addEventListener('mouseover', () => highlightCode(headClosingCode));
headOpeningCode.addEventListener('mouseover', () => showElement(headInfo));
headOpeningCode.addEventListener('mouseout', unhighlightTargetCode);
headOpeningCode.addEventListener('mouseout', () => unhighlightCode(headClosingCode));
headOpeningCode.addEventListener('mouseout', () => hideElement(headInfo));

headClosingCode.addEventListener('mouseover', highlightTargetCode);
headClosingCode.addEventListener('mouseover', () => highlightCode(headOpeningCode));
headClosingCode.addEventListener('mouseover', () => showElement(headInfo));
headClosingCode.addEventListener('mouseout', unhighlightTargetCode);
headClosingCode.addEventListener('mouseout', () => unhighlightCode(headOpeningCode));
headClosingCode.addEventListener('mouseout', () => hideElement(headInfo));

bodyOpeningCode.addEventListener('mouseover', highlightTargetCode);
bodyOpeningCode.addEventListener('mouseover', () => highlightCode(bodyClosingCode));
bodyOpeningCode.addEventListener('mouseover', () => showElement(bodyInfo));
bodyOpeningCode.addEventListener('mouseout', unhighlightTargetCode);
bodyOpeningCode.addEventListener('mouseout', () => unhighlightCode(bodyClosingCode));
bodyOpeningCode.addEventListener('mouseout', () => hideElement(bodyInfo));

bodyClosingCode.addEventListener('mouseover', highlightTargetCode);
bodyClosingCode.addEventListener('mouseover', () => highlightCode(bodyOpeningCode));
bodyClosingCode.addEventListener('mouseover', () => showElement(bodyInfo));
bodyClosingCode.addEventListener('mouseout', unhighlightTargetCode);
bodyClosingCode.addEventListener('mouseout', () => unhighlightCode(bodyOpeningCode));
bodyClosingCode.addEventListener('mouseout', () => hideElement(bodyInfo));


