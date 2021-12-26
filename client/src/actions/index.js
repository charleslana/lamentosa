import { renderLanguage, addLanguageClick } from '../languages/index.js';
import addLoginClick from './login-action.js';
import addLogoutClick from './logout-action.js';
import addRegisterClick from './register-action.js';
import { listenerModal } from './modal-action.js';
import { addRouteClick } from './route-action.js';

export default class Action {
  addEventClick() {
    addRouteClick();
    addLanguageClick();
    renderLanguage();
    addLoginClick();
    addRegisterClick();
    addLogoutClick();
    listenerModal();
  }
}
