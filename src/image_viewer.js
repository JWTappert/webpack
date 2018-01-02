import '../styles/image_viewer.css';

window.onload = () => {
    const image = document.createElement('img');

    image.src = 'https://loremflickr.com/320/240/dog';

    document.body.appendChild(image);
};