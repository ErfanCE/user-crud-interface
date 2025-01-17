const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const modalHeader = document.querySelector('.modal-header > h2');
const modalBody = document.querySelector('.modal-body');
const modalFooter = document.querySelector('.modal-footer');

const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close')[0];
const modalButton = document.getElementById('myBtn');

const tablePattern = [
  'uid',
  'firstname',
  'lastname',
  'city',
  'postalCode',
  'phoneNumber',
  'position'
];

let usersData = [
  {
    uid: 112233,
    firstname: 'amirhossein',
    lastname: 'kazemi',
    city: 'isfahan',
    postalCode: '2345672345',
    phoneNumber: '03111234234',
    position: 'ui designer'
  },
  {
    uid: 223344,
    firstname: 'ali',
    lastname: 'ahmadi',
    city: 'abhar',
    postalCode: '3345673232',
    phoneNumber: '04111334452',
    position: 'analyzer'
  },
  {
    uid: 334455,
    firstname: 'ali',
    lastname: 'ahmadi',
    city: 'rasht',
    postalCode: '9945643232',
    phoneNumber: '01131394855',
    position: 'ui designer'
  },
  {
    uid: 445566,
    firstname: 'shahriar',
    lastname: 'ahmadi gol',
    city: 'mashad',
    postalCode: '5545689232',
    phoneNumber: '04121334415',
    position: 'ui designer'
  },
  {
    uid: 556677,
    firstname: 'reza',
    lastname: 'rahmani',
    city: 'semnan',
    postalCode: '774565392',
    phoneNumber: '09331334225',
    position: 'analyzer'
  },
  {
    uid: 667788,
    firstname: 'mohammadhadi',
    lastname: 'soleimani',
    city: 'shiraz',
    postalCode: '7845482232',
    phoneNumber: '07771333455',
    position: 'php programmer'
  },
  {
    uid: 778899,
    firstname: 'mohsen',
    lastname: 'zare',
    city: 'zahedan',
    postalCode: '1145119212',
    phoneNumber: '01221399450',
    position: 'ux designer'
  },
  {
    uid: 889900,
    firstname: 'milad',
    lastname: 'rabani',
    city: 'qom',
    postalCode: '8845383233',
    phoneNumber: '08121320452',
    position: 'node programmer'
  },
  {
    uid: 990011,
    firstname: 'mahdi',
    lastname: 'mohseni naseb',
    city: 'ahvaz',
    postalCode: '2242689035',
    phoneNumber: '02211783452',
    position: 'ux designer'
  },
  {
    uid: 113344,
    firstname: 'soheil',
    lastname: 'hossein',
    city: 'arak',
    postalCode: '1145129244',
    phoneNumber: '01221334665',
    position: 'java programmer'
  }
];
