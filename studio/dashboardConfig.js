export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61630ac7c3dcde882207e3a7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jrwtcrx2',
                  apiId: '12da8978-065e-490a-adfb-f126e2c5cd50'
                },
                {
                  buildHookId: '61630ac7dd648f0f4dc51055',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-92tb3dwy',
                  apiId: '40882a50-8456-47a8-a078-0e1cd6d4f8ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/faynburd/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-92tb3dwy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
