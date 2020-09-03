module.exports = {
  title: 'Tech Notes',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Data Structure', link: '/hello.html'},
      { text: 'System Design', link: '/guide/' },
      { text: 'My Website', link: 'https://elvinyhl.com/' }
    ],
    sidebar: [
      '/',
      '/hello',
      {
        title: 'Group 1',   // required
        path: '/hello',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/hello'
        ]
      },
    ],
    // lastUpdated: 'Last Updated',
    logo: '/assets/img/hero.png',
    repo: 'elvinyhlee/MyNotes',
    repoLabel: 'Github',
  }
};
