var Notifier = (function() {
  var _map = {};
  return {
    subscribe: function(name, cb) {
      _map[name] || (_map[name] = []);
      _map[name].push(cb);
    },
    notify: function(name, data) {
      if (!_map[name]) {
        return;
      }
      _map[name].forEach(function(cb) {
        cb(data);
      });
    },
    unsubscribe: function(name) {
      if (!_map[name]) {
        return;
      }
      delete _map[name];
    }
  }
})();
