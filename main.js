function createGame(player1, hour, player2) {
  return `
<li>
    <img title="${player1}" src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img title="${player2}" src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard("20/11", "domingo", createGame("Qatar", "13:00", "Equador")) +
    
createCard(
    "21/11",
    "segunda",
    createGame("Inglaterra", "10:00", "Irã") +
      createGame("Senegal", "13:00", "Holanda") +
      createGame("EUA", "16:00", "Gales")
  ) +

  createCard(
    "22/11",
    "terça",
    createGame("Argentina", "07:00", "Arabia Saudita") +
      createGame("Dinamarca", "10:00", "Tunisia") +
      createGame("México", "13:00", "Polônia") +
      createGame("França", "16:00", "Austrália")
  ) +

  createCard(
    "23/11",
    "quarta",
    createGame("Marrocos", "07:00", "Croácia") +
      createGame("Alemanha", "10:00", "Japão") +
      createGame("Espanha", "13:00", "Costa Rica") +
      createGame("Bélgica", "16:00", "Canadá")
  ) +

  createCard(
    "24/11",
    "quinta",
    createGame("Suiça", "07:00", "Camarões") +
      createGame("Uruguay", "10:00", "SouthKorea") +
      createGame("Portugal", "13:00", "Ghana") +
      createGame("Brasil", "16:00", "Sérvia")
  ) +

   createCard(
     "25/11",
     "sexta",
     createGame("Gales", "07:00", "Irã") +
       createGame("Qatar", "10:00", "Senegal") +
       createGame("Holanda", "13:00", "Equador") +
       createGame("Inglaterra", "16:00", "EUA")
   ) +

   createCard(
     "26/11",
     "sábado",
     createGame("Tunisia", "07:00", "Austrália") +
       createGame("Polônia", "10:00", "Arabia Saudita") +
       createGame("França", "13:00", "Dinamarca") +
       createGame("Argentina", "16:00", "México")
   ) +

  
   createCard(
     "27/11",
     "domingo",
     createGame("Japão", "07:00", "Costa Rica") +
       createGame("Bélgica", "10:00", "Marrocos") +
       createGame("Croácia", "13:00", "Canadá") +
       createGame("Espanha", "16:00", "Alemanha")
   ) +
  
  createCard(
    "28/11",
    "segunda",
    createGame("Camarões", "07:00", "Sérvia") +
      createGame("SouthKorea", "10:00", "Ghana") +
      createGame("Brasil", "13:00", "Suiça") +
      createGame("Portugal", "16:00", "Uruguay")
  ) +

  createCard(
    "29/11",
    "terça",
    createGame("Equador", "12:00", "Senegal") +
      createGame("Holanda", "12:00", "Qatar") +
      createGame("Irã", "16:00", "EUA") +
      createGame("Gales", "16:00", "Inglaterra")
  ) +

  createCard(
    "30/11",
    "quarta",
    createGame("Tunisia", "12:00", "França") +
      createGame("Austrália", "12:00", "Dinamarca") +
      createGame("Polônia", "16:00", "Argentina") +
      createGame("Arabia Saudita", "16:00", "México")
  ) +

  createCard(
    "01/12",
    "quinta",
    createGame("Croácia", "12:00", "Bélgica") +
      createGame("Canadá", "12:00", "Marrocos") +
      createGame("Japão", "16:00", "Espanha") +
      createGame("Costa Rica", "16:00", "Alemanha")
  ) +

  createCard(
    "02/12",
    "sexta",
    createGame("SouthKorea", "12:00", "Portugal") +
      createGame("Ghana", "12:00", "Uruguay") +
      createGame("Sérvia", "16:00", "Suiça") +
      createGame("Camarões", "16:00", "Brasil")
  )
  

