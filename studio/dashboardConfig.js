export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60426b49983fce50df6aa3c7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-is32yj6f',
                  apiId: '6110ca29-be9f-48e0-b05d-607a31a52f01'
                },
                {
                  buildHookId: '60426b49983fce51f36aa217',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z84k44y5',
                  apiId: '42b9ddb6-1b10-49bd-bba7-e439b842704f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tecnoprof/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z84k44y5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
