// ============================================================
//  mockData.js — Arena de Campeonatos
//  Dados simulados para o Projeto Integrador SENAC 2026
// ============================================================

// ------------------------------------------------------------
//  USUÁRIOS
// ------------------------------------------------------------
export const mockUsers = [
  {
    id: "u1",
    nome: "Lucas Ferreira",
    apelido: "LucasFPS",
    email: "lucas@arena.com",
    senha: "123456",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=LucasFPS",
  },
  {
    id: "u2",
    nome: "Mariana Costa",
    apelido: "MariSniper",
    email: "mariana@arena.com",
    senha: "123456",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=MariSniper",
  },
  {
    id: "u3",
    nome: "Rafael Oliveira",
    apelido: "RafaZero",
    email: "rafael@arena.com",
    senha: "123456",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=RafaZero",
  },
  {
    id: "u4",
    nome: "Beatriz Lima",
    apelido: "BeatGG",
    email: "beatriz@arena.com",
    senha: "123456",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=BeatGG",
  },
  {
    id: "u5",
    nome: "Carlos Mendes",
    apelido: "CarlosML",
    email: "carlos@arena.com",
    senha: "123456",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=CarlosML",
  },
  {
    id: "u6",
    nome: "Fernanda Souza",
    apelido: "FernPro",
    email: "fernanda@arena.com",
    senha: "123456",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=FernPro",
  },
  {
    id: "u7",
    nome: "Diego Alves",
    apelido: "DiegoAce",
    email: "diego@arena.com",
    senha: "123456",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=DiegoAce",
  },
  {
    id: "u8",
    nome: "Juliana Rocha",
    apelido: "JuliRush",
    email: "juliana@arena.com",
    senha: "123456",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=JuliRush",
  },
];

