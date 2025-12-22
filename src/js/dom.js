import luhn from './luhn';
import paymentSystem from './paymentSystem';

import visaImg from '../img/visa.png';
import mastercardImg from '../img/mastercard.png';
import maestroImg from '../img/maestro.png';
import amexImg from '../img/amex.png';
import jcbImg from '../img/jcb.png';
import mirImg from '../img/mir.png';

export default function initDom() {
  const form = document.querySelector('.card-form');
  const input = form.querySelector('.card-input');
  const button = form.querySelector('.card-button');
  const cards = [...document.querySelectorAll('.card')];

  const imgMap = {
    visa: visaImg,
    mastercard: mastercardImg,
    maestro: maestroImg,
    amex: amexImg,
    jcb: jcbImg,
    mir: mirImg,
  };

  cards.forEach((el) => {
    const system = el.dataset.system;
    el.querySelector('img').src = imgMap[system];
  });

  const reset = () =>
    cards.forEach((el) => el.classList.remove('card_active', 'card_invalid'));

  const highlight = (system) =>
    cards.forEach((el) =>
      el.classList.toggle('card_active', el.dataset.system === system)
    );

  button.addEventListener('click', (e) => {
    e.preventDefault();

    reset();

    const value = input.value;
    const valid = luhn(value);

    if (!valid) {
      cards.forEach((el) => el.classList.add('card_invalid'));
      return;
    }

    const system = paymentSystem(value);
    if (system) highlight(system);
  });
}
