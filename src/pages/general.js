import footer from '../shared/footer.js';
import headerBar from '../shared/header-bar.js';
import menuBar from '../shared/menu-bar.js';

const general = () => {
  return `
    ${headerBar()}
    ${menuBar()}
    ${footer()}
  `;
};

export default general;
