import imgFace from "./imgs/icons/face_icon.png";
import imgInsta from "./imgs/icons/insta_icon.png";
import imgWhats from "./imgs/icons/whats_icon.png";
import "./configs.scss";

function Contato() {
    return (
        <div className='contatos'>
            <hr></hr>
            <h2>Contatos</h2>
            <hr></hr>
            <p> Bolos da Carol</p>
            <p>CNPJ: 12.873.612/0001-78</p>
            <p>(00) 0 0000-0000</p>
            <p>docesCarol@email.com</p>
            <p>R. Arnoldo Frey , 178</p>
            <p>Fraiburgo – SC | 89580-000</p>
            <div className="redesSociais">
                <img src={imgFace} />
                <img src={imgInsta} />
                <img src={imgWhats} />
            </div>
        </div>
    );
}
export default Contato;