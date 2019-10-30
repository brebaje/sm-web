import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBabyCarriage,
  faBasketballBall,
  faCocktail,
  faCode,
  faDrumstickBite,
  faDumbbell,
  faExternalLinkAlt,
  faGlobeAmericas,
  faGuitar,
  faHatWizard,
  faHeart,
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
  faDumbbell,
  faExternalLinkAlt,
  faFontAwesome,
  faGithubSquare,
  faGlobeAmericas,
  faGuitar,
  faHatWizard,
  faHeart,
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
