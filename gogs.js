// d55e67f5c724e12ce201acee9bd716eb4098b797

// https://github.com/gogs/docs-api

export class Gogs {
  constructor({ api = 'https://try.gogs.io', token }) {
    this.api = api;
    this.token = token;
    this.user = new User(this);
    this.repo = new Repo(this);
  }
  async request(method, path, data) {
    const { api, token } = this;
    const response = await fetch(api + path, {
      method,
      headers: {
        Authorization: `token ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

class User {
  constructor(client) {
    this.client = client;
  }
  create(user) {
    // POST /admin/users
  }
  repos() {
    // https://code.lsong.me/api/v1/user/repos?token=d55e67f5c724e12ce201acee9bd716eb4098b797
  }
}

class Repo {
  constructor(client) {
    this.client = client;
  }
  /**
   * https://github.com/gogs/docs-api/blob/master/Administration/Repositories.md#create-a-new-repository
   * @param {*} username 
   * @param {*} repo 
   * @returns 
   */
  create(username, repo) {
    return this.client.request('POST', `/admin/users/${username}/repos`, repo);
  }
}