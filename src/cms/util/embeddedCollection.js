import React, {Component, PropTypes} from 'react';

class FLembeddedCollection extends Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    api: PropTypes.object.isRequired,
    style: PropTypes.object
  };

  static defaultProps = {
    style: {
      height: '300px'
    }
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      ready: false
    };
  }

  componentDidMount() {
    console.warn( 'API VERSION', this.props.api.version );
    console.log( 'not injecting...' );
    if( this.props.api.version && this.props.api.versionGT( '1.3.0' ) )
    {
      console.log( 'injecting...' );
      this.props.api.application.injectCollection(this.refs.app, this.props.code, {}).then((x) => {
        console.debug( 'I think it worked?', x );
        this.setState({ready:true});
      }).catch((err) => {
        console.error('Failed to inject collection...');
      });
    }
  }

  render() {
    let display = this.state.ready ? 'flex' : 'none';
    display = 'flex';
    return (
      <div ref="app" style={{flexFlow: 'row', display: display, ...this.props.style}}></div>
    )
  }

}

export default FLembeddedCollection;