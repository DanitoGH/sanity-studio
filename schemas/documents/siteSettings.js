
export const titleLocaleString = {
  name: 'titleLocaleString',
  title: 'Title',
  type: 'object',
  fields: [
    {name: 'en', type: 'string', title: 'English'},
    {name: 'su', type: 'string', title: 'Suomi'}
  ]
}

export const descriptionLocaleString = {
  name: 'descriptionLocaleString',
  title: 'Title',
  type: 'object',
  fields: [
    {name: 'en', type: 'string', title: 'English'},
    {name: 'su', type: 'string', title: 'Suomi'}
  ]
}

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      type: 'titleLocaleString',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'descriptionLocaleString',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
