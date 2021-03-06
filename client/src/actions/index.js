import { renderLanguage, addLanguageClick } from '../languages/index.js';
import addLoginClick from './login-action.js';
import addLogoutClick from './logout-action.js';
import addRegisterClick from './register-action.js';
import { addRouteClick } from './route-action.js';
import { showDialogMarry, showDialogTrain } from './general-action.js';
import initSwiper from './swiper-action.js';
import initTooltip from './tooltip-action.js';

export default class Action {
  addEventClick() {
    addRouteClick();
    addLanguageClick();
    renderLanguage();
    addLoginClick();
    addRegisterClick();
    addLogoutClick();
    showDialogMarry();
    initSwiper();
    initTooltip();
    showDialogTrain();
  }
}
