const indexContainerStructure = {
  children: [
    {
      node: 'header',
      children: [
        'back',
        'search'
      ]
    },
    'content',
    'cart',
    {
      node: 'footer',
      children:[
        {
          className: 'footer-wrapper',
          children: [
            {
              className: 'footer-left',
              children: [
                'breadcrumbs'
              ]
            },
            {
              className: 'footer-right',
              children: [
                'help'
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default indexContainerStructure