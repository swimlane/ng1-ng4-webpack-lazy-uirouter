export const loginTemplate  = `
  <h1>{{title}}</h1>
  <p>login status: {{status}}</p>
  <p>geo: {{geo}}</p>
  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="150" height="150" />
  <div ui-view="hello"></div>
  <hr />
  <a href="#" class="button" ui-sref="login.hello">Goto ng1 substate</a>
  <a href="#" class="button" ui-sref="admin">Goto ng2 page</a>
`;
