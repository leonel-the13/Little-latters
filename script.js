const introduces = [
    "Minha princesa,",
    "Amor da minha vida,",
    "vida,",
    "Dona do meu cartão do BAI,",
];

const corpo = [
    "cada dia ao seu lado é um sonho realizado.",
    "você ilumina minha vida de formas que nem sei descrever.",
    "meu coração dispara só de pensar em você.",
    "o seu sorriso é a coisa mais linda que já vi."
];

const finais = [
    "Com todo o meu amor,",
    "Para sempre seu,",
    "Com carinho eterno,",
    "Seu para sempre,"
];

const assinaturas = [
    "Seu programador xtremamente apaixonado ❤️",
    "Com amor, masgo! 💻",
    "Seu eterno romântico 💕",
    "O seu maior fã ❤️"
];

function gerarCarta() {
    const introducao = introduces[Math.floor(Math.random() * introduces.length)];
    const corpoDaCarta = corpo[Math.floor(Math.random() * corpo.length)];
    const final = finais[Math.floor(Math.random() * finais.length)];
    const assinatura = assinaturas[Math.floor(Math.random() * assinaturas.length)];

    const carta = `${introducao}<br><br>${corpoDaCarta}<br><br>${final}<br>${assinatura}`;
    document.getElementById("carta").innerHTML = carta;
}