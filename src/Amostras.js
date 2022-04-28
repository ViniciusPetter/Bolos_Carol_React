import chocolate_bolo from "./imgs/chocolate_bolo.jpg";
import cenoura_bolo from "./imgs/cenoura_bolo.webp";
import banana_bolo from "./imgs/banana_bolo.webp";
import coco_bolo from "./imgs/coco_bolo.jpg";
import fuba_bolo from "./imgs/fuba_bolo.jpg";
import limao_bolo from "./imgs/limao_bolo.jpg";

import "./configs.scss";

function Amostras() {
    return (
        <div className="amostra">
            <hr></hr>
            <h2>Produtos</h2>
            <hr></hr>
            <div className="imgsAmostra">
                <img src={chocolate_bolo} title="Bolo de chocolate"/>
                <img src={cenoura_bolo} title="Bolo de Cenoura"/>
                <img src={banana_bolo} title="Bolo de Banana"/>
                <img src={coco_bolo} title="Bolo de Coco"/>
                <img src={fuba_bolo} title="Bolo de Fuba"/>
                <img src={limao_bolo} title="Bolo de Limão"/>
            </div>
        </div>
    );
}
export default Amostras;