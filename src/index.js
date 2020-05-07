import './styles.css';
// import gsap from 'gsap';
// let f = document.querySelector('#qw');
// gsap.to(f, 2, { delay: 1, y: 220, x: 50 });
import countries from './countries.js';
import countriesinjson from './countriesinjson.json';
import tmpl from './tmpl.hbs';

import eee from './eee.json';

// eee = JSON.stringify(countries);

export let jsonic = JSON.stringify(countries);

let c = {
  ult: document.querySelector('.cont'),
  hed: document.querySelector('.nav-list ul'),
};

const liArray = countriesinjson.map(el => tmpl(el));

c.ult.insertAdjacentHTML('beforeend', liArray[0]);

let obs = new IntersectionObserver(cbEntr, options);
const options = {
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.3,
};

obs.observe(c.ult.firstElementChild);

function cbEntr(entries, o) {
  entries.forEach(ent => {
    console.log('--------------------');
    console.log('hed:  ', c.hed.children);
    console.log('--------------------');
    console.log('1-10:  ', ent.time.toString()[3] * 1);
    console.log('--------------------');
    let countEl = ent.time.toString()[1] * 1;

    if (ent.isIntersecting) {
      c.hed.children.forEach(el => (el.style.backgroundColor = '#fff'));
      c.hed.children[countEl].style.backgroundColor = '#f00';

      if (liArray[c.ult.childElementCount]) {
        c.ult.insertAdjacentHTML('beforeend', liArray[c.ult.childElementCount]);
      }

      let lastElem = c.ult.lastElementChild;
      let previousElem = lastElem.previousElementSibling;

      console.log(obs === o); //true

      obs.observe(lastElem);
      obs.unobserve(previousElem);
    }
  });
}

// obs.observe(document.querySelector('.intro'));
// obs.observe(document.querySelector('.tst'));
// obs.observe(document.querySelector('.tss'));
// console.log('o.takeRecords:  ', obs.takeRecords());
