export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ef0b1f05eb82303ee0686ab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fzi255j3',
                  apiId: 'cec46bb0-d145-4090-9804-37bd5eab5a3c'
                },
                {
                  buildHookId: '5ef0b1f0c4db5bffffaeb4e3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-irmuzeoj',
                  apiId: '8ac1f24e-df9b-4f37-a8c1-a30f4a42cfb2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lekevoid/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-irmuzeoj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
