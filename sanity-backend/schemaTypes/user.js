// This is the schema definition for the user type

const user =  {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [{
    name: 'userName', 
    title: 'UserName', 
    type: 'string'
  },

  {
    name: 'image', 
    title: 'Image', 
    type: 'string'
  },

],
}

export default user