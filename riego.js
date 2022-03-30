/* Dudas
-Precisión de los campos numéricos
-Si están bien puestas las unidades
-Acceso a las tablas de materiales, si las tiene en otros formatos

*/


function calcular(){
    
    let output_caudal = document.getElementById("caudal_result");
    let input_caudal = document.getElementById("caudal_aspersor");
    let eti_caudal = document.getElementById("eti_caudal");
    let output_caudal_metros_cubicos = document.getElementById("caudalm3");
    let check_circuito_cerrado = document.getElementById("circuito_cerrado");
    let input_dist_entre_aspersores = document.getElementById("dist_entre_aspersores");
    let input_dist_sector = document. getElementById("dist_sector");
    let output_longitud_result = document.getElementById("longitud_result");
    let input_num_aspersores = document.getElementById("num_aspersores");
    let input_dist_primer_aspersor = document.getElementById("dist_primer_aspersor");
    let output_caudal_total_result=document.getElementById("caudal_total_result");
    let output_di_teorico_result=document.getElementById("di_teorico_result");
    let input_vel_admisible = document.getElementById("vel_admisible");

    if(check_circuito_cerrado.checked){
        eti_caudal.innerText="Caudal (circuito cerrado)";
        aux = input_dist_sector.value/2;        
        output_longitud_result.value = (input_num_aspersores.value*input_dist_entre_aspersores.value-input_dist_primer_aspersor.value)/2;
        output_caudal_metros_cubicos.value=output_caudal.value/1000/3600;
        output_caudal_total_result.value = output_caudal_metros_cubicos.value/2;
    }
    else
    {
        eti_caudal.innerText="Caudal (sector lineal)";
        aux = input_caudal.value * input_dist_entre_aspersores.value; 
        output_longitud_result.value = input_num_aspersores.value*input_dist_entre_aspersores.value+input_dist_primer_aspersor.value;
        output_caudal_metros_cubicos.value=output_caudal.value/1000/3600;
        output_caudal_total_result.value = output_caudal_metros_cubicos.value;
    }
    output_caudal.value = aux;    
    output_caudal.value += " l/h";
    output_caudal_metros_cubicos.value += " m³";
    output_di_teorico_result=(2*((output_caudal_total_result/(input_vel_admisible*3,14159265359))^(1/2)))*1000
}

window.onload = function() {
    document.getElementById("enviar").addEventListener("click",calcular);

}