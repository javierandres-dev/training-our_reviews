'use strict';
const d = document;
const db = [
  {
    fullname: 'linda johnson',
    role: 'ceo',
    review:
      'Suspendisse vitae dapibus magna. Ut in ornare nulla, quis finibus sem. Vivamus libero leo, dapibus sit amet fringilla nec, sodales ac erat. Orci varius natoque penatibhus et magnis dis parturient montes, nascetur ridiculus mus. Fusce at diam et tellus gravida dapibus et eu justo.',
    photo: 'profile_1',
  },
  {
    fullname: 'john brown',
    role: 'coo',
    review:
      'Fusce quam libero, vulputate quis tellus fringilla, blandit iaculis ante. Vestibulum quis tincidunt purus. Nunc congue, dolor id venenatis ornare, velit est faucibus orci, sit amet euismod sapien tellus ac ipsum. Duis porta dolor vitae tincidunt rutrum. Sed iaculis felis ut puru.',
    photo: 'profile_2',
  },
  {
    fullname: 'robert smith',
    role: 'cfo',
    review:
      'Vestibulum quis dapibus est, et bibendum nibh. Aliquam erat volutpat. In feugiat laoreet turpis eu iaculis. Quisque ultrices odio viverra imperdiet consequat. Etiam dapibus magna at ullamcorper laoreet. Aenean turpis arcu, dapibus nec augue in, bibendum mattis metus. Etiam a orc.',
    photo: 'profile_3',
  },
  {
    fullname: 'michael davis',
    role: 'cmo',
    review:
      'Mauris semper hendrerit ante, ut rutrum ipsum dapibus ac. Etiam maximus fermentum turpis quis tincidunt. Donec dolor urna, mattis eget congue eget, commodo quis libero. Phasellus ut mi tortor. Fusce non tellus quis massa luctus venenatis. Curabitur faucibus metus quis iaculis tempor. Vivamus vulputate, lorem non porta aliquet, ipsum est bibendum nibh, at facilisis mauris arhrc.',
    photo: 'profile_4',
  },
  {
    fullname: 'william miller',
    role: 'cto',
    review:
      'Phasellus efficitur nisi ante, nec lobortis nisi lobortis ac. Etiam ut tortor mi. Aliquam non augue hendrerit metus rutrum dictum et sed nunc. Proin ac ipsum at risus finibus elementum vel hendrerit neque. Phasellus at hendrerit ex. Etiam rutrum at arcu Quisquez maximus interdum.',
    photo: 'profile_5',
  },
];
const $profile = d.getElementById('profile'),
  $btnPrevious = d.getElementById('btnPrevious'),
  $btnNext = d.getElementById('btnNext'),
  $btnSurprise = d.getElementById('btnSurprise');
let position = undefined;

d.addEventListener('DOMContentLoaded', () => {
  showProfile();
  eventListeners();
});

const eventListeners = () => {
  $btnPrevious.addEventListener('click', () => showProfile('previous'));
  $btnNext.addEventListener('click', () => showProfile('next'));
  $btnSurprise.addEventListener('click', () => showProfile('surprise'));
};

const showProfile = (whoCall = '') => {
  whoCall === '' ? (position = 0) : setPosition(whoCall);
  const profile = db[position];
  $profile.innerHTML = `
    <figure>
      <img src='./images/${profile.photo}.jpg' alt='${profile.fullname}' />
      <figcaption>${profile.fullname}</figcaption>
    </figure>
    <h2>${profile.role}</h2>
    <p>${profile.review}</p>
  `;
};

function setPosition(whoCalled) {
  if (whoCalled === 'previous') {
    position--;
    if (position < 0) {
      position = db.length - 1;
    }
  } else if (whoCalled === 'next') {
    position++;
    if (position > db.length - 1) {
      position = 0;
    }
  } else {
    position = Math.floor(Math.random() * db.length);
  }
}
