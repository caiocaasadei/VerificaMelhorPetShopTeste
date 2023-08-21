import React, { useState } from "react";
import './IdentificaMelhorPetShop.css'

function IdentificaMelhorPetShop(){
    
    //Declaração das variáveis de estado
    const [resultado, setResultado] = useState(""); 
    const [valorResultado, setValorResultado] = useState(""); 
    const [qtdCaesGrandes, setQtdCaesGrandes] = useState(0); 
    const [qtdCaesPequenos, setQtdCaesPequenos] = useState(0); 
    const [dataPretendida, setDataPretendida] = useState(""); 


    //Função responsável por realizar o cálculo ao clicar no botão criado
    function clickResultado(){

        //Variáveis que irão receber os preços calculados para cada petshop
        let precoMeuCaninoFeliz = 0;
        let precoVaiRex = 0;
        let precoChowChawgas = 0;

        //Verificação da data para validar se é final de semana
        const dataEscolhida = new Date(dataPretendida); 
        const dataEFinalDeSemana = dataEscolhida.getDay() === 5 || dataEscolhida.getDay() === 6; //5 equivalendo à sábado e 6 para domingo

        if (!dataEFinalDeSemana){ //Caso não seja final de semana, os valores para dois petshops são diferentes
            precoMeuCaninoFeliz = (20 * qtdCaesPequenos) + (40 * qtdCaesGrandes);
            precoVaiRex = (15 * qtdCaesPequenos) + (50 * qtdCaesGrandes);
        } else {
            precoMeuCaninoFeliz = (24 * qtdCaesPequenos) + (48 * qtdCaesGrandes);
            precoVaiRex = (20 * qtdCaesPequenos) + (55 * qtdCaesGrandes);
        }

        precoChowChawgas = (30 * qtdCaesPequenos) + (45 * qtdCaesGrandes);

        //Validação para quando os resultados são diferentes entre si
        if ((precoMeuCaninoFeliz !== precoVaiRex) && (precoMeuCaninoFeliz !== precoChowChawgas) && (precoVaiRex !== precoChowChawgas)) {
            if ((precoMeuCaninoFeliz < precoVaiRex) && (precoMeuCaninoFeliz < precoChowChawgas)) {  
                setResultado("MEU CANINO FELIZ"); //Caso o menor valor seja o Canino Feliz
                setValorResultado(precoMeuCaninoFeliz);
            } else if ((precoVaiRex < precoMeuCaninoFeliz) && (precoVaiRex < precoChowChawgas)) {
                setResultado("VAI REX"); //Caso o menor valor seja o Vai Rex 
                setValorResultado(precoVaiRex);
            } else {
                setResultado("CHOW CHAWGAS");
                setValorResultado(precoChowChawgas);
            }
        } else{
            
            //Validações que levam em consideração a questão da distância e igualdades dos preços
            if ((precoMeuCaninoFeliz === precoVaiRex) && (precoMeuCaninoFeliz < precoChowChawgas)){
                setResultado("VAI REX");
                setValorResultado(precoVaiRex);
            }else if (precoMeuCaninoFeliz > precoChowChawgas){
                setResultado("CHOW CHAWGAS");
                setValorResultado(precoChowChawgas);
            }
 
            if ((precoMeuCaninoFeliz === precoChowChawgas) && (precoMeuCaninoFeliz < precoVaiRex)){
                setResultado("CHOW CHAWGAS");
                setValorResultado(precoChowChawgas);
            }else if (precoMeuCaninoFeliz > precoVaiRex){
                setResultado("VAI REX");
                setValorResultado(precoVaiRex);
            }  
            
            if ((precoVaiRex === precoChowChawgas) && (precoVaiRex < precoMeuCaninoFeliz)){
                setResultado("CHOW CHAWGAS");
                setValorResultado(precoChowChawgas);
            }else if(precoVaiRex > precoMeuCaninoFeliz){
                setResultado("MEU CANINO FELIZ");
                setValorResultado(precoMeuCaninoFeliz);
            }
            
            if((precoMeuCaninoFeliz === precoVaiRex) &&  (precoVaiRex === precoChowChawgas)){
                setResultado("CHOW CHAWGAS");
                setValorResultado(precoChowChawgas);
            }
            
        }
    }

    return(
         <div>
            <h1>Melhor PetShop (Teste Prático)</h1>
            <form>
                <h1 className="dataLabel">Data de ida ao PetShop:</h1>
                <input
                    className="data"
                    type="date"
                    id="dataP"
                    name="dataP"
                    value={dataPretendida}
                    onChange={(e) => setDataPretendida(e.target.value)} 
                />
            </form>

            <form>
                <h1 className="quantidadeCaesPequenos">Quantidade de cães pequenos:</h1>
                <input
                    type="text"
                    id="nameInputP"
                    name="nameInputP"
                    value={qtdCaesPequenos}
                    onChange={(e) => setQtdCaesPequenos(e.target.value)}
                />
            </form>

            <form>
                <h1 className="quantidadeCaesGrandes">Quantidade de cães grandes:</h1>
                <input
                    type="text"
                    id="nameInputG"
                    name="nameInputG"
                    value={qtdCaesGrandes}
                    onChange={(e) => setQtdCaesGrandes(e.target.value)}
                />
            </form>

            <form>
                <button onClick={clickResultado} type="button">Qual o melhor PetShop?</button>
                <div className="resultado">{resultado} - R$ {valorResultado},00</div>
            </form>
         </div>
    );
}

export default IdentificaMelhorPetShop;
