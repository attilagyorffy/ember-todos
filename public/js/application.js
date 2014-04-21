window.Todos = Ember.Application.create();

/*
 * TODO: Find out how we can define the ApplicationAdapter upon initialisation
*/
Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
