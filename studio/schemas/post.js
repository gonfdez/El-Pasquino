export default {
  name: 'post',
  title: 'Articulos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: Rule => Rule.required().error('Es necesario un titulo')
    },
    {
      name: 'subtitle',
      title: 'Subtitulo',
      type: 'string',
      validation: Rule => Rule.required().error('Es necesario un subtitulo')
    },
    {
      name: 'slug',
      title: 'Enlace',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('Es necesario un enlace')
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Es necesaria una imagen principal')
    },
    {
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: Rule => Rule.required().error('Es necesaria al menos una categoria')
    },
    {
      name: 'publishedAt',
      title: 'Publicado el',
      type: 'datetime',
      validation: Rule => Rule.required().error('Es necesaria la fecha de publicacion')
    },
    {
      name: 'body',
      title: 'Cuerpo',
      type: 'blockContent',
      validation: Rule => Rule.required().error('Introduce el cuerpo del articulo')
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
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
