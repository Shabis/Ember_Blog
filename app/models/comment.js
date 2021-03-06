import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  author: DS.attr(),
  text: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
