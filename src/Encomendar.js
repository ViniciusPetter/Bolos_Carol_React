import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./configs.scss";
import {gerar} from "./sistema_encomendas";

function Encomendar() {
    useEffect(() => {
        gerar();
    });
    return (
        <div className='encomendar'>
            <hr></hr>
            <h2>Encomendar</h2>
            <hr></hr>
            <div id='statsBolo' className='statsBolo'>
                <h3>Massa</h3>
                <select name="massa" id="massa">
                    <option value='1'>Baunilha</option>
                    <option value='2'>Chocolate</option>
                    <option value='3'>Coco</option>
                    <option value='4'>Cenoura</option>
                </select>
                <h3>Recheio</h3>
                <select name="recheio" id="recheio">
                    <option value='1'>Sem Recheio</option>
                    <option value='2'>Brigadeiro</option>
                    <option value='3'>Doce de Leite</option>
                    <option value='4'>Prestigio</option>
                    <option value='5'>Creme de Limão</option>
                    <option value='6'>Ganache</option>
                </select>
                <h3>Cobertura</h3>
                <select name="cobertura" id="cobertura">
                    <option value='1'>Sem Cobertura</option>
                    <option value='2'>Chocolate</option>
                    <option value='3'>Coco</option>
                    <option value='4'>Calda de morango</option>
                </select>
                <button className='botaoVisualizar' onClick={gerar}>Visualizar</button>
                <p>
                    <Link className='cancelar' to="/">Cancelar</Link>
                </p>
            </div>
            <div id='bolo' className='bolo' style={{ float: 'left' }}>
                <div className='divStyleMass'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
                        <g id='bolo_massa' transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M2430 3734 c-290 -25 -443 -48 -620 -95 -289 -76 -513 -200 -585 -323 -56 -96 -55 -76 -55 -929 0 -871 -2 -848 63 -944 187 -278 944 -458 1692 -403 615 46 1048 211 1180 448 l35 64 0 828 0 828 -36 71 c-23 45 -54 87 -87 116 -172 155 -500 268 -932 321 -122 14 -555 27 -655 18z" />
                        </g>
                    </svg>
                    <div id='recheio_id' className='divStyleRech3'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">

                            <g id='bolo_recheio' transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M4084 1946 c-21 -19 -67 -61 -101 -93 -357 -338 -1538 -441 -2278 -198 -207 67 -299 120 -422 239 l-73 69 0 -130 0 -131 56 -57 c376 -382 1629 -499 2409 -225 164 58 278 125 377 222 l88 86 0 126 c0 69 -4 126 -8 126 -5 0 -26 -15 -48 -34z" />
                            </g>
                        </svg>
                    </div>
                    <div className='divStyleCobe'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
                            <g id='bolo_cobertura' transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="transparent" stroke="none">
                                <path d="M2430 3734 c-290 -25 -443 -48 -620 -95 -249 -66 -421 -152 -550 -275 -95 -91 -124 -131 -155 -219 -23 -64 -25 -80 -25 -270 0 -200 9 -282 45 -422 25 -97 67 -142 131 -143 64 0 74 18 74 131 0 89 2 98 30 143 29 46 32 47 53 33 18 -11 23 -27 27 -78 10 -116 36 -149 115 -149 28 0 43 9 82 51 26 28 56 64 66 80 30 46 86 35 106 -21 7 -21 8 -105 4 -255 -10 -351 11 -424 132 -459 29 -9 66 -16 82 -16 33 1 131 73 150 111 18 35 17 208 -2 252 -11 26 -15 73 -15 166 0 124 1 131 23 145 41 27 89 30 115 6 18 -17 22 -32 22 -77 0 -154 111 -294 232 -293 63 1 75 26 87 167 7 90 19 111 86 139 49 20 94 17 139 -9 70 -40 79 -61 87 -204 9 -175 16 -194 109 -319 83 -111 138 -144 241 -144 37 0 50 5 72 28 47 49 68 101 74 184 5 73 2 93 -28 163 -29 70 -39 124 -39 215 0 54 5 111 11 127 14 37 88 113 111 113 10 0 32 -13 50 -29 29 -25 32 -35 36 -95 4 -61 7 -69 47 -112 58 -61 86 -59 134 11 l33 50 -5 141 -6 141 27 31 c32 37 112 63 139 46 47 -29 58 -61 63 -183 6 -144 19 -171 81 -171 49 0 84 22 98 62 17 49 15 690 -3 731 -12 31 -119 170 -163 213 -168 168 -493 284 -948 340 -122 14 -555 27 -655 18z" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Encomendar;