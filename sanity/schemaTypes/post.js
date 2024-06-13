export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation:(val)=>val.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation:(val)=>val.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation:(val)=>val.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation:(val)=>val.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation:(val)=>val.required()
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation:(val)=>val.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation:(val)=>val.required()
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}
