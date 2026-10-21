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
  apresentacao?: string;
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
    apresentacao:
      "Esta é a primeira etapa de sua formação plena em Teologia. Nela, você receberá a formação factual bíblica que será o alicerce de sua jornada acadêmica até a conclusão do bacharelado. Cada disciplina que compõe este ciclo tem a finalidade de iniciar o estudante na história, na sequência e na cronologia bíblicas. Além disso, são matérias que abrem as portas da observação teológica.",
    grade: [
      {
        disciplinas: [
          { nome: "Bibliologia" },
          { nome: "Geografia Bíblica" },
          { nome: "Evangelhos" },
          { nome: "Doutrinas da Bíblia" },
          { nome: "Atos dos Apóstolos" },
          { nome: "Epístolas Paulinas" },
          { nome: "Epístolas Gerais" },
          { nome: "Pentateuco" },
          { nome: "Epístola aos Hebreus" },
          { nome: "Epístolas Paulinas II" },
          { nome: "Epístolas Paulinas III" },
          { nome: "Livros Históricos" },
          { nome: "Profetas Maiores" },
          { nome: "Profetas Menores" },
          { nome: "Livros Poéticos" },
          { nome: "Daniel e Apocalipse" },
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
    apresentacao:
      "Aqui o aluno é apresentado à análise bíblica, o que lhe permite interagir com os conteúdos bíblicos e factuais assimilados no Ciclo anterior. Ao cursar esta etapa da formação superior teológica, o aluno tem a oportunidade de desenvolver seu pensamento teológico graças às conexões com o 1º Ciclo e às pontes que se estendem rumo à etapa final do bacharelado em Teologia e Bíblia.",
    grade: [
      {
        disciplinas: [
          { nome: "Seitas e Heresias" },
          { nome: "Religiões Mundiais" },
          { nome: "Liderança Cristã" },
          { nome: "Evangelismo e Missões" },
          { nome: "Doutrina de Cristo" },
          { nome: "Doutrina do Espírito Santo" },
          { nome: "Hermenêutica Bíblica I" },
          { nome: "Escatologia Bíblica" },
          { nome: "Doutrina da Salvação" },
          { nome: "Doutrina de Deus" },
          { nome: "Educação Cristã" },
          { nome: "As Doutrinas do Homem e do Pecado" },
          { nome: "Ética Cristã" },
          { nome: "História da Igreja" },
          { nome: "Família Cristã" },
          { nome: "Homilética I" },
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
    apresentacao:
      "O desafio final do currículo teológico unificado consiste nas disciplinas críticas, que instigam o aluno à dedução teológica própria a partir das análises desenvolvidas no 2º Ciclo e do conhecimento factual bíblico do 1º Ciclo. As matérias que integram o Ciclo final são instrumentais e habilitam o estudante tanto no pensamento cristão como na prática ministerial.",
    grade: [
      {
        disciplinas: [
          { nome: "Identidade Teológica" },
          { nome: "Doutrina da Salvação II" },
          { nome: "Homilética II" },
          { nome: "Teologia do AT" },
          { nome: "Teologia do NT" },
          { nome: "Apologética" },
          { nome: "Relacionamento Cristão" },
          { nome: "Liturgias da Igreja Cristã" },
          { nome: "Português & Técnicas de Redação" },
          { nome: "Didática Geral" },
          { nome: "Hermenêutica Bíblica II" },
          { nome: "Cosmogonia Bíblica" },
          { nome: "Grego do NT" },
          { nome: "Bibliologia I" },
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
      "Prepara obreiros para servir com excelência nas diversas frentes de trabalho da igreja local. Conclua em apenas 4 meses!",
    grade: [
      {
        disciplinas: [
          { nome: "Declaração de Fé das Assembleias de Deus I" },
          { nome: "Declaração de Fé das Assembleias de Deus II" },
          { nome: "A Prática Diaconal na Igreja de Cristo" },
          { nome: "Administração Eclesiástica e Social da AD Paulínia" },
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
          { nome: "Bibliologia" },
          { nome: "Teologia Sistemática" },
          { nome: "Didática Cristã" },
          { nome: "Oficina Pedagógica" },
        ],
      },
    ],
  },
];

export function getCursoBySlug(slug: string): Curso | undefined {
  return cursos.find((c) => c.slug === slug);
}
