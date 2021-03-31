'use strict';
const d = document;
const db = [
  {
    fullname: 'linda johnson',
    role: 'ceo',
    review:
      'Nam eros tellus, fringilla vitae accumsan sodales, tincidunt pretium purus. Nam tempus mauris quam, eft faucibus diam cursus id. Curabitur dapibus blandit ex nec viverra. Donec justo erat, maximus fermentum erat at, semper tincidunt libero. In sodalzes risus a accumsan efficitur.',
    photo: 'profile_1',
  },
  {
    fullname: 'john brown',
    role: 'coo',
    review:
      'Nullam dolor orci, aliquam eu nunc id, tristique fermentum eros. Aliquam eget porta massdfsa. Etiam at qdfeuam ac eros luctdus imperdiet. Mauris tincidunt quam a metus sagittis, eu dignissim nunc mollis. Maecenas nisi sapien, tempus eerrrfytu facilisis maximus, blandit sed dolor.',
    photo: 'profile_2',
  },
  {
    fullname: 'robert smith',
    role: 'cfo',
    review:
      'Vivamus rutqodrpgrum felis ut velit euismod pellentesque. Etiadm molrestie suscipit nulla dignissim gravida. Proin volutpat massa nisi, a euismod ex semper vitae. Sed csmngpriuon sequat, eros a varius laqrucj cinia, arcu sapien pretium justo, non vestibulum arcu tellus et libero.',
    photo: 'profile_3',
  },
  {
    fullname: 'michael davis',
    role: 'cmo',
    review:
      'Curabitur convsballis augue qusuis tellus ultdrices finibus. Integer eget nibh in lorem cursus vestibulum. Praesent tincidunt in purus ut imperdiet. Donsipec blandfdit, lorefqm a sagittis tempus, metus dui ferm enfoptum diam, sswmhed scele risque leo arcvgiu egrjoppret ligulayda.',
    photo: 'profile_4',
  },
  {
    fullname: 'william miller',
    role: 'cto',
    review:
      'Nam congue dignissim ullamcorper. Pellentesque pharetra semper laoreet. Morbi ac  ex semper vita libero augue. Donec hendrerit sem sed vulputate bibendum. In scelerisque  met magna eu ligula varius feugiat sit dapibus blandit viverra. Donec justo erat, maximus erat amet at risus.',
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
