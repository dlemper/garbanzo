// Github as storage provider

export default function createGithubStoragePlugin(options) { // factory function
  let unsubscribeCb;

  // store.replaceState(newState) on init & updates from github
  // save last commit hash and replace state if commit hash changed? (GET https://api.github.com/repos/:owner/:repo/git/refs/heads/master)
  // get file content (GET /repos/:owner/:repo/contents/:path) => json => .content => atob()
  // save file content (PUT /repos/:owner/:repo/contents/:path) => { message, content, [sha] } // sha if update
  // creds: `Basic ${btoa(username + ':' + 'password')}`

  return (store) => {
    unsubscribeCb = store.subscribe((mutation, state) => {
      console.log(mutation, state);
    });
  };
}


// Username
// Password
// repo

// factory
// - "constructor" => if config then subscribe
// - subscribe (config)
// - unsubscribe

// problem: wie wird gesynced bzw. wie kommen updates von gh zu pwa
// - regelmäßig pollen, 1x pro min?
// - vor update den aktuellen stand mergen
// event logging <= mutations in einem array speichern?