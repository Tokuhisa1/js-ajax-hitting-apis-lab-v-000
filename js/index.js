//  "getRepositories" loads the "repositories" div
// with a list of public repositories for that user.
function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}
// The displayed repositories should include the name and a link
// to the URL (HTML URL, not API URL).
function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos.map(
    r => {
      return '<li>' + '<a href="'+ r.html_url + '" >' + r.name +
      // Add a link to each repository that calls a "getCommits"
      // function on click
      '</a> - <a href="#" data-repo="' + r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>';
    }).join('')}</ul>`;

  document.getElementById('repositories').innerHTML = repoList;
}
// When the request is complete, call a "displayCommits" function
// that fills the "details" div with a list of commits for that
// repository. The display of commits should include the author's
// Github name, the author's full name, and the commit message.
// Give the link data attributes of username and repository to be
// used by the "getCommits" function.
function getCommits(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', 'https://api.github.com/repos/octocat/' + name + '/commits');
  req.send();
}
function displayCommits() {

}
// Add a link to each repository that calls a "getBranches"
// function when clicked and, when complete, calls a
// "displayBranches" function that fills the details div with a
// list of names of each branch of the repository. Give the link
// data attributes of username and repository for use by the
// "getBranches" function.
function getBranches() {

}
function displayBranches() {

}
