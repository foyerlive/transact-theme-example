const indexContainerStructure = {
  children: [
    {
      node: 'header',
      children:[
        {
          className: 'header-wrapper',
          children: [
            {
              className: 'header-left',
              children: [
                'back',
              ]
            },
            {
              className: 'header-right',
              children: [
                'search',
                'cartButton'
              ]
            }
          ]
        }
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