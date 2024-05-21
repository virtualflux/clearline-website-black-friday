

export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name:"title",
      title:"Title",
      type:"string",
      validation:(val)=>val.required()
    },
    {
      name:"author",
      title:"Author",
      type:"string",
      validation:(val)=>val.required()
    },
    {
      name:"mainImage",
      title:"Main image",
      type:"image",
      options:{
        hotspot:true
      },
      fields:[
        {
          name:"alt",
          title:"Alternative Text",
          type:"string"
        }
      ]
    },
    {
      name:"publishedAt",
      title:"PublishedAt",
      type:"datetime",
      validation:(val)=>val.required()
    },
    {
      name:"body",
      title:"Body",
      type:"blockContent",
      validation:(val)=>val.required()
      
    },
    {
      name:"slug",
      title:"Slug",
      type:"slug",
      option:{
        source:"title",
        maxLength:40
      }
    },
  ],
  preview:{
  select:{
    title:"title",
    author:"author",
    media:"mainImage"
  },
  prepare(selection){
    const{author}=selection
    return {...selection, subtitle:author && `by ${author}`}
  }
  }
}
