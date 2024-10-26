function filterLocations(type) {
    const locais = document.getElementById("listaLocais");
    locais.innerHTML = "";  // Limpa a lista

    let filteredLocais;

    if (type === 'abrigos') {
        filteredLocais = [
            "Abrigo Central - Rua da Solidariedade, 123",
            "Abrigo Norte - Rua dos Abrigos, 789"
        ];
    } else if (type === 'rotasSeguras') {
        filteredLocais = [
            "Rota Segura 1 - Avenida da Esperança",
            "Rota Segura 2 - Rua das Flores"
        ];
    } else if (type === 'suprimentos') {
        filteredLocais = [
            "Ponto de Suprimentos - Igreja Local - Avenida da Esperança, 456",
            "Ponto de Água Potável - Praça da Paz, 101"
        ];
    } else {
        filteredLocais = [
            "Abrigo Central - Rua da Solidariedade, 123",
            "Ponto de Suprimentos - Igreja Local - Avenida da Esperança, 456",
            "Abrigo Norte - Rua dos Abrigos, 789",
            "Ponto de Água Potável - Praça da Paz, 101"
        ];
    }

    filteredLocais.forEach(local => {
        const li = document.createElement("li");
        li.textContent = local;
        locais.appendChild(li);
    });
}
