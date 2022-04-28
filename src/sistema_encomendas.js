function escolherCobertura() {
    var a = document.getElementById("cobertura");
    var cob = a.options[a.selectedIndex].value;
    var bolo_cobertura = document.getElementById("bolo_cobertura");
    if (cob == 1) {
        bolo_cobertura.style.fill = 'transparent';//NADA
    }
    if (cob == 2) {
        bolo_cobertura.style.fill = '#3B1007';//CHOCOLATE
    }
    if (cob == 3) {
        bolo_cobertura.style.fill = '#F4FCE2';//COCO
    }
    if (cob == 4) {
        bolo_cobertura.style.fill = '#ff6961';//CALDA DE MORANGO
    }
}
function escolherMassa() {
    var b = document.getElementById("massa");
    var cob = b.options[b.selectedIndex].value;
    var bolo_massa = document.getElementById("bolo_massa");
    if (cob == 1) {
        bolo_massa.style.fill = '#FFFFC2';//BAUNILHA
    }
    if (cob == 2) {
        bolo_massa.style.fill = '#493D26';//CHOCOLATE
    }
    if (cob == 3) {
        bolo_massa.style.fill = '#F8F8FF';//COCO
    }
    if (cob == 4) {
        bolo_massa.style.fill = '#ed9121';//CENOURA
    }
}
function escolherRecheio() {
    var cobertura = document.getElementById("recheio");
    var cob = cobertura.options[cobertura.selectedIndex].value;
    var bolo_cobertura = document.getElementById("bolo_recheio");

    if (cob == 1) {
        bolo_cobertura.style.fill = 'transparent';//NADA
    }
    else {
        if (cob == 2) {
            bolo_cobertura.style.fill = '#402b27';//BRIGADEIRO
        }
        else {
            if (cob == 3) {
                bolo_cobertura.style.fill = '#8b5742';//Doce de Leite
            }
            else {
                if (cob == 4) {
                    bolo_cobertura.style.fill = '#FFFFF0';//Prestigio
                }
                else {
                    if (cob == 5) {
                        bolo_cobertura.style.fill = '#ede6e3';//Creme de Limão
                    }
                    else {
                        if (cob == 6) {
                            bolo_cobertura.style.fill = '#34292a';//Ganache
                        }
                    }
                }
            }
        }
    }
}
export function gerar() {
    escolherCobertura();
    escolherMassa();
    escolherRecheio();
}