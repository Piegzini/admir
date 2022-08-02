import {footer, partners, image} from '../../styles/footer.module.sass'
import partner1 from '../../assets/partners-logo-1.png'
import partner2 from '../../assets/partners-logo-2.png'
import partner3 from '../../assets/partners-logo-3.png'
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={footer}>
            <div className={partners}>
                <Image src={partner1} classname={image} alt="Logo partnera"/>
                <Image src={partner2} classname={image} alt="Logo partnera"/>
                <Image src={partner3} classname={image} alt="Logo partnera"/>
            </div>
            <p>Copyright &copy; 2022 by Admir. Wszystkie prawa zastrzeżone. Projekt i wykonanie Konrad Piegza</p>
        </footer>
    );
};

export default Footer;
