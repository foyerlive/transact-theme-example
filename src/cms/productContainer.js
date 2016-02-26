import React, {PropTypes,Component} from 'react';

class Renderer extends Component
{
  render()
  {
    const {attributes} = this.props.product;
    let nodes = Object.keys( attributes ).map( (key) => {
      let label;
      switch( key )
      {
        case 'color':
          label = 'Colour:';
          break;
        case 'materialName':
          label = 'Material:';
          break;
        case 'stoneName':
          label = 'Stone:';
          break;
        case 'metalName':
          label = 'Metal:';
          break;
      }
      if( label )
        return <div key={key}><span className="attribute-label">{label}</span><span>{attributes[key]}</span></div>
    });
    return (
      <div className="product-attributes">
        {nodes}
      </div>
    )
  }
}


const productContainerStructure = {
  className: 'product-container-landscape',
  children: [
    {
      className: 'product-content-title',
      children: [
        'name',
        'price'
      ]
    },
    {
      className: 'product-content-main',
      children: [
        {
          className: 'product-content-left',
          children: [
            'sku',
            'features',
            <Renderer/>
          ]
        },
        {
          className: 'product-content-right',
          children: [
            'gallery'
          ]
        }
      ]
    }
  ]
};

export default productContainerStructure;