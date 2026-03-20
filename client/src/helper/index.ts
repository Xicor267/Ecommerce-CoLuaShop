import adminImg from '../assets/image/admin.jpg';
import avatarImg from '../assets/image/avatar.png';
import call_15047436Img from '../assets/image/call_15047436.png';
import call_15047651Img from '../assets/image/call_15047651.png';
import coluaImg from '../assets/image/colua.jpg';
import play_15047677Img from '../assets/image/play_15047677.png';
import status_15047667Img from '../assets/image/status_15047667.png';

const imageMap: { [key: string]: string } = {
    'admin.jpg': adminImg,
    'avatar.png': avatarImg,
    'call_15047436.png': call_15047436Img,
    'call_15047651.png': call_15047651Img,
    'colua.jpg': coluaImg,
    'play_15047677.png': play_15047677Img,
    'status_15047667.png': status_15047667Img,
};

export const imageSetting = (imageName: string) => {
    const image = imageMap[imageName];
    if (!image) {
        console.warn(`Image not found: ${imageName}`);
        return '';
    }
    return image;
};
