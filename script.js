const imagens = [
    "./images/dog1.jpg",
    "https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fuploads%2F2022%2F03%2Fdog-2021-09-03-20-59-38-utc-1-scaled.jpg&w=3840&q=75",
    "https://www.petz.com.br/blog/wp-content/uploads/2018/06/cachorros-pequenos.jpg"
];

// addEventListener("evento", uma função)
// () =>
document.getElementById("btn__galeria").addEventListener("click", () => {

    const galeria = document.getElementById("imagens__galeria");

    galeria.innerHTML = ""; // limpa o conteudo anterior

    //- forEach(): Executa uma função para cada elemento (sem retorno).
    imagens.forEach((src)=> {
        const img = document.createElement("img") // cria um elemento
        img.src = src;
        img.alt = "Foto de um cachorro" 
        galeria.appendChild(img); // colocando imagens dentro da galeria
    });
});