import React from 'react';
import {Route, Link} from 'react-router';
import FLCollection from './util/embeddedCollection';

let collectionCode = 'deck57682c995dffd0-30338856';
if (__ISPROD__)
  collectionCode = 'deck592dd90a977bc9-77341950';

const welcomeStructure = {
  children: [
    //<FLCollection code={collectionCode} api={retrieveDataManager()} style={{height: 'calc(100vw * 0.5625)'}}/>,
    {
      className: 'panel',
      children: [
        '<h1>Hello</h1>',
        '<p>Welcome to the FoyerLive wireframe theme.</p>',
        'start',
        'browse'
      ]
    }
  ]
};

export default welcomeStructure