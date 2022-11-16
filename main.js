function createGame(player1, hour, player2) {
  return `
<li>
    <img title="${player1.toUpperCase()}" src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img title="${player2.toUpperCase()}" src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
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
  createCard("20/11", "domingo", createGame("qatar", "13:00", "equador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "ira") +
      createGame("senegal", "13:00", "holanda") +
      createGame("estados unidos", "16:00", "gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arabia saudita") +
      createGame("dinamarca", "10:00", "tunisia") +
      createGame("méxico", "13:00", "polônia") +
      createGame("france", "16:00", "austrália")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croácia") +
      createGame("alemanha", "10:00", "japão") +
      createGame("espanha", "13:00", "costa rica") +
      createGame("bélgica", "16:00", "canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suiça", "07:00", "camarões") +
      createGame("uruguay", "10:00", "coréia do sul") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brasil", "16:00", "sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "07:00", "ira") +
      createGame("qatar", "10:00", "senegal") +
      createGame("holanda", "13:00", "equador") +
      createGame("inglaterra", "16:00", "estados unidos")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "austrália") +
      createGame("polônia", "10:00", "arabia saudita") +
      createGame("france", "13:00", "dinamarca") +
      createGame("argentina", "16:00", "méxico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japão", "07:00", "costa rica") +
      createGame("bélgica", "10:00", "marrocos") +
      createGame("croácia", "13:00", "canadá") +
      createGame("espanha", "16:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camarões", "07:00", "sérvia") +
      createGame("coréia do sul", "10:00", "ghana") +
      createGame("brasil", "13:00", "suiça") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "12:00", "senegal") +
      createGame("holanda", "12:00", "qatar") +
      createGame("ira", "16:00", "estados unidos") +
      createGame("gales", "16:00", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "france") +
      createGame("austrália", "12:00", "dinamarca") +
      createGame("polônia", "16:00", "argentina") +
      createGame("arabia saudita", "16:00", "méxico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croácia", "12:00", "bélgica") +
      createGame("canadá", "12:00", "marrocos") +
      createGame("japão", "16:00", "espanha") +
      createGame("costa rica", "16:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coréia do sul", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("sérvia", "16:00", "suiça") +
      createGame("camarões", "16:00", "brasil")
  )
