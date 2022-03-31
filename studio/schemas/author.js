export default {
  name: 'author',
  title: 'Autores',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: Rule => Rule.required().error('Es necesario un nombre')
    },
    {
      name: 'slug',
      title: 'Enlace',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('Introduce un enlace')
    },
    {
      name: 'image',
      title: 'Imagen de avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Obligatorio subir un avatar')
    },
    {
      name: 'bio',
      title: 'Biografia',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
