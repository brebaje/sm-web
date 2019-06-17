import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBabyCarriage,
  faBasketballBall,
  faCocktail,
  faDrumstickBite,
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

const icons = {
  faBabyCarriage,
  faBasketballBall,
  faCocktail,
  faChartBar,
  faDrumstickBite,
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
};

export default () => {
  Object.keys(icons).forEach((icon) => {
    library.add(icons[icon]);
  });
};
