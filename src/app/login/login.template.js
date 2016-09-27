export const loginTemplate  = `
  <h1>{{title}}</h1>

  <!-- Angular1 Service Result -->
  <p>login status: {{status}}</p>

  <!-- Angular2 Provider Result -->
  <p>geo: {{geo}}</p>

  <!-- Angular2 Component -->
  <cool-toggle></cool-toggle>

  <!-- Angular1 Component -->
  <cool-button></cool-button>

  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="150" height="150" />
  <div ui-view="hello"></div>
  
  <hr />
  <a href="#" class="button" ui-sref="login.hello">Goto ng1 substate</a>
  <a href="#" class="button" ui-sref="admin">Goto ng2 page</a>
`;
