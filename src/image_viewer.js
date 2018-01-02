import big from '../assets/bigg.jpg';
import small from '../assets/1.0.png';
import '../styles/image_viewer.css';

window.onload = () => {
    const smallImage = document.createElement('img');
    const bigImage = document.createElement('img');
    smallImage.src = small;
    bigImage.src = big;
    document.body.appendChild(smallImage);
    document.body.appendChild(bigImage);
};