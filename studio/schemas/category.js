export default {
  name: 'category',
  title: 'Categorias',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: Rule => Rule.required().error('Introduce un titulo')
    },
    {
      name: 'description',
      title: 'Descripcion',
      type: 'text',
    },
  ],
}
