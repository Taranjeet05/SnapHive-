const pin = {
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },

    {
      name: 'destination',
      title: 'Destination',
      type: 'url',
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      Options: {
        hotspot: true,
      },
    },

    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'Posted By',
      type: 'postedBy',
    },
    {
      name: 'save',
      title: 'Save',
      type: 'array',
      of: [{type: 'save'}],
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{type: 'comment'}],
    },
  ],
}

export default pin
