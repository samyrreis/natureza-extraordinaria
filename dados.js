let dados = [
    {
        titulo: "Aurora Boreal",
        descricao: "A Aurora Boreal é um fenômeno natural espetacular que ocorre nas regiões polares, quando partículas carregadas do Sol interagem com a magnetosfera da Terra, resultando em luzes coloridas dançantes no céu.",
        link: "https://pt.wikipedia.org/wiki/Aurora_polar"
    },
    {
        titulo: "Relâmpago Vulcânico",
        descricao: "O Relâmpago Vulcânico é um fenômeno impressionante que ocorre durante erupções vulcânicas, onde partículas de cinzas e gás criam uma carga elétrica, resultando em poderosos relâmpagos.",
        link: "https://pt.wikipedia.org/wiki/Relâmpago_vulcânico"
    },
    {
        titulo: "Lago Natron",
        descricao: "O Lago Natron, na Tanzânia, é famoso por suas águas altamente alcalinas, que podem petrificar animais que entram em contato, criando um cenário surreal.",
        link: "https://pt.wikipedia.org/wiki/Lago_Natron"
    },
    {
        titulo: "Relâmpago Catatumbo",
        descricao: "O Relâmpago Catatumbo é um fenômeno atmosférico único que ocorre na Venezuela, onde relâmpagos são produzidos quase continuamente sobre a foz do Rio Catatumbo.",
        link: "https://pt.wikipedia.org/wiki/Relâmpago_do_Catatumbo"
    },
    {
        titulo: "Círculos de Fada",
        descricao: "Círculos de Fada são misteriosas formações circulares no solo que ocorrem em desertos da Namíbia, cuja origem ainda intriga cientistas.",
        link: "https://en.wikipedia.org/wiki/Fairy_circle_(geology)"
    },
    {
        titulo: "Aurora Austral",
        descricao: "Similar à Aurora Boreal, a Aurora Austral ocorre nas regiões polares do hemisfério sul, criando impressionantes luzes coloridas no céu.",
        link: "https://pt.wikipedia.org/wiki/Aurora_polar"
    },
    {
        titulo: "Cavernas de Cristal de Naica",
        descricao: "As Cavernas de Cristal de Naica, no México, contêm alguns dos maiores cristais naturais do mundo, formados em condições geotérmicas extremas.",
        link: "https://en.wikipedia.org/wiki/Cave_of_the_Crystals"
    },
    {
        titulo: "Lago Hillier",
        descricao: "O Lago Hillier, na Austrália, é conhecido por sua água rosa brilhante, causada por organismos como Dunaliella salina e Halobacteria.",
        link: "https://en.wikipedia.org/wiki/Lake_Hillier"
    },
    {
        titulo: "Portões do Inferno",
        descricao: "Os Portões do Inferno são uma cratera de gás em chamas no Turcomenistão, que tem queimado continuamente desde a década de 1970.",
        link: "https://pt.wikipedia.org/wiki/Cratera_de_Darvaza"
    },
    {
        titulo: "Moeraki Boulders",
        descricao: "Os Moeraki Boulders são grandes e esféricas rochas que se encontram na costa da Nova Zelândia, formadas por concreção calcária.",
        link: "https://en.wikipedia.org/wiki/Moeraki_Boulders"
    },
    {
        titulo: "Pilares de Luz",
        descricao: "Pilares de Luz são fenômenos óticos criados pela reflexão da luz em cristais de gelo na atmosfera, frequentemente vistos em regiões muito frias.",
        link: "https://en.wikipedia.org/wiki/Light_pillar"
    },
    {
        titulo: "Penitentes",
        descricao: "Penitentes são formações de gelo finas e altas encontradas em altitudes elevadas, especialmente nos Andes, que se formam pela sublimação do gelo.",
        link: "https://en.wikipedia.org/wiki/Penitente_(snow_formation)"
    },
    {
        titulo: "Círculos de Gelo",
        descricao: "Círculos de Gelo são raras formações circulares de gelo que aparecem em rios e lagos, criadas por correntes de água sob a superfície congelada.",
        link: "https://en.wikipedia.org/wiki/Ice_circle"
    },
    {
        titulo: "Nuvens Lenticulares",
        descricao: "Nuvens Lenticulares são formações de nuvens em forma de lente que se formam quando o ar flui sobre montanhas, criando padrões visuais impressionantes.",
        link: "https://en.wikipedia.org/wiki/Lenticular_cloud"
    },
    {
        titulo: "Sol Negro (Murmuration)",
        descricao: "O Sol Negro é um fenômeno onde grandes bandos de estorninhos voam em padrões sincronizados, criando formas fluidas no céu, especialmente ao entardecer.",
        link: "https://en.wikipedia.org/wiki/Murmuration"
    },
    {
        titulo: "Colunas Basálticas",
        descricao: "Colunas Basálticas são formações rochosas poligonais criadas por erupções vulcânicas, como as famosas colunas da Calçada dos Gigantes na Irlanda do Norte.",
        link: "https://en.wikipedia.org/wiki/Basalt_column"
    },
    {
        titulo: "Nuvem Mammatus",
        descricao: "Nuvens Mammatus são formações de nuvens que se parecem com sacos pendurados no céu, frequentemente associadas a tempestades severas.",
        link: "https://en.wikipedia.org/wiki/Mammatus_cloud"
    },
    {
        titulo: "Árvores de Sangue de Dragão",
        descricao: "As Árvores de Sangue de Dragão, encontradas em Socotra, têm seiva vermelha como sangue, utilizada em medicamentos e corantes tradicionais.",
        link: "https://en.wikipedia.org/wiki/Dracaena_cinnabari"
    },
    {
        titulo: "Ondas Bioluminescentes",
        descricao: "Ondas Bioluminescentes são criadas por organismos marinhos que emitem luz quando perturbados, iluminando a água com um brilho azul ou verde à noite.",
        link: "https://en.wikipedia.org/wiki/Bioluminescence"
    },
    {
        titulo: "Lago Baikal",
        descricao: "O Lago Baikal, na Rússia, é o lago mais profundo do mundo, conhecido por sua água cristalina e por conter aproximadamente 20% da água doce não congelada do mundo.",
        link: "https://pt.wikipedia.org/wiki/Lago_Baikal"
    },
    {
        titulo: "Redemoinhos de Areia",
        descricao: "Redemoinhos de Areia, ou Dust Devils, são pequenas tempestades de vento que levantam areia e poeira, criando colunas giratórias em áreas secas.",
        link: "https://en.wikipedia.org/wiki/Dust_devil"
    },
    {
        titulo: "Nuvens Asperitas",
        descricao: "As Nuvens Asperitas são uma formação de nuvens raras que criam padrões dramáticos e ondulados no céu, muitas vezes com uma aparência apocalíptica.",
        link: "https://en.wikipedia.org/wiki/Asperitas"
    },
    {
        titulo: "Gêiseres de Fly",
        descricao: "Os Gêiseres de Fly, em Nevada, EUA, são uma formação geotérmica colorida, criada por acúmulo de minerais após perfurações acidentais.",
        link: "https://en.wikipedia.org/wiki/Fly_Geyser"
    },
    {
        titulo: "Salar de Uyuni",
        descricao: "O Salar de Uyuni, na Bolívia, é o maior deserto de sal do mundo e, após chuvas, se transforma em um gigantesco espelho natural.",
        link: "https://pt.wikipedia.org/wiki/Salar_de_Uyuni"
    },
    {
        titulo: "Geleira Perito Moreno",
        descricao: "A Geleira Perito Moreno, na Argentina, é uma das poucas geleiras do mundo que ainda está crescendo, famosa por seu ciclo de ruptura.",
        link: "https://pt.wikipedia.org/wiki/Geleira_Perito_Moreno"
    },
    {
        titulo: "Lago de Lava de Erta Ale",
        descricao: "O Lago de Lava de Erta Ale, na Etiópia, é um dos poucos lagos de lava permanentes do mundo, localizado no vulcão Erta Ale.",
        link: "https://en.wikipedia.org/wiki/Erta_Ale"
    },
    {
        titulo: "Solfatara de Pozzuoli",
        descricao: "A Solfatara de Pozzuoli, na Itália, é uma cratera vulcânica ativa conhecida por suas emissões de vapor e enxofre, criando um ambiente surreal.",
        link: "https://en.wikipedia.org/wiki/Solfatara_(volcano)"
    },
    {
        titulo: "Caverna Son Doong",
        descricao: "A Caverna Son Doong, no Vietnã, é a maior caverna do mundo, com sua própria floresta e clima interno, descobrindo novas espécies.",
        link: "https://en.wikipedia.org/wiki/Sơn_Đoòng_cave"
    },
    {
        titulo: "Montanhas Arco-Íris",
        descricao: "As Montanhas Arco-Íris, no Parque Geológico Zhangye Danxia, China, são conhecidas por suas camadas multicoloridas de minerais.",
        link: "https://en.wikipedia.org/wiki/Zhangye_National_Geopark"
    },
    {
        titulo: "Gran Salar de Uyuni",
        descricao: "O Gran Salar de Uyuni é uma vasta planície de sal que, após a chuva, reflete o céu, criando a ilusão de um horizonte sem fim.",
        link: "https://pt.wikipedia.org/wiki/Salar_de_Uyuni"
    },
    {
        titulo: "Mar de Estrelas",
        descricao: "O Mar de Estrelas é um fenômeno bioluminescente nas Maldivas, onde organismos microscópicos iluminam a costa com um brilho azul.",
        link: "https://en.wikipedia.org/wiki/Bioluminescence"
    },
    {
        titulo: "Deserto Florido",
        descricao: "O Deserto Florido no Chile é um fenômeno onde, após raras chuvas, o deserto de Atacama se cobre de flores, criando um tapete colorido.",
        link: "https://en.wikipedia.org/wiki/Desert_bloom"
    },
    {
        titulo: "Espuma do Mar",
        descricao: "A Espuma do Mar é um fenômeno onde a matéria orgânica em decomposição cria grandes quantidades de espuma na superfície da água.",
        link: "https://en.wikipedia.org/wiki/Sea_foam"
    },
    {
        titulo: "Vale da Morte",
        descricao: "O Vale da Morte, na Califórnia, é um dos lugares mais quentes da Terra, famoso por seu clima extremo e paisagens desoladas.",
        link: "https://pt.wikipedia.org/wiki/Vale_da_Morte"
    },
    {
        titulo: "Efeito Fata Morgana",
        descricao: "O Efeito Fata Morgana é uma miragem que distorce objetos no horizonte, muitas vezes criando a ilusão de cidades flutuantes.",
        link: "https://en.wikipedia.org/wiki/Fata_Morgana_(mirage)"
    },
    {
        titulo: "Círculos de Gelo",
        descricao: "Os Círculos de Gelo são raras formações de gelo em rios e lagos, criadas por correntes subaquáticas que moldam blocos de gelo em formas perfeitas.",
        link: "https://en.wikipedia.org/wiki/Ice_circle"
    },
    {
        titulo: "Gran Chaco",
        descricao: "O Gran Chaco é uma vasta planície na América do Sul, famosa por seu clima extremo, fauna diversificada e paisagens de savana.",
        link: "https://en.wikipedia.org/wiki/Gran_Chaco"
    },
    {
        titulo: "Pedras Deslizantes de Racetrack Playa",
        descricao: "As Pedras Deslizantes de Racetrack Playa, no Vale da Morte, se movem misteriosamente através da superfície do deserto, deixando rastros sem uma explicação completa.",
        link: "https://en.wikipedia.org/wiki/Sailing_stones"
    },
    {
        titulo: "Trombas d'Água",
        descricao: "As Trombas d'Água são redemoinhos de vento que se formam sobre o mar, criando colunas de água que se estendem até as nuvens.",
        link: "https://en.wikipedia.org/wiki/Waterspout"
    },
    {
        titulo: "Tempestades de Granizo Gigante",
        descricao: "Tempestades de Granizo Gigante produzem pedras de gelo do tamanho de bolas de tênis ou até maiores, causando grandes danos onde quer que atinjam.",
        link: "https://en.wikipedia.org/wiki/Hail"
    },
    {
        titulo: "Arco-Íris Lunar",
        descricao: "Um Arco-Íris Lunar, ou arco-íris de luar, é um raro fenômeno óptico que ocorre durante a noite, quando a luz da lua é refratada por gotas de água.",
        link: "https://en.wikipedia.org/wiki/Moonbow"
    },
    {
        titulo: "Nuvens Noctilucentes",
        descricao: "Nuvens Noctilucentes são as nuvens mais altas da atmosfera, formadas por cristais de gelo a altitudes extremas, visíveis apenas durante o crepúsculo.",
        link: "https://en.wikipedia.org/wiki/Noctilucent_cloud"
    },
    {
        titulo: "Gelo Negro",
        descricao: "O Gelo Negro é uma fina camada de gelo transparente que se forma em superfícies rodoviárias, quase invisível, mas extremamente perigosa.",
        link: "https://en.wikipedia.org/wiki/Black_ice"
    },
    {
        titulo: "Maré Vermelha",
        descricao: "A Maré Vermelha é uma floração de algas tóxicas que pode causar danos significativos à vida marinha, além de alterar a cor da água do mar.",
        link: "https://en.wikipedia.org/wiki/Red_tide"
    },
    {
        titulo: "Rochas Equilibradas",
        descricao: "Rochas Equilibradas são grandes rochas que parecem desafiando a gravidade, empilhadas de forma natural por processos erosivos ao longo de milhões de anos.",
        link: "https://en.wikipedia.org/wiki/Balanced_rock"
    }
];
