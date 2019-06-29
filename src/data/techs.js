const backend = {
  repository: {
    docs: 'https://sm-rest-api.herokuapp.com/docs',
    icon: {
      class: 'github',
      fa: true,
      faName: 'github-square',
    },
    name: 'sm-api',
    url: 'https://github.com/brebaje/sm-api',
  },
  hosting: [
    {
      icon: {
        class: 'heroku',
        fa: false,
      },
      name: 'Heroku',
      url: 'https://heroku.com/',
    },
    {
      icon: {
        class: 'mlab',
        fa: false,
      },
      name: 'mLab',
      url: 'https://mlab.com/',
    },
  ],
  techs: [
    {
      icon: {
        class: 'express',
        fa: false,
      },
      name: 'Express.js',
      url: 'https://expressjs.com/',
    },
    {
      icon: {
        class: 'node',
        fa: true,
        faName: 'node',
      },
      name: 'Node.js',
      url: 'https://nodejs.org/en/',
    },
    {
      icon: {
        class: 'mongo',
        fa: false,
      },
      name: 'MongoDB',
      url: 'https://www.mongodb.com/',
    },
  ],
};

const frontend = {
  repository: {
    icon: {
      class: 'github',
      fa: true,
      faName: 'github-square',
    },
    name: 'sm-web',
    url: 'https://github.com/brebaje/sm-web',
  },
  techs: [
    {
      icon: {
        class: 'vue',
        fa: true,
        faName: 'vuejs',
      },
      name: 'Vue.js',
      url: 'https://vuejs.org/',
    },
    {
      icon: {
        class: 'sass',
        fa: true,
        faName: 'sass',
      },
      name: 'Sass',
      url: 'https://sass-lang.com/',
    },
    {
      icon: {
        class: 'fontawesome',
        fa: true,
        faName: 'font-awesome',
      },
      name: 'FontAwesome',
      url: 'https://fontawesome.com/',
    },
  ],
};

export { backend, frontend };
