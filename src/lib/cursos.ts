export type Disciplina = {
  nome: string;
  descricao?: string;
};

export type GradeBloco = {
  titulo?: string;
  disciplinas: Disciplina[];
};

export type Curso = {
  slug: string;
  grupo: string;
  sigla: string;
  nome: string;
  icone: string;
  resumo: string;
  grade: GradeBloco[];
};

export const cursos: Curso[] = [
  {
    slug: "ciclo-1",
    grupo: "Teologia Livre",
    sigla: "Ciclo 1",
    nome: "Básico em Teologia",
    icone: "/cursos/curso-ciclo-1.png",
    resumo:
      "Primeiro módulo da trilha de Teologia Livre, com os fundamentos da fé para quem está iniciando sua formação bíblica.",
    grade: [
      {
        titulo: "Ano I",
        disciplinas: [
          {
            nome: "Bibliologia",
            descricao:
              "Importância das Escrituras; a Bíblia como livro; Palavra de Deus; formação do Cânon; preservação e tradução da Bíblia; história da Bíblia; cronologia bíblica; geografia bíblica.",
          },
          {
            nome: "Pentateuco",
            descricao:
              "Introdução; o princípio; de Abraão a Jacó; José; o Deus de Israel; dispensação da Lei; Tabernáculo; sacrifícios e leis; peregrinação; a nova geração.",
          },
          {
            nome: "Livros Históricos",
            descricao:
              "A conquista de Canaã; o período dos juízes; o reino unido: Saul; o reino unido: Davi; o declínio e divisão do reino unido; o período das alianças; avivamento e degeneração; declínio e queda de Judá; o regresso do cativeiro; o período da restauração.",
          },
          {
            nome: "História da Igreja",
            descricao:
              "A Igreja de Cristo, o povo de Deus estabelecido na terra, e a sua história, que pode ser dividida em períodos para melhor compreensão, com fatos desde o primeiro século até a atualidade. O período histórico é dividido em Igreja na Idade Antiga, na Idade Média e na Idade Moderna.",
          },
          {
            nome: "Profetas Maiores",
            descricao:
              "Isaías, profeta das promessas; o Messias prometido; o dia do Senhor; esperança para uma geração futura; o Messias vindouro. Jeremias, profeta da coragem; a primeira e a segunda deportações de exilados; a queda de Jerusalém. Ezequiel, o profeta das visões; a queda de Jerusalém e seu novo começo.",
          },
          {
            nome: "Epístolas Paulinas e Gerais",
            descricao:
              "As paulinas, compostas de 13 cartas cuja autoria é atribuída ao apóstolo Paulo, tratam dos mais diversos temas doutrinais, do salvo como indivíduo e como igreja, com exortações práticas nas diversas áreas da vida e do ministério cristão, sempre fundamentadas no Evangelho de nosso Senhor e Salvador Jesus Cristo. As Epístolas Gerais são aquelas de autores diversos: a epístola aos Hebreus; a epístola de Tiago; a primeira e a segunda epístolas de Pedro; a primeira, segunda e terceira epístolas de João; e a epístola de Judas.",
          },
          {
            nome: "Homilética / Hermenêutica",
            descricao:
              "Demonstra que o ministério da pregação não é exclusividade dos ministros, mas de todos os que se dedicam a essa tarefa. A proposta desta matéria é capacitar leigos e obreiros a preparar e apresentar mensagens. Introdução à Hermenêutica; a concepção própria da Bíblia; particularidades do texto bíblico; métodos de estudo bíblico; princípios de interpretação bíblica, gramaticais, históricos e teológicos.",
          },
          {
            nome: "Apocalipse / Escatologia",
            descricao:
              "Os tempos dos gentios; os impérios mundiais discriminados; as setenta semanas de anos; as últimas revelações de Daniel; Cristo e a sua igreja; as sete igrejas da Ásia; o arrebatamento da igreja e o início da grande tribulação; as sete trombetas de juízo; ascensão e queda do anticristo; eventos finais.",
          },
        ],
      },
      {
        titulo: "Ano II",
        disciplinas: [
          {
            nome: "Geografia Bíblica",
            descricao:
              "O mundo antigo. Estudo dos achados arqueológicos dos povos e das terras do Antigo Testamento, do período interbíblico e do Novo Testamento, e do espaço geográfico na Palestina, além das noções básicas do que é espaço geográfico.",
          },
          {
            nome: "Profetas Menores",
            descricao:
              "Estudo factual dos livros de Obadias, Joel, Jonas, Oséias, Amós, Miquéias, Naum, Habacuque, Sofonias, Ageu, Zacarias e Malaquias.",
          },
          {
            nome: "Livros Poéticos",
            descricao:
              "O livro de Jó: prólogo, diálogo, monólogo e epílogo. Introdução ao livro de Salmos e suas categorias. O livro de Provérbios: a verdadeira sabedoria e sua ampliação e ilustração. O livro de Eclesiastes. Cantares de Salomão.",
          },
          {
            nome: "Evangelhos e Atos",
            descricao:
              "Introdução aos Evangelhos: Mateus, Marcos, Lucas e João, destacando os sinóticos e a peculiaridade do evangelho de João. Atos dos Apóstolos apresenta de forma factual os primeiros anos da Igreja, com destaque à vinda do Espírito Santo, à sua atuação e às primeiras incursões missionárias.",
          },
          {
            nome: "Heresiologia",
            descricao:
              "Disciplina planejada para facilitar a compreensão da natureza das principais religiões presentes no mundo moderno e dos grandes e tradicionais sistemas religiosos não evangélicos do Brasil, oferecendo ao aluno as condições básicas para o trabalho de divulgação do Evangelho entre os adeptos desses sistemas, incluindo uma visão panorâmica sobre as principais religiões não cristãs e seitas que se declaram cristãs.",
          },
          {
            nome: "A Trindade",
            descricao:
              "Fornece os elementos fundamentados na Bíblia de que Deus existe eternamente como três pessoas — Pai, Filho e Espírito Santo. Cada pessoa é plenamente Deus e há um só Deus: Deus é uno e, ao mesmo tempo, trino.",
          },
          {
            nome: "Anjos, Homens, Pecado e Salvação",
            descricao:
              "Natureza dos anjos; os anjos como agentes de Deus; origem, rebeldia e queda de Lúcifer; os anjos caídos. Origem e criação do homem; natureza essencial do homem; imagem e semelhança de Deus; provação e queda do homem. Origem e natureza do pecado. Providência salvadora: conversão, justificação, regeneração, adoção, santificação e glorificação.",
          },
          {
            nome: "Educação Cristã",
            descricao:
              "Educação religiosa e sua razão de ser; fundamentos da educação religiosa; a Escola Dominical; agentes e elementos da educação cristã; foco do ensino; avaliação de resultados; autodesenvolvimento; departamentos educacionais.",
          },
        ],
      },
    ],
  },
  {
    slug: "ciclo-2",
    grupo: "Teologia Livre",
    sigla: "Ciclo 2",
    nome: "Médio em Teologia",
    icone: "/cursos/curso-ciclo-2.png",
    resumo:
      "Aprofunda o estudo bíblico e teológico, preparando líderes e professores para atuar com mais responsabilidade na igreja local.",
    grade: [
      {
        titulo: "Ano III",
        disciplinas: [
          {
            nome: "Antigo Testamento I",
            descricao:
              "Pretende oportunizar um conhecimento analítico e crítico, capacitando o aluno com a competência de pesquisar, interpretar e compreender o Antigo Testamento de forma panorâmica, linear e reflexiva. Oferece ao aluno conhecimento, recursos e ferramentas introdutórias para o estudo do Pentateuco.",
          },
          {
            nome: "Antigo Testamento II",
            descricao:
              "Pretende oportunizar um conhecimento analítico e crítico, capacitando o aluno com a competência de pesquisar, interpretar e compreender o Antigo Testamento de forma panorâmica, linear e reflexiva. Oferece ao aluno conhecimento, recursos e ferramentas introdutórias para os estudos dos Livros Históricos e Poéticos.",
          },
          {
            nome: "Novo Testamento I",
            descricao:
              "Pretende oportunizar um conhecimento analítico e crítico, capacitando o aluno com a competência de pesquisar, interpretar e compreender o Novo Testamento de forma panorâmica, linear e reflexiva. Oferece ao aluno conhecimento, recursos e ferramentas introdutórias para os estudos dos Evangelhos Sinóticos, do Evangelho de João e do livro de Atos dos Apóstolos.",
          },
          {
            nome: "Teologia Bíblica do Antigo Testamento",
            descricao:
              "Estudo do Antigo Testamento que busca entender a história do povo de Deus, dando atenção especial aos poderosos atos de Deus e às palavras proféticas do Senhor acerca desses atos. Aborda a sequência e o significado das experiências deste povo, examinando o relacionamento deles com Deus, bem como seus sucessos e fracassos.",
          },
          {
            nome: "Teologia Bíblica do Novo Testamento",
            descricao:
              "A Teologia do Novo Testamento é de grande auxílio para o estudante da Bíblia entender o surgimento e o desenvolvimento das doutrinas que marcaram a fé cristã, pois várias delas foram aceitas somente após acurado estudo e sério exame doutrinário, para um melhor entendimento da Teologia Sistemática e da Teologia Contemporânea.",
          },
          {
            nome: "Teologia Sistemática I",
            descricao:
              "Análise bíblica que permite ao aluno interagir com os conteúdos como fonte de saber, entendendo a profundidade de uma formação teológica e sua contribuição para a Doutrina da Palavra de Deus, a Doutrina de Deus e a Doutrina do Homem.",
          },
          {
            nome: "Teologia Sistemática II",
            descricao:
              "Análise bíblica que permite ao aluno interagir com os conteúdos como fonte de saber, entendendo a profundidade de uma formação teológica e sua contribuição para a Doutrina de Cristo, a Soteriologia e a Hamartiologia.",
          },
          {
            nome: "Cultura Bíblica",
            descricao:
              "Abordagem de seus conceitos centrais e de alguns de seus temas, propondo um diálogo com as áreas da Teologia quanto às práticas e à formação sociocultural dos povos e nações no contexto bíblico.",
          },
        ],
      },
      {
        titulo: "Ano IV",
        disciplinas: [
          {
            nome: "Missiologia",
            descricao:
              "Missões transculturais hoje: visão pessoal da obra missionária e tendências missionárias. A missão de Deus ao mundo: eternidade, tempo e missões; missões e a glória de Deus; nossa participação em missões — incluindo a conceituação de missiologia, a missão de Deus nas Escrituras, a igreja e as missões, o enfoque histórico das missões, as características do missionário, a visão antropológica de missões e as implicações transculturais no século XXI.",
          },
          {
            nome: "Ética e Bioética",
            descricao:
              "Abordagem introdutória ao estudo da ética e da bioética. O conteúdo apresenta uma visão global desta ciência, tendo como princípio a revelação bíblica, fundamentando os princípios para a conduta de toda a humanidade cristã: introdução ao estudo da ética; a ética na história do pensamento ocidental; ética cristã, Bíblia e Igreja; as abordagens éticas e a bioética.",
          },
          {
            nome: "História de Israel",
            descricao:
              "Analisa e estuda a História de Israel até o período intertestamentário sob a ótica bíblica, partindo do pressuposto de que o ser humano é um ser inerentemente e intrinsecamente religioso. Com o auxílio das regras de interpretação criação-queda-redenção, verifica os aspectos políticos, culturais, sociais, econômicos, antropológicos e sociológicos como dimensão e consequência desse ethos religioso na formação desse povo e sua contribuição para a história da salvação, observando os vários períodos de formação, desenvolvimento e decadência da nação judaica.",
          },
          {
            nome: "Teologia Pastoral",
            descricao:
              "Estudo de uma Teologia Bíblica Pastoral, com a proposta de compreender as relações entre a análise da Teologia Pastoral e sua prática, de forma a motivar uma reflexão teológica embasada em uma tradição reformada e evangélica, e sua importância na realidade social e no compromisso com a mudança dessa realidade — abordando a chamada e o preparo do obreiro, o ministério e seus perigos e problemas, o ministro, o culto e sua mensagem, e a ética pastoral.",
          },
          { nome: "Introdução às Línguas" },
          {
            nome: "Psicologia Pastoral",
            descricao:
              "Proporciona capacitação ministerial fundamentada na inter-relação dos conhecimentos das ciências humanas, com destaque à sua dimensão teórica diante das questões advindas das pressões da vida moderna, verificando os conceitos da psicologia secular e pastoral, o aconselhamento pastoral e o conselheiro, e as razões que levam as pessoas a procurar o aconselhamento espiritual.",
          },
          {
            nome: "Psicologia Geral",
            descricao:
              "Situa a Psicologia no contexto histórico das ciências humanas e sociais. A disciplina propõe uma crítica dos fundamentos ontológicos e epistemológicos da Psicologia, identificando o corpus teórico-metodológico das principais abordagens psicológicas relativas aos processos psíquicos básicos e seus reflexos no comportamento humano, à luz da relação indivíduo-sociedade: conceitos gerais; a Psicologia hoje; as funções psicológicas da personalidade humana e a visão holística; os grandes temas da Psicologia.",
          },
          {
            nome: "Sistematizando o Estudo",
            descricao:
              "O principal objetivo desta disciplina é desenvolver no aluno a habilidade de interpretação do texto bíblico mediante a obediência aos fundamentos e princípios de interpretação adequada, contribuindo para uma ministração mais exata e responsável da Palavra de Deus. O conteúdo inclui o estudo dos métodos de aplicação do texto para os dias atuais de nossa geração e cultura, e o discernimento das diversas posições hermenêuticas na atualidade e o que as torna legítimas ou não. Nesta etapa, o aluno será introduzido ao campo da Hermenêutica especial.",
          },
        ],
      },
    ],
  },
  {
    slug: "ciclo-3",
    grupo: "Teologia Livre",
    sigla: "Ciclo 3",
    nome: "Avançado em Teologia",
    icone: "/cursos/curso-ciclo-3.png",
    resumo:
      "Etapa final da Teologia Livre, voltada à formação de pastores e vocacionados ao ministério.",
    grade: [
      {
        disciplinas: [
          {
            nome: "Língua Portuguesa",
            descricao:
              "A Língua Portuguesa como fonte de comunicação oral e escrita. A linguagem falada e escrita, em seus diversos níveis, proporcionando habilidades linguísticas de produção textual oral e escrita: formas e funções, sintaxe, elementos textuais, produção de texto e paráfrase.",
          },
          {
            nome: "Antigo Testamento III",
            descricao:
              "Pretende oportunizar um conhecimento analítico e crítico, capacitando o aluno com a competência de pesquisar, interpretar e compreender o Antigo Testamento de forma panorâmica, linear e reflexiva. Oferece ao aluno conhecimento, recursos e ferramentas introdutórias para os estudos dos Livros Proféticos.",
          },
          {
            nome: "Novo Testamento II",
            descricao:
              "Pretende oportunizar um conhecimento analítico e crítico, capacitando o aluno com a competência de pesquisar, interpretar e compreender o Novo Testamento de forma panorâmica, linear e reflexiva. Oferece ao aluno conhecimento, recursos e ferramentas introdutórias para os estudos das Epístolas Paulinas, das Epístolas Gerais e do livro de Apocalipse.",
          },
          {
            nome: "Grego I",
            descricao: "Sistema verbal grego e declinações.",
          },
          {
            nome: "Filosofia Geral",
            descricao:
              "Introdução geral à problemática filosófica e ao objeto da Filosofia, abordando temáticas específicas como ser, conhecimento, práxis, liberdade, homem e mundo, além da reflexão filosófica e da relação entre ciência, verdade e método: introdução à Filosofia, Lógica, Epistemologia, Antropologia e Metafísica.",
          },
          {
            nome: "Hebraico I",
            descricao:
              "Compreender como o Antigo Testamento foi escrito em sua língua original: formas e significados de pontuação, sistema verbal hebraico, as formas do incompleto e a prática de leitura e tradução.",
          },
          {
            nome: "Hermenêutica Avançada",
            descricao:
              "Compreender que a utilização da hermenêutica é uma ferramenta fundamental na interpretação dos textos sagrados: introdução à Hermenêutica, a necessidade de interpretação, vocabulário hermenêutico, história da interpretação, o Espírito Santo e a interpretação bíblica, métodos de estudo bíblico, e a exegese e a pregação.",
          },
          {
            nome: "Metodologia de Pesquisa Científica",
            descricao:
              "Introdução à Filosofia da Ciência a partir de Sócrates, René Descartes, Augusto Comte, Karl Popper e Thomas Kuhn; elaboração de projetos de pesquisa; coleta, análise e tratamento de dados em pesquisa quantitativa; elaboração de relatório de pesquisa para publicação; coleta, análise e tratamento de dados em pesquisa qualitativa — análise de conteúdo, pesquisa-ação e pesquisa participante. Cursada em grupos de pesquisa, como atividade de iniciação científica.",
          },
          {
            nome: "Teologia Sistemática III",
            descricao:
              "Análise bíblica que permite ao aluno interagir com os conteúdos como fonte de saber, entendendo a profundidade de uma formação teológica e sua contribuição para a Pneumatologia, a Doutrina dos Anjos e a Escatologia Bíblica.",
          },
          {
            nome: "Louvor e Adoração",
            descricao:
              "Compreender as mais diversas questões relativas à liturgia e ao culto, em especial no que diz respeito ao louvor e à adoração, tendo como pano de fundo o Antigo e o Novo Testamento.",
          },
          {
            nome: "Grego II",
            descricao:
              "Fonética, morfologia e sintaxe fundamental; composição de palavras; prática de versão e tradução; leitura, tradução e comentários; liturgia e culto; liturgia e adoração no Novo Testamento; culto cristão; repertório.",
          },
          {
            nome: "Hebraico II",
            descricao:
              "Compreender como o Antigo Testamento foi escrito em sua língua original: formas e significados de pontuação, sistema verbal hebraico, as formas do incompleto e a prática de leitura e tradução, partículas de interrogação e o incompleto.",
          },
        ],
      },
    ],
  },
  {
    slug: "cfo",
    grupo: "Formação de Liderança",
    sigla: "CFO",
    nome: "Curso de Formação de Obreiros",
    icone: "/cursos/curso-cfo.png",
    resumo:
      "Prepara obreiros para servir com excelência nas diversas frentes de trabalho da igreja local.",
    grade: [
      {
        disciplinas: [
          { nome: "Ética Ministerial" },
          { nome: "Visão do Ministério" },
          { nome: "Diaconato" },
          { nome: "Comunicação" },
          { nome: "Administração e Liderança" },
          { nome: "Aconselhamento Cristão" },
          { nome: "Doutrinas e Costumes" },
          { nome: "Psicologia Educacional" },
        ],
      },
    ],
  },
  {
    slug: "talita",
    grupo: "Formação de Liderança",
    sigla: "TALITA",
    nome: "Técnicas Avançadas de Liderança Infantil e Trabalhos de Abordagem",
    icone: "/cursos/curso-talita.png",
    resumo:
      "Capacita educadores e líderes para o trabalho com crianças, unindo pedagogia cristã e prática ministerial.",
    grade: [
      {
        disciplinas: [
          { nome: "Teologia Sistemática" },
          { nome: "Didática Geral" },
          { nome: "Musicalização" },
          { nome: "Escola Bíblica Dominical" },
          { nome: "Psicologia Educacional" },
          { nome: "Bibliologia" },
          { nome: "Evangelismo Infantil" },
          { nome: "Oficina Pedagógica" },
        ],
      },
    ],
  },
];

export function getCursoBySlug(slug: string): Curso | undefined {
  return cursos.find((c) => c.slug === slug);
}
