
export const PortugueseData = {
  career: 'DESENVOLVEDOR DE SISTEMAS',
  meet: 'Conheça meu trabalho',
  seniority: ['Básico', 'Intermediário', 'Avançado'],
  navMenu: [
    {opt: 'Sobre mim', link: '#about'},
    {opt: 'Tecnologias', link: '#technologies'},
    {opt: 'Projetos', link: '#projects'},
    {opt: 'Contato', link: '#contact'},
  ],
  about: {
    title: 'Olá!',
    paragraphs: [
      'Meu nome é Jonatas Bueno, e minha jornada na programação começou na infância. O interesse pelo trabalho do meu irmão me levou a ganhar um curso de desenvolvimento de jogos com Unity. Naquela época, eu não tinha ideia do vasto e fascinante mundo da programação que me esperava. Foi nesse período que tive meu primeiro contato com a linguagem C#.',
      'Após a escola, iniciei meus estudos na faculdade de Análise e Desenvolvimento de Sistemas. No entanto, não esperei pelas aulas de programação e comecei a estudar por conta própria. Em 2023, concluí meus estudos na faculdade, mas meu aprendizado independente nunca terminará, e assim espero. Entre muitos hobbies, estudar minha área é um dos meus favoritos.',
      'Falando em hobbies, quando não estou estudando, estou assistindo séries de ficção ou fantasia, jogando online, ou lendo livros do mesmo gênero. Sempre acompanhado da minha namorada e nossos três gatos.',
      'A seguir, conheça minha parte profissional.',
    ]
  },
  technologies_titles: {
    principal:'Tecnologias',
    main: 'Principais que trabalhei',
    others: 'Outras',
    design: 'Padrões e Princípios',
    exp: 'Experiência'
  },
  technologies: {
    main: [
      {
        title: 'PHP',
        subtitle: 'Avançado',
        years: '3 anos',
        color: '#8A94BF',
        certified: 'https://www.devmedia.com.br/certificado/tecnologia/php/jonatas-teixeira-bueno',
        projects: '',
      },
      {
        title: 'Laravel',
        subtitle: 'Intermediário',
        years: '3 anos',
        color: '#F46157',
        certified: 'https://www.devmedia.com.br/certificado/tecnologia/laravel/jonatas-teixeira-bueno',
        projects: '',
      },
      {
        title: 'Node',
        subtitle: 'Intermediário',
        years: '1 ano',
        color: '#529F41',
        certified: 'https://www.devmedia.com.br/certificado/tecnologia/node-js/jonatas-teixeira-bueno',
        projects: '',
      },
      {
        title: 'React',
        subtitle: 'Intermediário',
        years: '1 ano',
        color: '#00D8ff',
        projects: '',
      },
      {
        title: 'Vue',
        subtitle: 'Intermediário',
        years: '1 ano',
        color: '#529F41',
        projects: '',
      },
    ],
    secondary: [
      {
        title: 'Python',
        subtitle: 'Básico',
      },
      {
        title: 'HTML',
        subtitle: 'Avançado',
        years: '3 anos',
      },
      {
        title: 'CSS',
        subtitle: 'Avançado',
        years: '3 anos',
      },
      {
        title: 'MySQL',
        subtitle: 'Avançado',
        years: '3 anos',
      },
      {
        title: 'PostgreSQL',
        subtitle: 'Avançado',
        years: '2 anos',
      },
      {
        title: 'Docker',
        subtitle: 'Intermediário',
        years: '2 anos',
      },
      {
        title: 'SQLite',
        subtitle: 'Intermediário',
      },
      {
        title: 'MongoDB',
        subtitle: 'Básico',
      },
      {
        title: 'Jira',
        subtitle: 'Avançado',
        years: '2 anos',
      },
      {
        title: 'Git',
        subtitle: 'Avançado',
        years: '3 anos',
      },
      {
        title: 'Tailwind',
        subtitle: 'Avançado',
        years: '2 anos',
      },
      {
        title: 'Bootstrap',
        subtitle: 'Avançado',
        years: '3 anos',
      },
      {
        title: 'JQuery',
        subtitle: 'Intermediário',
        years: '3 anos',
      },
    ]
  },
  projects: {
    title: 'Meus projetos de estudo',
    linkTitle: 'Ir ao repositório',
    pending: 'pendente',
    list: [
      {
        title: 'E-Commerce básico',
        type: 'Full-stack',
        link: 'https://github.com/jonatastb/ecommerce.git',
        descriptionOne: 'Projeto ',
        descriptionTwo: 'para adminstrar produtos de uma loja online, utilizando Laravel: Eloquent, Pagination e Storage.',
        cover: 'apple.png',
        tags: [
          {tag: 'Laravel', color: 'rgb(244, 97, 87)'},
          {tag: 'Tailwind', color: '#38BDF8'},
          {tag: 'SQLite', color: '#003B57'},
        ]
      },
      {
        title: 'Temporizador Pomodoro',
        type: 'Front-end',
        link: 'https://github.com/jonatastb/timer-react.git',
        descriptionOne: 'Projeto ',
        descriptionTwo: 'de um timer com o método pomodoro.',
        cover: 'pomodoro.png',
        tags: [
          {tag: 'React', color: '#06a3be'},
          {tag: 'Typescript', color: '#3178C6'},
          {tag: 'Styled Components', color: '#DB7093'},
        ]
      },
      {
        title: 'API Loja de Livros',
        type: 'Back-end',
        link: 'https://github.com/jonatastb/task-book-store.git',
        descriptionOne: 'Projeto ',
        descriptionTwo: 'para administrar livros de uma livraria, juntamente com Login e Logout de usuários.',
        cover: 'book.png',
        tags: [
          {tag: 'API REST', color: '#61DAFB'},
          {tag: 'Laravel', color: 'rgb(244, 97, 87)'},
          {tag: 'MySQL', color: '#00758F'},
          {tag: 'DDD', color: '#5093E1'},
          {tag: 'PHPUnit', color: '#4A5259'},
        ]
      },
      {
        title: 'Fórum',
        type: 'Front-end',
        link: 'https://github.com/jonatastb/forum-react.git',
        descriptionOne: 'Projeto ',
        descriptionTwo: 'de um fórum para publicações e comentários. Sem back end.',
        cover: 'forum.png',
        tags: [
          {tag: 'React', color: '#06a3be'},
          {tag: 'Typescript', color: '#3178C6'},
        ]
      },
      {
        title: 'Clima dos Países',
        type: 'Full-stack',
        link: 'https://github.com/jonatastb/monday-task.git',
        descriptionOne: 'Projeto ',
        descriptionTwo: 'feito para trazer dados de vários países e seu clima.',
        cover: 'world.png',
        tags: [
          {tag: 'API GraphQL', color: '#E10098'},
          {tag: 'NodeJS', color: '#339933'},
          {tag: 'React', color: '#06a3be'},
          {tag: 'Typescript', color: '#3178C6'},
          {tag: 'Fastify', color: '#000000'},
        ]
      },
      {
        title: 'API Transações Bancárias',
        type: 'Back-end',
        link: 'https://github.com/jonatastb/api-node-transactions.git',
        descriptionOne: 'Projeto ',
        descriptionTwo: 'feito para transações de cartão de crédito e debito.',
        cover: 'money.png',
        tags: [
          {tag: 'API REST', color: '#61DAFB'},
          {tag: 'NodeJS', color: '#339933'},
          {tag: 'Typescript', color: '#3178C6'},
          {tag: 'Fastify', color: '#000000'},
          {tag: 'SQLite', color: '#003B57'},
          {tag: 'Dotenv', color: '#c2af17'},
        ]
      },
      {
        title: 'CRUD',
        type: 'Full-stack',
        link: 'https://github.com/jonatastb/crud_laravel.git',
        descriptionOne: 'Projeto ',
        descriptionTwo: 'simples para estudar Laravel Eloquent.',
        cover: 'crud.png',
        tags: [
          {tag: 'Laravel', color: 'rgb(244, 97, 87)'},
          {tag: 'MySQL', color: '#00758F'},
        ]
      },
    ]
  },
  contact: {
    title: "Fale comigo em:",
    contacts: [
      {name: "LinkedIn", url: "https://www.linkedin.com/in/jonatas-tb/"},
      {name: "E-mail", url: "mailto:jonatas.bueno@outlook.com"},
      {name: "Telefone", url: "tel:+5541987156232"},
      {name: "GitHub", url: "https://github.com/jonatastb"},
      {name: "Curriculo", url: "https://drive.google.com/file/d/1tCQuco5mRQOHUeVoTHp_0SZrUVkiahWA/view?usp=sharing"},
    ],
  }
}