// ------------------------------------------------------------
//  CAMPEONATOS
// ------------------------------------------------------------
export const mockChampionships = [

  // ── 1. ELIMINATÓRIA SIMPLES ─────────────────────────────
  {
    id: "c1",
    nome: "Copa Valorant SP 2026",
    jogo: "Valorant",
    imagem: "https://placehold.co/800x300/FF4655/ffffff?text=Copa+Valorant+SP",
    premiacao: "R$ 5.000 em dinheiro + troféu",
    dataProximoJogo: "2026-04-20T15:00:00",
    disponivelParaInscricao: false,
    status: "em_andamento",       // "inscricoes_abertas" | "em_andamento" | "encerrado"
    rank: "Ouro",                 // Patente mínima exigida
    formato: "single_elimination",
    descricao: "O maior campeonato amador de Valorant do estado de SP. Times de 5 jogadores disputam em formato mata-mata até a grande final.",
    regras: "1. Proibido uso de cheats ou softwares de terceiros.\n2. Times devem estar prontos 10 min antes da partida.\n3. Substituições permitidas apenas entre fases.\n4. Em caso de desistência, o adversário avança automaticamente.",
    dono: {
      nome: "Lucas Ferreira",
      apelido: "LucasFPS",
      email: "lucas@arena.com",
    },
    equipes: [
      {
        id: "e1",
        nomeEquipe: "Phantom Squad",
        logoEquipe: "https://placehold.co/80x80/FF4655/ffffff?text=PS",
        jogadores: [
          { nome: "Rafael Oliveira",  apelido: "RafaZero",  email: "rafael@arena.com"   },
          { nome: "Carlos Mendes",    apelido: "CarlosML",   email: "carlos@arena.com"   },
          { nome: "Diego Alves",      apelido: "DiegoAce",   email: "diego@arena.com"    },
          { nome: "Juliana Rocha",    apelido: "JuliRush",   email: "juliana@arena.com"  },
          { nome: "Fernanda Souza",   apelido: "FernPro",    email: "fernanda@arena.com" },
        ],
      },
      {
        id: "e2",
        nomeEquipe: "Night Owls",
        logoEquipe: "https://placehold.co/80x80/1a1a2e/ffffff?text=NO",
        jogadores: [
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com" },
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com" },
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"   },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"  },
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"   },
        ],
      },
      {
        id: "e3",
        nomeEquipe: "Red Dragons",
        logoEquipe: "https://placehold.co/80x80/c0392b/ffffff?text=RD",
        jogadores: [
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com"  },
          { nome: "Fernanda Souza", apelido: "FernPro",    email: "fernanda@arena.com" },
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com"  },
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
        ],
      },
      {
        id: "e4",
        nomeEquipe: "Ice Wolves",
        logoEquipe: "https://placehold.co/80x80/2980b9/ffffff?text=IW",
        jogadores: [
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"  },
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"   },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com" },
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com" },
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"  },
        ],
      },
    ],
  },

  // ── 2. ROUND ROBIN ──────────────────────────────────────
  {
    id: "c2",
    nome: "Liga CS2 — Todos Contra Todos",
    jogo: "CS2",
    imagem: "https://placehold.co/800x300/f39c12/ffffff?text=Liga+CS2",
    premiacao: "R$ 2.000 + medalhas para o pódio",
    dataProximoJogo: "2026-04-25T18:00:00",
    disponivelParaInscricao: true,
    status: "inscricoes_abertas",
    rank: "Prata",
    formato: "round_robin",
    descricao: "Competição onde todos os times se enfrentam entre si. A classificação final é definida por pontos: vitória vale 3 pts, empate 1 pt, derrota 0 pts.",
    regras: "1. Mapas definidos por sorteio antes de cada rodada.\n2. Máximo de 2 empates aceitos por fair play.\n3. Resultados devem ser enviados com print no Discord oficial.\n4. Times com 2 WO são desclassificados.",
    dono: {
      nome: "Mariana Costa",
      apelido: "MariSniper",
      email: "mariana@arena.com",
    },
    equipes: [
      {
        id: "e5",
        nomeEquipe: "Flash Gamers",
        logoEquipe: "https://placehold.co/80x80/f39c12/ffffff?text=FG",
        jogadores: [
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com"  },
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"    },
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Fernanda Souza", apelido: "FernPro",    email: "fernanda@arena.com" },
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com"  },
        ],
      },
      {
        id: "e6",
        nomeEquipe: "Storm Breakers",
        logoEquipe: "https://placehold.co/80x80/8e44ad/ffffff?text=SB",
        jogadores: [
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com"  },
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"    },
        ],
      },
      {
        id: "e7",
        nomeEquipe: "Toxic Frogs",
        logoEquipe: "https://placehold.co/80x80/27ae60/ffffff?text=TF",
        jogadores: [
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com"  },
          { nome: "Fernanda Souza", apelido: "FernPro",    email: "fernanda@arena.com" },
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
        ],
      },
    ],
  },

  // ── 3. FASE DE GRUPOS + MATA-MATA ───────────────────────
  {
    id: "c3",
    nome: "World LoL Championship — BR Qualifier",
    jogo: "League of Legends",
    imagem: "https://placehold.co/800x300/3498db/ffffff?text=LoL+BR+Qualifier",
    premiacao: "Vaga para a etapa nacional + R$ 8.000",
    dataProximoJogo: "2026-05-03T14:00:00",
    disponivelParaInscricao: true,
    status: "inscricoes_abertas",
    rank: "Platina",
    formato: "groups_and_knockout",
    descricao: "Fase classificatória para o campeonato nacional de LoL. Dois grupos de 4 times — os 2 primeiros de cada grupo avançam para o mata-mata.",
    regras: "1. Apenas contas Platina ou acima permitidas.\n2. Skins e campeões não influenciam no resultado.\n3. Reconexão: máx 10 min de espera.\n4. Decisão de árbitro é final.",
    dono: {
      nome: "Diego Alves",
      apelido: "DiegoAce",
      email: "diego@arena.com",
    },
    grupos: [
      {
        nomeGrupo: "Grupo A",
        equipes: ["e8", "e9"],
      },
      {
        nomeGrupo: "Grupo B",
        equipes: ["e10", "e11"],
      },
    ],
    equipes: [
      {
        id: "e8",
        nomeEquipe: "Blue Sentinels",
        logoEquipe: "https://placehold.co/80x80/3498db/ffffff?text=BS",
        jogadores: [
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com"  },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
        ],
      },
      {
        id: "e9",
        nomeEquipe: "Gold Rush",
        logoEquipe: "https://placehold.co/80x80/f1c40f/333333?text=GR",
        jogadores: [
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"    },
          { nome: "Fernanda Souza", apelido: "FernPro",    email: "fernanda@arena.com" },
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com"  },
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
        ],
      },
      {
        id: "e10",
        nomeEquipe: "Iron Claws",
        logoEquipe: "https://placehold.co/80x80/7f8c8d/ffffff?text=IC",
        jogadores: [
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com"  },
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"    },
          { nome: "Fernanda Souza", apelido: "FernPro",    email: "fernanda@arena.com" },
        ],
      },
      {
        id: "e11",
        nomeEquipe: "Purple Haze",
        logoEquipe: "https://placehold.co/80x80/9b59b6/ffffff?text=PH",
        jogadores: [
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com"  },
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
        ],
      },
    ],
  },

  // ── 4. CHAVE DUPLA (DOUBLE ELIMINATION) ─────────────────
  {
    id: "c4",
    nome: "Torneio Street Fighter 6 — Double Chance",
    jogo: "Street Fighter 6",
    imagem: "https://placehold.co/800x300/e74c3c/ffffff?text=SF6+Double+Elim",
    premiacao: "R$ 1.500 + skin exclusiva",
    dataProximoJogo: "2026-04-18T19:00:00",
    disponivelParaInscricao: false,
    status: "em_andamento",
    rank: "Bronze",
    formato: "double_elimination",
    descricao: "Cada jogador/equipe tem direito a uma segunda chance. Quem perder na chave principal vai para a chave de repescagem. Quem perder na repescagem, está eliminado.",
    regras: "1. Partidas em melhor de 3 rounds.\n2. Final em melhor de 5.\n3. Proibido personagens DLC não licenciados.\n4. Lag intencional implica em desclassificação.",
    dono: {
      nome: "Beatriz Lima",
      apelido: "BeatGG",
      email: "beatriz@arena.com",
    },
    equipes: [
      {
        id: "e12",
        nomeEquipe: "Hadouken Heroes",
        logoEquipe: "https://placehold.co/80x80/e74c3c/ffffff?text=HH",
        jogadores: [
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com"  },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
        ],
      },
      {
        id: "e13",
        nomeEquipe: "Shoryuken Kings",
        logoEquipe: "https://placehold.co/80x80/e67e22/ffffff?text=SK",
        jogadores: [
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"    },
          { nome: "Fernanda Souza", apelido: "FernPro",    email: "fernanda@arena.com" },
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com"  },
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
        ],
      },
      {
        id: "e14",
        nomeEquipe: "Combo Breakers",
        logoEquipe: "https://placehold.co/80x80/1abc9c/ffffff?text=CB",
        jogadores: [
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com"  },
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"    },
          { nome: "Fernanda Souza", apelido: "FernPro",    email: "fernanda@arena.com" },
        ],
      },
      {
        id: "e15",
        nomeEquipe: "Reversal Squad",
        logoEquipe: "https://placehold.co/80x80/2c3e50/ffffff?text=RS",
        jogadores: [
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com"  },
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
        ],
      },
    ],
  },

  // ── 5. SISTEMA SUÍÇO ────────────────────────────────────
  {
    id: "c5",
    nome: "Arena Dota 2 — Sistema Suíço",
    jogo: "Dota 2",
    imagem: "https://placehold.co/800x300/2c3e50/ffffff?text=Dota+2+Swiss",
    premiacao: "R$ 3.500 + itens in-game exclusivos",
    dataProximoJogo: "2026-05-10T16:00:00",
    disponivelParaInscricao: true,
    status: "inscricoes_abertas",
    rank: "Diamante",
    formato: "swiss",
    descricao: "Formato suíço com 5 rodadas. Times são emparelhados por desempenho a cada rodada. Ao final, os 2 times com melhor saldo avançam para a grande final.",
    regras: "1. Pareamento feito automaticamente pelo sistema após cada rodada.\n2. Empates não existem — jogo vai até a decisão.\n3. Times com 0x3 são eliminados antecipadamente.\n4. Pontualidade é obrigatória — atraso de 15 min = WO.",
    dono: {
      nome: "Carlos Mendes",
      apelido: "CarlosML",
      email: "carlos@arena.com",
    },
    rodadas: 5, // campo extra relevante para o formato suíço
    equipes: [
      {
        id: "e16",
        nomeEquipe: "Ancient Keepers",
        logoEquipe: "https://placehold.co/80x80/2c3e50/ffffff?text=AK",
        vitorias: 3,
        derrotas: 1,
        jogadores: [
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com"  },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
        ],
      },
      {
        id: "e17",
        nomeEquipe: "Dire Force",
        logoEquipe: "https://placehold.co/80x80/922b21/ffffff?text=DF",
        vitorias: 2,
        derrotas: 2,
        jogadores: [
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"    },
          { nome: "Fernanda Souza", apelido: "FernPro",    email: "fernanda@arena.com" },
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com"  },
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
        ],
      },
      {
        id: "e18",
        nomeEquipe: "Radiant Rising",
        logoEquipe: "https://placehold.co/80x80/1a5276/ffffff?text=RR",
        vitorias: 1,
        derrotas: 3,
        jogadores: [
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com"  },
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"    },
          { nome: "Fernanda Souza", apelido: "FernPro",    email: "fernanda@arena.com" },
        ],
      },
      {
        id: "e19",
        nomeEquipe: "Mid or Feed",
        logoEquipe: "https://placehold.co/80x80/117a65/ffffff?text=MF",
        vitorias: 4,
        derrotas: 0,
        jogadores: [
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com"  },
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
        ],
      },
    ],
  },

  // ── 6. ENCERRADO (para mostrar histórico) ───────────────
  {
    id: "c6",
    nome: "Torneio Rocket League — Verão 2025",
    jogo: "Rocket League",
    imagem: "https://placehold.co/800x300/16a085/ffffff?text=Rocket+League+Verao",
    premiacao: "R$ 1.200 distribuídos entre top 3",
    dataProximoJogo: null,
    disponivelParaInscricao: false,
    status: "encerrado",
    rank: "Sem restrição",
    formato: "single_elimination",
    descricao: "Edição de verão encerrada. Confira os resultados e o bracket completo.",
    regras: "Campeonato encerrado. Regras arquivadas.",
    dono: {
      nome: "Fernanda Souza",
      apelido: "FernPro",
      email: "fernanda@arena.com",
    },
    equipes: [
      {
        id: "e20",
        nomeEquipe: "Boost Monkeys",
        logoEquipe: "https://placehold.co/80x80/16a085/ffffff?text=BM",
        jogadores: [
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
          { nome: "Rafael Oliveira",apelido: "RafaZero",   email: "rafael@arena.com"   },
          { nome: "Beatriz Lima",   apelido: "BeatGG",     email: "beatriz@arena.com"  },
          { nome: "Carlos Mendes",  apelido: "CarlosML",   email: "carlos@arena.com"   },
        ],
      },
      {
        id: "e21",
        nomeEquipe: "Aerial Artists",
        logoEquipe: "https://placehold.co/80x80/148f77/ffffff?text=AA",
        jogadores: [
          { nome: "Diego Alves",    apelido: "DiegoAce",   email: "diego@arena.com"    },
          { nome: "Fernanda Souza", apelido: "FernPro",    email: "fernanda@arena.com" },
          { nome: "Juliana Rocha",  apelido: "JuliRush",   email: "juliana@arena.com"  },
          { nome: "Lucas Ferreira", apelido: "LucasFPS",   email: "lucas@arena.com"    },
          { nome: "Mariana Costa",  apelido: "MariSniper", email: "mariana@arena.com"  },
        ],
      },
    ],
  },
];

