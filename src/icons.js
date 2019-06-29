import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBabyCarriage,
  faBasketballBall,
  faCocktail,
  faCode,
  faDrumstickBite,
  faExternalLinkAlt,
  faGlobeAmericas,
  faGuitar,
  faHatWizard,
  faHome,
  faMedal,
  faParking,
  faQuestion,
  faQuestionCircle,
  faQuoteLeft,
  faQuoteRight,
  faRunning,
  faTimesCircle,
  faTooth,
  faTrophy,
  faUser,
  faUsers,
  faUserGraduate,
  faUserMd,
} from '@fortawesome/free-solid-svg-icons';

import {
  faChartBar,
} from '@fortawesome/free-regular-svg-icons';

import {
  faFontAwesome,
  faGithubSquare,
  faNode,
  faSass,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';

const icons = {
  faBabyCarriage,
  faBasketballBall,
  faCocktail,
  faCode,
  faChartBar,
  faDrumstickBite,
  faExternalLinkAlt,
  faFontAwesome,
  faGithubSquare,
  faGlobeAmericas,
  faGuitar,
  faHatWizard,
  faHome,
  faMedal,
  faNode,
  faParking,
  faQuestion,
  faQuestionCircle,
  faQuoteLeft,
  faQuoteRight,
  faRunning,
  faSass,
  faTimesCircle,
  faTooth,
  faTrophy,
  faUser,
  faUsers,
  faUserGraduate,
  faUserMd,
  faVuejs,
};

export default () => {
  Object.keys(icons).forEach((icon) => {
    library.add(icons[icon]);
  });
};
