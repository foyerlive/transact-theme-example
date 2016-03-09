// New structures...
import indexContainerStructure from './indexContainer';
import productContainerStructure from './productContainer';
import homeContainerStructure from './homeContainer';

// CMS Pages
import technologyPage from './pages/technologyPage';

const cms = {
  indexContainerStructure: indexContainerStructure,
  productContainerStructure: productContainerStructure,
  homeContainerStructure: homeContainerStructure,
  pages: {
    technology: technologyPage
  }
};

export default cms;
