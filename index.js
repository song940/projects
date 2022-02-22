import { ready } from 'https://lsong.org/scripts/dom.js';
import {
  h, render, useState,
  useRouter, push, back,
  Link, Button,
} from 'https://lsong.org/scripts/components/index.js';

import { Gogs } from './gogs.js';

const gogs = new Gogs({
  api: 'https://code.lsong.me',
  token: 'd55e67f5c724e12ce201acee9bd716eb4098b797'
});

const Index = () => {
  return [
    h('h2', null, "Projects"),
    h(Link, { onClick: () => push('/new') }, "New")
  ]
};

const CreateProject = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const repo = await gogs.repo.create("test");
    console.log(repo);
  };
  return h('div', null, [
    h('h2', null, "Create Project"),
    h('form', { onSubmit: handleSubmit }, [
      h('input', { type: 'text', name: 'name' }),
      h('input', { type: 'submit', value: 'Create' }),
    ]),
  ]);
};

const routes = {
  '/': () => h(Index),
  '/new': () => h(CreateProject),
};

const App = () => useRouter(routes);

ready(() => {
  const app = document.getElementById('app');
  render(h(App), app);
});