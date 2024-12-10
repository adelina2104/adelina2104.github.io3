function schimbaPagina(pagina) {
    // Ascunde toate paginile
    document.getElementById('acasa').style.display = 'none';
    document.getElementById('despre').style.display = 'none';
    document.getElementById('poezii').style.display = 'none';

    // Afișează pagina selectată
    document.getElementById(pagina).style.display = 'block';
}