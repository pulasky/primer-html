const descripciones = ["Colina en un lago", "Campo de girasoles", 
    "Anochecer en la costa", "Arco de roca", "Campo de flores", 
    "Amanecer en el mar"];   
    function mostrarinfo(index) {
        const infoDiv= document.getElementById("info");
        infoDiv.innerHTML="<p>" + descripciones[index] + "</p>";
        infoDiv.classList.remove("hidden");}