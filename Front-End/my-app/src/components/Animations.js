import AOS from 'aos';
import 'aos/dist/aos.css';

const initAnimations = () => {
    AOS.init({
        mirror: true, // Mirror animation when scrolling past elements
        once: false, // Whether animation should happen only once - while scrolling down
        // You can add more options here based on your needs
    });
};

export default initAnimations;
