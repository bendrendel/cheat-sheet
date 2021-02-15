const buttonD = document.getElementById('d');

buttonD.addEventListener('transitionrun', (e => {
    const propName = e.propertyName;
    const elapsedTime = e.elapsedTime;
    buttonD.innerHTML = `Beginning transition on ${propName}, and ${elapsedTime} seconds has elapsed.`;
}))

buttonD.addEventListener('transitionstart', (e => {
    const propName = e.propertyName;
    const elapsedTime = e.elapsedTime;
    buttonD.innerHTML = `Transition delay over on ${propName}, and ${elapsedTime} seconds has elapsed.`;
}))

buttonD.addEventListener('transitionend', (e => {
    const propName = e.propertyName;
    const elapsedTime = e.elapsedTime;
    buttonD.innerHTML = `Transition over for ${propName}, and ${elapsedTime} seconds has elapsed.`;
}))