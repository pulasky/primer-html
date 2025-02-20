 const descripciones= [
    "Colina en un lago",
    "Campo de girasoles",
    "Puesta de sol en la costa",
    "Arco de roca",
    "Campo de flores",
    "Amanecer en el mar"];
    function mostrarInfo(index) {
      const infoDiv = document.getElementById("info");
      if (index >= 0 && index < descripciones.length)
    {infoDiv.textContent = descripciones[index];infoDiv.classList.remove("hidden");} 
      else { console.error("Imagen fuera de rango");}}