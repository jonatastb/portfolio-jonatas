
export const EnglishData = {
  career: 'SYSTEMS DEVELOPER',
  meet: 'Get to know my work',
  seniority: ['Basic', 'Intermediary', 'Advanced'],
  navMenu: [
    {opt: 'About me', link: '#about'},
    {opt: 'Technologies', link: '#technologies'},
    {opt: 'Projects', link: '#projects'},
    {opt: 'Contact', link: '#contact'},
    {opt: 'More', link: '#'},
  ],
  about: {
    title: 'Hello!',
    paragraphs: [
        'My name is Jonatas Bueno, and my journey in programming began in childhood. My interest in my brother\'s work led me to receive a course in game development with Unity as a gift. At that time, I had no idea about the vast and fascinating world of programming that awaited me. It was during this period that I had my first contact with the C# language.',
        'After school, I started my studies in college with a focus on Systems Analysis and Development. However, I did not wait for the programming classes and began studying on my own. In 2023, I completed my college studies, but my independent learning will never end, and I hope it never will. Among many hobbies, studying my field is one of my favorites.',
        'Speaking of hobbies, when I am not studying, I am watching science fiction or fantasy series, playing online games, or reading books of the same genre. Always accompanied by my girlfriend and our three cats.',
        'Next, get to know my professional side.',
    ]
  },
  technologies_titles: {
    principal:'Technologies',
    main: 'Main ones I worked on',
    others: 'Others I know',
    design: 'Patterns and Principles that I use',
    exp: 'experience'
  },
  technologies: {
    main: [
      {
        title: 'PHP',
        subtitle: 'Advanced',
        years: '3 years',
        color: '#8A94BF',
        certified: 'https://www.devmedia.com.br/certificado/tecnologia/php/jonatas-teixeira-bueno',
        projects: '',
        
      },
      {
        title: 'Laravel',
        subtitle: 'Intermediary',
        years: '3 years',
        color: '#F46157',
        certified: 'https://www.devmedia.com.br/certificado/tecnologia/laravel/jonatas-teixeira-bueno',
        projects: '',
        
      },
      {
        title: 'Node',
        subtitle: 'Intermediary',
        years: '1 year',
        color: '#529F41',
        certified: 'https://www.devmedia.com.br/certificado/tecnologia/node-js/jonatas-teixeira-bueno',
        projects: '',
       
      },
      {
        title: 'React',
        subtitle: 'Intermediary',
        years: '1 year',
        color: '#00D8ff',
        projects: '',
      
      },
      {
        title: 'Vue',
        subtitle: 'Intermediary',
        years: '1 year',
        color: '#529F41',
        projects: '',
      
      },
    ],
    secondary: [
      {
        title: 'Python',
        subtitle: 'Basic',
      },
      {
        title: 'HTML',
        subtitle: 'Advanced',
        years: '3 years',
      },
      {
        title: 'CSS',
        subtitle: 'Advanced',
        years: '3 years',
      },
      {
        title: 'MySQL',
        subtitle: 'Advanced',
        years: '3 years',
      },
      {
        title: 'PostgreSQL',
        subtitle: 'Advanced',
        years: '2 years',
      },
      {
        title: 'Docker',
        subtitle: 'Intermediary',
        years: '2 years',
      },
      {
        title: 'SQLite',
        subtitle: 'Intermediary',
      },
      {
        title: 'MongoDB',
        subtitle: 'Basic',
      },
      {
        title: 'Jira',
        subtitle: 'Advanced',
        years: '2 years',
      },
      {
        title: 'Git',
        subtitle: 'Advanced',
        years: '3 years',
      },
      {
        title: 'Tailwind',
        subtitle: 'Advanced',
        years: '2 years',
      },
      {
        title: 'Bootstrap',
        subtitle: 'Advanced',
        years: '3 years',
      },
      {
        title: 'JQuery',
        subtitle: 'Intermediary',
        years: '3 years',
      },
    ],
  },
  projects: {
    title: 'My study projects',
    linkTitle: 'Go to repository',
    pending: 'pending',
    list: [
      {
        title: 'Basic E-Commerce',
        type: 'Full-stack',
        link: 'https://github.com/jonatastb/ecommerce.git',
        descriptionOne: '',
        descriptionTwo: 'project to manage products in an online store, using Laravel: Eloquent, Pagination e Storage.',
        cover: 'apple.png',
        tags: [
          {tag: 'Laravel', color: 'rgb(244, 97, 87)'},
          {tag: 'Tailwind', color: '#38BDF8'},
          {tag: 'SQLite', color: '#003B57'},
        ]
      },
      {
        title: 'Pomodoro Timer',
        type: 'Front-end',
        link: 'https://github.com/jonatastb/timer-react.git',
        descriptionOne: '',
        descriptionTwo: 'project of a timer with the pomodoro method.',
        cover: 'pomodoro.png',
        tags: [
          {tag: 'React', color: '#06a3be'},
          {tag: 'Typescript', color: '#3178C6'},
          {tag: 'Styled Components', color: '#DB7093'},
        ]
      },
      {
        title: 'Book Store API',
        type: 'Back-end',
        link: 'https://github.com/jonatastb/task-book-store.git',
        descriptionOne: '',
        descriptionTwo: 'project to manage books in a bookstore, along with user login and logout.',
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
        title: 'Forum',
        type: 'Front-end',
        link: 'https://github.com/jonatastb/forum-react.git',
        descriptionOne: '',
        descriptionTwo: 'project of a forum for posts and comments. No back end.',
        cover: 'forum.png',
        tags: [
          {tag: 'React', color: '#06a3be'},
          {tag: 'Typescript', color: '#3178C6'},
        ]
      },
      {
        title: 'World Countries Weather',
        type: 'Full-stack',
        link: 'https://github.com/jonatastb/monday-task.git',
        descriptionOne: '',
        descriptionTwo: 'project designed to bring data from several countries and their climate.',
        cover: 'world.png',
        tags: [
          {tag: 'API GraphQL', color: '#E10098'},
          {tag: 'NodeJS', color: '#339933'},
          {tag: 'Typescript', color: '#3178C6'},
          {tag: 'React', color: '#06a3be'},
          {tag: 'Fastify', color: '#000000'},
        ]
      },
      {
        title: 'Banking Transactions API',
        type: 'Back-end',
        link: 'https://github.com/jonatastb/api-node-transactions.git',
        descriptionOne: '',
        descriptionTwo: 'project made for credit and debit card transactions.',
        cover: 'money.png',
        tags: [
          {tag: 'API REST', color: '#61DAFB'},
          {tag: 'NodeJS', color: '#339933'},
          {tag: 'Typescript', color: '#3178C6'},
          {tag: 'Fastify', color: '#000000'},
          {tag: 'SQLite', color: '#003B57'},
        ]
      },
      {
        title: 'CRUD',
        type: 'Full-stack',
        link: 'https://github.com/jonatastb/crud_laravel.git',
        descriptionOne: 'Simple ',
        descriptionTwo: 'project to study Laravel Eloquent.',
        cover: 'crud.png',
        tags: [
          {tag: 'Laravel', color: 'rgb(244, 97, 87)'},
          {tag: 'MySQL', color: '#00758F'},
        ]
      },
    ]
  },
  contact: {
    title: "Know more or contact me:",
    contacts: [
      {name: "LinkedIn", ulr: "https://www.linkedin.com"},
      {name: "Phone", url: "tel:11999999999"},
      {name: "GitHub", ulr: "https://github.com/jonatastb"},
      {name: "E-mail", ulr: "mailto:q0u0u@example.com"},
      {name: "Resume", url: "/"},
    ],
  }
}