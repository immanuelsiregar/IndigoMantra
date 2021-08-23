
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-buttons a');

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link =>{
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    })
});

new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 1,
    speedIn: 1,
    speedOut: 1,
    image1: 'pics/indigomantrapackaging.jpeg',
    image2: 'pics/fieldtee.jpeg',
    displacementImage: 'imageeffects/heightMap.png'
});

new hoverEffect({
    parent: document.querySelector('.distortion2'),
    intensity: 1,
    speedIn: 1,
    speedOut: 1,
    image1: 'pics/cosmisch.jpeg',
    image2: 'pics/gooutside.jpeg',
    displacementImage: 'imageeffects/fluid.jpeg'
});

new hoverEffect({
    parent: document.querySelector('.distortion3'),
    intensity: 1,
    speedIn: 1,
    speedOut: 1,
    image1: 'pics/abovebelow.jpeg',
    image2: 'pics/whenyousmiled.jpeg',
    displacementImage: 'imageeffects/heightMap.png'
});

new hoverEffect({
    parent: document.querySelector('.distortion4'),
    intensity: 1,
    speedIn: 1,
    speedOut: 1,
    image1: 'pics/saluton.jpeg',
    image2: 'pics/theoryofcare.jpeg',
    displacementImage: 'imageeffects/fluid.jpeg'
});

new hoverEffect({
    parent: document.querySelector('.distortion5'),
    intensity: 1,
    speedIn: 1,
    speedOut: 1,
    image1: 'pics/DP1.jpg',
    image2: 'pics/DP2.jpg',
    displacementImage: 'imageeffects/fluid.jpeg'
});

new hoverEffect({
    parent: document.querySelector('.distortion6'),
    intensity: 1,
    speedIn: 1,
    speedOut: 1,
    image1: 'pics/DP3.jpg',
    image2: 'pics/DP4.jpg',
    displacementImage: 'imageeffects/fluid.jpeg'
});

new hoverEffect({
    parent: document.querySelector('.distortion7'),
    intensity: 1,
    speedIn: 1,
    speedOut: 1,
    image1: 'pics/dreammachine.png',
    image2: 'pics/dreammachineinvertedv2.png',
    displacementImage: 'imageeffects/fluid.jpeg'
});

new hoverEffect({
    parent: document.querySelector('.distortion8'),
    intensity: 1,
    speedIn: 1,
    speedOut: 1,
    image1: 'pics/domespsyBack.png',
    image2: 'pics/domespsyBackV2.png',
    displacementImage: 'imageeffects/fluid.jpeg'
});