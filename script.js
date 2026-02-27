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

//pesquisa
//para criar listas usamos array []

const listaRacas = [
    {
        nome: "Labrador",
        caracteristica: "Protetor"
    },

    {
        nome: "Pastor Alemão",
        caracteristica: "Corajoso"
    },

    {
        nome: "Yorkshire",
        caracteristica: "Caçador"
    },
];

//capturando input
document.getElementById("campo-filtro").addEventListener("input", (e) => {
    // o "e" e o elemento digitado/o testo digitado no input
    const valor = e.target.value.toLowerCase();
    const resultado = document.getElementById("resultado");

    // informando ao html que ele ira iniciar vazio
    resultado.innerHTML = "";
    //  filtrando no array  
    // o metodo de array filter, ele recebe  array.filter(() =>{})
    listaRacas.filter((raca) => raca.nome.toLowerCase().includes(valor)).forEach((raca) => {
        const li = document.createElement("li");
        li.textContent = `${raca.nome} - ${raca.caracteristica}`;
        resultado.appendChild(li)
    })



})