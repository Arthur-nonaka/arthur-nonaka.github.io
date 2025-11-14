function mostrarDetalhes(element) {
  const title = element.querySelector(".overlay p").innerText;
  const imageSrc = element.querySelector("img").src;
  const description = element.dataset.description;
  let techs = element.dataset.techs;
  techs = techs.split(",").map((item) => item.trim());

  const videoSrc = element.dataset.video;

  const modal = document.getElementById("modal");
  modal.querySelector("h2").innerText = title;
  modal.querySelector("p").innerText = description;
  const techsDiv = document.getElementById("techs");
  techsDiv.innerHTML = "";
  techs.forEach((tech) => {
    const option = document.createElement("div");
    option.innerText = tech;
    option.setAttribute("id", "tech");
    techsDiv.appendChild(option);
  });
  modal.querySelector("video source").src = videoSrc;
  modal.querySelector("video").load();

  modal.style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function abrirContato() {
  window.location.href = "#contato";
}

window.onclick = function (event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

particlesJS(
  "particles-js",
  {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#ffffff", "#000"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: {
          value: ["#ffffff", "#000", "#2223aa"],
        },
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    retina_detect: true,
  },
  function () {
    console.log("particles.js loaded - callback");
  }
);

const data = [
  {
    title: "Orquestrador",
    image: "./imgs/Orquestrador.png",
    description:
      "Sistema completo de gerenciamento e orquestração de transmissões de vídeo em tempo real, desenvolvido para automatizar e visualizar conexões entre dispositivos encoders e decoders em múltiplos gateways distribuídos geograficamente para a empresa LAM TECH.",
    video: "./videos/Orquestrador.mp4",
    tech: ["React", "Node", "Docker", "MYSQL", "API", "MVC", "Autenticação JWT"],
  },
  {
    title: "APAE - Bem Estar Gestão",
    image: "./imgs/APAE.png",
    description:
      "Sistema de gestão de nutricionismo e controle de compras e despesas para a APAE de Presidente Prudente.",
    video: "./videos/APAE.mp4",
    tech: ["PHP", "HTML", "CSS", "MySQL", "JS Puro"],
  },
  {
    title: "Jogo Volei 3D",
    image: "./imgs/Volei3D.png",
    description: "Jogo de volei 3D feito com Unity, com multiplayer online.",
    video: "./videos/Jogo_Volei.mp4",
    tech: ["C#", "Mirror", "Network", "Unity"],
  },
  {
    title: "Sorteador/Twitch",
    image: "./imgs/Sorteador.png",
    description:
      "Site para sorteio de nomes, feito para ser usado em lives da Twitch. Com controle de viewers VIPs",
    video: "./videos/Sorteador.mp4",
    tech: ["Next", "Node", "API-Twitch", "Electron"],
  },
  {
    title: "Ensino Estrutura De Dados",
    image: "./imgs/EnsinoEstruturaDados.png",
    description:
      "Site para ensino de estrutura de dados, com aulas, exercícios e correções automáticas. Como também gamificação com trilhas e customização de personageem",
    video: "./videos/Ensino.mp4",
    tech: ["Estrutura De Dados", "PHP", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Campo Minado",
    image: "./imgs/Campo-Minado.png",
    description: "Jogo de campo minado feito com React para aprender a usa-la.",
    video: "./videos/Campo-Minado.mp4",
    tech: ["React", "CSS"],
  },
];

const container = document.getElementById("projetos-container");
data.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.className = "projeto";
  projectElement.dataset.description = project.description;
  projectElement.dataset.video = project.video;
  projectElement.dataset.techs = project.tech;
  projectElement.onclick = () => mostrarDetalhes(projectElement);
  projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <div class="overlay">
          <div class="overlay-border"></div>
          <p>${project.title}</p>
        </div>
        <div class="gradiant-overlay"></div>
      `;
  container.appendChild(projectElement);
});
