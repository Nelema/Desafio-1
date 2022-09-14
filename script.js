
const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none";
   } 
    
    function encriptar(stringEncriptada){
        let matrizCodigo = [["a", "ai"] , ["e", "enter"], ["i","imes"], ["o", "ober"], ["u","ufat"]];  
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i=0; i< matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
         }
         return stringEncriptada;
        }
        function btnDesencriptar() {
            const textoDesencriptado = desencriptar(inputTexto.value);
            mensagem.value = textoDesencriptado
            mensagem.style.backgroundImage="none"
        }                          
         
        function desencriptar(stringDesencriptada){
            let matrizCodigo = [["a", "ai"] , ["e", "enter"], ["i","imes"], ["o", "ober"], ["u","ufat"]];
                   
            for(let i=0; i< matrizCodigo.length; i++){
                if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                    stringDesencriptada= stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
             }
        }
         return stringDesencriptada;
        }
                    
                function btnCopiar(){
                    const textCopiado= document.querySelector(".mensagem");
                    textCopiado.select();
                    navigator.clipboard.writeText(textCopiado.value);
                    alert("Texto copiado, cole ele na área de transferência!");
                    window.location.reload();               
                    
         }

                
        
              
           
        
        
