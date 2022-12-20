import { ready } from 'https://lsong.org/scripts/dom.js';
import { h, render, useState, useEffect } from 'https://lsong.org/scripts/components/react.js';

const domains = [
  "lsong.org",
  "lsong.me",
  "lsong.one",
];

const Domains = () => {
  return h('div', { className: 'domains' }, [
    h('h2', null, "Domains"),
    h('ul', null, domains.map(domain => h('li', null, domain)))
  ])
};

const record = {
  type: 'A',
  name: "www",
  content: "1.1.1.1",
  ttl: 300
};

const records = [
  record,
  record,
  record,
  record,
  record,
  record,
];

const Records = () => {
  return h('div', { className: 'records' }, [
    h('h2', null, "Records"),
    h('table', { className: "table table-border" }, [
      h('thead', null, [
        h('th', null, "type"),
        h('th', null, "name"),
        h('th', null, "content"),
        h('th', null, "ttl"),
      ]),
      h('tbody', null, [
        records.map(record => h('tr', null, [
          h('td', null, record.type),
          h('td', null, record.name),
          h('td', null, record.content),
          h('td', null, record.ttl),
        ]))
      ])
    ])
  ])
};

const App = () => {
  const [] = useState();
  useEffect(() => {
    console.log('App is ready');
  }, []);
  return [
    h(Domains),
    h(Records),
  ]
}

ready(() => {
  const app = document.getElementById('app');
  render(h(App), app);
});