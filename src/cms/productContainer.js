import React, {PropTypes,Component} from 'react';
import cx from 'classnames';

class Renderer extends Component
{
  render()
  {
    const Product = this.props.product || this.props['data-rdl'].product; // Compatible with new RDL
    const {attributes} = Product;
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

class Tabs extends Component
{
  render() {
    const Product = this.props.product || this.props['data-rdl'].product; // Compatible with new RDL
    const sizing = Product.sizingchart || _.get( Product, 'attributes.fitContent', 'No sizing information available...' );
    const care = Product.care || _.get( Product, 'attributes.careContent', 'No care information available...' );
    return (
      <div className="tab-container">
        <div className="tabs">
          <input id="tab-one" type="radio" name="grp" defaultChecked/>
          <label htmlFor="tab-one">Features</label>
          <div className={cx('tab-content','tab-content-features',Product.hasOwnProperty('apma') && Product.apma === 'Yes' ? 'tab-content-apma' : '')} dangerouslySetInnerHTML={{__html:Product.features}}></div>

          <input id="tab-two" type="radio" name="grp" />
          <label htmlFor="tab-two">Sizing</label>
          <div className="tab-content" dangerouslySetInnerHTML={{__html:sizing}}></div>

          <input id="tab-three" type="radio" name="grp" />
          <label htmlFor="tab-three">Care</label>
          <div className="tab-content" dangerouslySetInnerHTML={{__html:care}}></div>
        </div>
      </div>
    )
  }
}


const productContainerStructure = {
  className: 'product-container-portrait',
  children: [
    {
      className: 'product-content',
      children: [
        {
          className: 'product-content-title',
          children: [
            'name',
            'rating',
            'price',

            'sku'
          ]
        },
        'gallery',
        <Tabs/>
      ]
    },
    'checkout'
  ]
};

export default productContainerStructure;