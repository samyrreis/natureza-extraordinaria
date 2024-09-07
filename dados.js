let dados = [
    {
        titulo: "Aurora Boreal",
        descricao: "A Aurora Boreal é um fenômeno natural espetacular que ocorre nas regiões polares, quando partículas carregadas do Sol interagem com a magnetosfera da Terra, resultando em luzes coloridas dançantes no céu.",
        link: "https://pt.wikipedia.org/wiki/Aurora_polar",
        tags: ["fenomeno optico", "regioes polares", "luzes", "norte", "auroras"]
    },
    {
        titulo: "Relâmpago Vulcânico",
        descricao: "O Relâmpago Vulcânico é um fenômeno impressionante que ocorre durante erupções vulcânicas, onde partículas de cinzas e gás criam uma carga elétrica, resultando em poderosos relâmpagos.",
        link: "https://pt.wikipedia.org/wiki/Relâmpago_vulcânico",
        tags: ["vulcoes", "relampagos", "fenomeno atmosferico", "erupçoes"]
    },
    {
        titulo: "Lago Natron",
        descricao: "O Lago Natron, na Tanzânia, é famoso por suas águas altamente alcalinas, que podem petrificar animais que entram em contato, criando um cenário surreal.",
        link: "https://pt.wikipedia.org/wiki/Lago_Natron",
        tags: ["lagos", "quimica natural", "fenomeno geologico", "Tanzania"]
    },
    {
        titulo: "Relâmpago Catatumbo",
        descricao: "O Relâmpago Catatumbo é um fenômeno atmosférico único que ocorre na Venezuela, onde relâmpagos são produzidos quase continuamente sobre a foz do Rio Catatumbo.",
        link: "https://pt.wikipedia.org/wiki/Relâmpago_do_Catatumbo",
        tags: ["fenomeno atmosferico", "relampagos", "Venezuela", "rio"]
    },
    {
        titulo: "Círculos de Fada",
        descricao: "Círculos de Fada são misteriosas formações circulares no solo que ocorrem em desertos da Namíbia, cuja origem ainda intriga cientistas.",
        link: "https://en.wikipedia.org/wiki/Fairy_circle_(geology)",
        tags: ["fenomeno geologico", "desertos", "Namibia", "misterio"]
    },
    {
        titulo: "Aurora Austral",
        descricao: "Similar à Aurora Boreal, a Aurora Austral ocorre nas regiões polares do hemisfério sul, criando impressionantes luzes coloridas no céu.",
        link: "https://pt.wikipedia.org/wiki/Aurora_polar",
        tags: ["fenomeno optico", "regioes polares", "luzes", "sul", "auroras"]
    },
    {
        titulo: "Cavernas de Cristal de Naica",
        descricao: "As Cavernas de Cristal de Naica, no México, contêm alguns dos maiores cristais naturais do mundo, formados em condições geotérmicas extremas.",
        link: "https://en.wikipedia.org/wiki/Cave_of_the_Crystals",
        tags: ["cavernas", "cristais", "fenomeno geologico", "Mexico"]
    },
    {
        titulo: "Lago Hillier",
        descricao: "O Lago Hillier, na Austrália, é conhecido por sua água rosa brilhante, causada por organismos como Dunaliella salina e Halobacteria.",
        link: "https://en.wikipedia.org/wiki/Lake_Hillier",
        tags: ["lagos", "fenomeno natural", "Australia", "agua rosa"]
    },
    {
        titulo: "Portões do Inferno",
        descricao: "Os Portões do Inferno são uma cratera de gás em chamas no Turcomenistão, que tem queimado continuamente desde a década de 1970.",
        link: "https://pt.wikipedia.org/wiki/Cratera_de_Darvaza",
        tags: ["cratera", "fogo", "Turcomenistao", "fenomeno geologico"]
    },
    {
        titulo: "Moeraki Boulders",
        descricao: "Os Moeraki Boulders são grandes e esféricas rochas que se encontram na costa da Nova Zelândia, formadas por concreção calcária.",
        link: "https://en.wikipedia.org/wiki/Moeraki_Boulders",
        tags: ["rochas", "Nova Zelandia", "fenomeno geologico", "esferas naturais"]
    },
    {
        titulo: "Pilares de Luz",
        descricao: "Pilares de Luz são fenômenos óticos criados pela reflexão da luz em cristais de gelo na atmosfera, frequentemente vistos em regiões muito frias.",
        link: "https://en.wikipedia.org/wiki/Light_pillar",
        tags: ["fenômeno optico", "luz", "cristais de gelo", "regioes frias"]
    },
    {
        titulo: "Penitentes",
        descricao: "Penitentes são formações de gelo finas e altas encontradas em altitudes elevadas, especialmente nos Andes, que se formam pela sublimação do gelo.",
        link: "https://en.wikipedia.org/wiki/Penitente_(snow_formation)",
        tags: ["gelo", "altitudes", "Andes", "fenomeno natural"]
    },
    {
        titulo: "Círculos de Gelo",
        descricao: "Círculos de Gelo são raras formações circulares de gelo que aparecem em rios e lagos, criadas por correntes de água sob a superfície congelada.",
        link: "https://en.wikipedia.org/wiki/Ice_circle",
        tags: ["gelo", "fenomeno geologico", "rios", "lagos"]
    },
    {
        titulo: "Nuvens Lenticulares",
        descricao: "Nuvens Lenticulares são formações de nuvens em forma de lente que se formam quando o ar flui sobre montanhas, criando padrões visuais impressionantes.",
        link: "https://en.wikipedia.org/wiki/Lenticular_cloud",
        tags: ["nuvens", "montanhas", "fenomeno atmosferico", "formaçoes opticas"]
    },
    {
        titulo: "Sol Negro (Murmuration)",
        descricao: "O Sol Negro é um fenômeno onde grandes bandos de estorninhos voam em padrões sincronizados, criando formas fluidas no céu, especialmente ao entardecer.",
        link: "https://en.wikipedia.org/wiki/Murmuration",
        tags: ["passaros", "fenomeno natural", "voo sincronizado", "entardecer"]
    },
    {
        titulo: "Colunas Basálticas",
        descricao: "Colunas Basálticas são formações rochosas poligonais criadas por erupções vulcânicas, como as famosas colunas da Calçada dos Gigantes na Irlanda do Norte.",
        link: "https://en.wikipedia.org/wiki/Basalt_column",
        tags: ["rochas", "fenomeno geologico", "erupçoes vulcanicas", "colunas"]
    },
    {
        titulo: "Nuvem Mammatus",
        descricao: "Nuvens Mammatus são formações de nuvens que se parecem com sacos pendurados no céu, frequentemente associadas a tempestades severas.",
        link: "https://en.wikipedia.org/wiki/Mammatus_cloud",
        tags: ["nuvens", "fenomeno atmosferico", "tempestades", "formaçoes"]
    },
    {
        titulo: "Árvores de Sangue de Dragão",
        descricao: "As Árvores de Sangue de Dragão, encontradas em Socotra, têm seiva vermelha como sangue, utilizada em medicamentos e corantes tradicionais.",
        link: "https://en.wikipedia.org/wiki/Dracaena_cinnabari",
        tags: ["arvores", "Socotra", "seiva vermelha", "fenomeno botanico"]
    },
    {
        titulo: "Ondas Bioluminescentes",
        descricao: "Ondas Bioluminescentes são criadas por organismos marinhos que emitem luz quando perturbados, iluminando a água com um brilho azul ou verde à noite.",
        link: "https://en.wikipedia.org/wiki/Bioluminescence",
        tags: ["bioluminescencia", "fenomeno marinho", "luz", "noite"]
    },
    {
        titulo: "Lago Baikal",
        descricao: "O Lago Baikal, na Rússia, é o lago mais profundo do mundo, conhecido por sua água cristalina e formações de gelo peculiares no inverno.",
        link: "https://en.wikipedia.org/wiki/Lake_Baikal",
        tags: ["lagos", "Russia", "gelo", "profundidade"]
    },
    {
        titulo: "Cavernas Waitomo",
        descricao: "As Cavernas Waitomo, na Nova Zelândia, são conhecidas por suas larvas de vaga-lume que iluminam o interior das cavernas com uma luz azul brilhante.",
        link: "https://en.wikipedia.org/wiki/Waitomo_Caves",
        tags: ["cavernas", "vagalumes", "bioluminescencia", "Nova Zelandia"]
    },
    {
        titulo: "Gêiser Fly",
        descricao: "O Gêiser Fly é uma formação geotérmica colorida e em constante crescimento, localizada em Nevada, nos Estados Unidos.",
        link: "https://en.wikipedia.org/wiki/Fly_Geyser",
        tags: ["geiser", "fenomeno geotermico", "Nevada", "colorido"]
    },
    {
        titulo: "Praia de Vidro",
        descricao: "A Praia de Vidro, na Califórnia, é coberta por pequenos pedaços de vidro marinho, resultantes de anos de descarte de lixo no oceano.",
        link: "https://en.wikipedia.org/wiki/Glass_Beach_(Fort_Bragg,_California)",
        tags: ["praia", "vidro", "California", "fenomeno humano"]
    },
    {
        titulo: "Caverna Fingal",
        descricao: "A Caverna Fingal, na Escócia, é conhecida por suas colunas de basalto e pela acústica única que inspirou composições musicais.",
        link: "https://en.wikipedia.org/wiki/Fingal's_Cave",
        tags: ["caverna", "colunas de basalto", "Escocia", "acustica"]
    },
    {
        titulo: "Caverna Son Doong",
        descricao: "A Caverna Son Doong, no Vietnã, é a maior caverna do mundo, com sua própria floresta e rio subterrâneo.",
        link: "https://en.wikipedia.org/wiki/Sơn_Đoòng_Cave",
        tags: ["caverna", "maior caverna", "Vietna", "floresta subterranea"]
    },
    {
        titulo: "Deserto Florido",
        descricao: "O Deserto Florido é um fenômeno raro no Deserto do Atacama, no Chile, onde flores desabrocham após chuvas inesperadas.",
        link: "https://en.wikipedia.org/wiki/Desierto_florido",
        tags: ["deserto", "flores", "Chile", "fenomeno raro"]
    },
    {
        titulo: "Espuma do Mar",
        descricao: "A Espuma do Mar ocorre quando matéria orgânica no oceano é agitada, criando uma espuma densa e branca nas praias.",
        link: "https://en.wikipedia.org/wiki/Sea_foam",
        tags: ["oceano", "espuma", "materia organica", "praias"]
    },
    {
        titulo: "Maré Vermelha",
        descricao: "A Maré Vermelha é um fenômeno causado pela proliferação de algas tóxicas que podem mudar a cor da água do mar.",
        link: "https://en.wikipedia.org/wiki/Red_tide",
        tags: ["mare", "algas", "fenomeno marinho", "toxicidade"]
    },
    {
        titulo: "Vale da Lua",
        descricao: "O Vale da Lua, na Jordânia, é conhecido por suas paisagens desérticas únicas, que lembram a superfície lunar.",
        link: "https://en.wikipedia.org/wiki/Wadi_Rum",
        tags: ["vale", "deserto", "Jordania", "paisagem lunar"]
    },
    {
        titulo: "Geleira de Sangue",
        descricao: "A Geleira de Sangue, na Antártica, é conhecida pela cor vermelha causada pela oxidação do ferro na água salgada.",
        link: "https://en.wikipedia.org/wiki/Blood_Falls",
        tags: ["geleira", "vermelho", "Antartica", "oxidaçao de ferro"]
    },
    {
        titulo: "Danxia Landform",
        descricao: "Danxia Landform é uma formação geológica na China caracterizada por suas cores vibrantes, resultantes da erosão de arenito e outros minerais.",
        link: "https://en.wikipedia.org/wiki/Danxia_landform",
        tags: ["formaçao geologica", "China", "arenito", "erosao"]
    },
    {
        titulo: "Piedras Rojas",
        descricao: "Piedras Rojas, no Deserto do Atacama, são formações rochosas de cor avermelhada que contrastam com as salinas e lagoas ao redor.",
        link: "https://en.wikipedia.org/wiki/Atacama_Desert",
        tags: ["rochas", "vermelho", "Atacama", "formação geologica"]
    },
    {
        titulo: "Monte Roraima",
        descricao: "O Monte Roraima é uma montanha em formato de mesa localizada na tríplice fronteira entre Brasil, Venezuela e Guiana, cercada de mistérios e lendas.",
        link: "https://en.wikipedia.org/wiki/Mount_Roraima",
        tags: ["montanha", "Brasil", "Venezuela", "Guiana", "lendas"]
    },
    {
        titulo: "Pamukkale",
        descricao: "Pamukkale, na Turquia, é conhecida por suas formações de travertino branco formadas por fontes termais ricas em minerais.",
        link: "https://en.wikipedia.org/wiki/Pamukkale",
        tags: ["fontes termais", "Turquia", "travertino", "minerais"]
    },
    {
        titulo: "Nuvens Asperitas",
        descricao: "Nuvens Asperitas são uma rara formação de nuvens que parecem ondas turbulentas no céu, criando um efeito visual dramático.",
        link: "https://en.wikipedia.org/wiki/Asperitas",
        tags: ["nuvens", "fenomeno atmosferico", "ondas", "ceu"]
    },
    {
        titulo: "Lago Retba",
        descricao: "O Lago Retba, no Senegal, é conhecido por sua cor rosa, causada pela alta concentração de sal e pela presença de Dunaliella salina.",
        link: "https://en.wikipedia.org/wiki/Lake_Retba",
        tags: ["lago", "rosa", "Senegal", "sal"]
    },
    {
        titulo: "Círculos de Pedra de Senegâmbia",
        descricao: "Os Círculos de Pedra de Senegâmbia são antigas formações rochosas que marcam sítios funerários na região de Senegal e Gâmbia.",
        link: "https://en.wikipedia.org/wiki/Senegambian_stone_circles",
        tags: ["circulos de pedra", "Senegal", "Gambia", "arqueologia"]
    },
    {
        titulo: "Gruta Azul",
        descricao: "A Gruta Azul, na ilha de Capri, é famosa pelo efeito luminoso de suas águas, que parecem brilhar em azul devido à luz solar refletida.",
        link: "https://en.wikipedia.org/wiki/Blue_Grotto_(Capri)",
        tags: ["gruta", "azul", "Capri", "fenomeno optico"]
    },
    {
        titulo: "Lago Abraham",
        descricao: "O Lago Abraham, no Canadá, é famoso por suas bolhas de metano congeladas, que criam padrões únicos no gelo durante o inverno.",
        link: "https://en.wikipedia.org/wiki/Abraham_Lake",
        tags: ["lago", "metano", "gelo", "Canada"]
    },
    {
        titulo: "Arquipélago de Socotra",
        descricao: "O Arquipélago de Socotra, no Iêmen, é famoso por sua biodiversidade única, com plantas e animais que não existem em nenhum outro lugar do mundo.",
        link: "https://en.wikipedia.org/wiki/Socotra",
        tags: ["arquipelago", "biodiversidade", "Iemen", "flora e fauna"]
    },
    {
        titulo: "Rio Tinto",
        descricao: "O Rio Tinto, na Espanha, é conhecido por sua água vermelha devido à alta acidez e à presença de metais pesados, resultado de atividade mineradora.",
        link: "https://en.wikipedia.org/wiki/Rio_Tinto_(river)",
        tags: ["rio", "vermelho", "metais pesados", "Espanha"]
    },
    {
        titulo: "Monte Erebus",
        descricao: "O Monte Erebus, na Antártica, é um dos poucos vulcões ativos do continente e é conhecido por suas erupções contínuas de lava e vapor.",
        link: "https://en.wikipedia.org/wiki/Mount_Erebus",
        tags: ["vulcao", "Antartica", "lava", "atividade contínua"]
    },
    {
        titulo: "Salar de Uyuni",
        descricao: "O Salar de Uyuni, na Bolívia, é o maior deserto de sal do mundo, famoso por suas paisagens refletivas durante a temporada de chuvas.",
        link: "https://en.wikipedia.org/wiki/Salar_de_Uyuni",
        tags: ["deserto de sal", "reflexao", "Bolivia", "paisagem"]
    },
    {
        titulo: "Campos de Gelo Patagônicos",
        descricao: "Os Campos de Gelo Patagônicos, na Argentina e no Chile, são as maiores extensões de gelo no Hemisfério Sul, fora da Antártica.",
        link: "https://en.wikipedia.org/wiki/Patagonian_Ice_Field",
        tags: ["gelo", "Patagonia", "Argentina", "Chile", "grandes extensoes"]
    },
    {
        titulo: "Caverna de Cristais",
        descricao: "A Caverna de Cristais, no México, contém alguns dos maiores cristais naturais já descobertos, com até 12 metros de comprimento.",
        link: "https://en.wikipedia.org/wiki/Cave_of_the_Crystals",
        tags: ["caverna", "cristais", "Mexico", "gigantes"]
    },
    {
        titulo: "Reserva Nacional de Paracas",
        descricao: "A Reserva Nacional de Paracas, no Peru, abriga diversas espécies marinhas e é conhecida por suas formações geológicas únicas ao longo da costa.",
        link: "https://en.wikipedia.org/wiki/Paracas_National_Reserve",
        tags: ["reserva", "Peru", "formaçoes geologicas", "vida marinha"]
    },
    {
        titulo: "Vulcão Kawah Ijen",
        descricao: "O Vulcão Kawah Ijen, na Indonésia, é conhecido por suas chamas azuis e pelo lago de ácido sulfúrico que ocupa sua cratera.",
        link: "https://en.wikipedia.org/wiki/Ijen",
        tags: ["vulcao", "chamas azuis", "Indonesia", "acido sulfurico"]
    },
    {
        titulo: "Ilhas Faroe",
        descricao: "As Ilhas Faroe, entre a Islândia e a Noruega, são famosas por suas falésias dramáticas e pela grande população de aves marinhas.",
        link: "https://en.wikipedia.org/wiki/Faroe_Islands",
        tags: ["ilhas", "falesias", "aves marinhas", "Atlantico Norte"]
    },
    {
        titulo: "Caverna de Hang Sơn Đoòng",
        descricao: "A Caverna de Hang Sơn Đoòng, no Vietnã, é considerada a maior caverna do mundo em volume, com seu próprio ecossistema interno.",
        link: "https://en.wikipedia.org/wiki/Hang_Sơn_Đoòng",
        tags: ["caverna", "grande", "Vietna", "ecossistema"]
    }
];

