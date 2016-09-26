export function loadNg1Module(module) {
  return (transition) => {
    let $ocLazyLoad = transition.injector().get('$ocLazyLoad');

    return new Promise((success, fail) => {
      module.then(newModule => {
        if(!newModule.name) newModule = newModule.default;
        $ocLazyLoad.load(newModule).then(success, fail);
      });
    });
  };
}
