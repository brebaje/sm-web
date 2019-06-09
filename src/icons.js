import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

const icons = {
  faTrophy,
};

export default () => {
  Object.keys(icons).forEach((icon) => {
    library.add(icons[icon]);
  });
};