// ------------------------------------------------------------
//  PARTIDAS
// ------------------------------------------------------------
export const mockMatches = [

  // ── Campeonato c1 — Copa Valorant SP (single_elimination) ─
  {
    id: "m1",
    campeonatoId: "c1",
    fase: "Quartas de Final",
    equipes: ["Phantom Squad", "Night Owls"],
    dataPartida: "2026-04-14T15:00:00",
    placar: { "Phantom Squad": 13, "Night Owls": 7 },
    vencedor: ["Phantom Squad"],
    status: "finalizado",
  },
  {
    id: "m2",
    campeonatoId: "c1",
    fase: "Quartas de Final",
    equipes: ["Red Dragons", "Ice Wolves"],
    dataPartida: "2026-04-14T17:00:00",
    placar: { "Red Dragons": 9, "Ice Wolves": 13 },
    vencedor: ["Ice Wolves"],
    status: "finalizado",
  },
  {
    id: "m3",
    campeonatoId: "c1",
    fase: "Semifinal",
    equipes: ["Phantom Squad", "Ice Wolves"],
    dataPartida: "2026-04-20T15:00:00",
    placar: {},
    vencedor: [],
    status: "agendado",
  },

  // ── Campeonato c2 — Liga CS2 (round_robin) ──────────────
  {
    id: "m4",
    campeonatoId: "c2",
    fase: "Rodada 1",
    equipes: ["Flash Gamers", "Storm Breakers"],
    dataPartida: "2026-04-25T18:00:00",
    placar: {},
    vencedor: [],
    status: "agendado",
  },
  {
    id: "m5",
    campeonatoId: "c2",
    fase: "Rodada 1",
    equipes: ["Storm Breakers", "Toxic Frogs"],
    dataPartida: "2026-04-25T20:00:00",
    placar: {},
    vencedor: [],
    status: "agendado",
  },
  {
    id: "m6",
    campeonatoId: "c2",
    fase: "Rodada 2",
    equipes: ["Flash Gamers", "Toxic Frogs"],
    dataPartida: "2026-04-26T18:00:00",
    placar: {},
    vencedor: [],
    status: "agendado",
  },

  // ── Campeonato c4 — SF6 Double Elimination ──────────────
  {
    id: "m7",
    campeonatoId: "c4",
    fase: "Upper Bracket — Round 1",
    equipes: ["Hadouken Heroes", "Shoryuken Kings"],
    dataPartida: "2026-04-16T19:00:00",
    placar: { "Hadouken Heroes": 3, "Shoryuken Kings": 1 },
    vencedor: ["Hadouken Heroes"],
    status: "finalizado",
  },
  {
    id: "m8",
    campeonatoId: "c4",
    fase: "Upper Bracket — Round 1",
    equipes: ["Combo Breakers", "Reversal Squad"],
    dataPartida: "2026-04-16T21:00:00",
    placar: { "Combo Breakers": 2, "Reversal Squad": 3 },
    vencedor: ["Reversal Squad"],
    status: "finalizado",
  },
  {
    id: "m9",
    campeonatoId: "c4",
    fase: "Lower Bracket — Round 1",
    equipes: ["Shoryuken Kings", "Combo Breakers"],
    dataPartida: "2026-04-18T19:00:00",
    placar: {},
    vencedor: [],
    status: "agendado",
  },
  {
    id: "m10",
    campeonatoId: "c4",
    fase: "Upper Bracket — Final",
    equipes: ["Hadouken Heroes", "Reversal Squad"],
    dataPartida: "2026-04-18T21:00:00",
    placar: {},
    vencedor: [],
    status: "agendado",
  },

  // ── Campeonato c5 — Dota 2 Swiss ────────────────────────
  {
    id: "m11",
    campeonatoId: "c5",
    fase: "Rodada 1",
    equipes: ["Mid or Feed", "Dire Force"],
    dataPartida: "2026-04-28T16:00:00",
    placar: { "Mid or Feed": 1, "Dire Force": 0 },
    vencedor: ["Mid or Feed"],
    status: "finalizado",
  },
  {
    id: "m12",
    campeonatoId: "c5",
    fase: "Rodada 1",
    equipes: ["Ancient Keepers", "Radiant Rising"],
    dataPartida: "2026-04-28T18:00:00",
    placar: { "Ancient Keepers": 1, "Radiant Rising": 0 },
    vencedor: ["Ancient Keepers"],
    status: "finalizado",
  },
  {
    id: "m13",
    campeonatoId: "c5",
    fase: "Rodada 2",
    equipes: ["Mid or Feed", "Ancient Keepers"],
    dataPartida: "2026-04-30T16:00:00",
    placar: { "Mid or Feed": 1, "Ancient Keepers": 0 },
    vencedor: ["Mid or Feed"],
    status: "finalizado",
  },
  {
    id: "m14",
    campeonatoId: "c5",
    fase: "Rodada 3",
    equipes: ["Mid or Feed", "A definir"],
    dataPartida: "2026-05-10T16:00:00",
    placar: {},
    vencedor: [],
    status: "agendado",
  },

  // ── Campeonato c6 — Rocket League Encerrado ─────────────
  {
    id: "m15",
    campeonatoId: "c6",
    fase: "Final",
    equipes: ["Boost Monkeys", "Aerial Artists"],
    dataPartida: "2025-12-20T18:00:00",
    placar: { "Boost Monkeys": 4, "Aerial Artists": 2 },
    vencedor: ["Boost Monkeys"],
    status: "finalizado",
  },
];

// ------------------------------------------------------------
//  HELPERS — utilitários para uso nos componentes
// ------------------------------------------------------------

/** Retorna todas as partidas de um campeonato */
export function getMatchesByChampionship(campeonatoId:string) {
  return mockMatches.filter((m) => m.campeonatoId === campeonatoId);
}

/** Retorna um campeonato pelo ID */
export function getChampionshipById(id:string) {
  return mockChampionships.find((c) => c.id === id) || null;
}

/** Retorna campeonatos filtrados por status */
export function getChampionshipsByStatus(status:string) {
  if (status === "todos") return mockChampionships;
  return mockChampionships.filter((c) => c.status === status);
}

/** Retorna campeonatos filtrados por formato */
export function getChampionshipsByFormato(formato:string) {
  return mockChampionships.filter((c) => c.formato === formato);
}

/** Autentica um usuário pelo email e senha */
export function authenticateUser(email:string, senha:string) {
  return mockUsers.find((u) => u.email === email && u.senha === senha) || null;
}

/** Verifica se email já está cadastrado */
export function emailExists(email:string) {
  return mockUsers.some((u) => u.email === email);
}