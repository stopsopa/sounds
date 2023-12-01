(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // list of dependencies here to check vvv
    define([], factory);
  } else if (typeof exports === "object") {
    // list of dependencies here to check vvv
    module.exports = factory();
  } else {
    // global name of library to set
    var name = "SoundsList";

    var original = root[name];

    // list of dependencies here to check vvv
    var lib = factory();

    root[name] = lib;

    root["__" + name + "NoConflict"] = function () {
      root[name] = original;

      return lib;
    };
  }
  // list of dependencies here to check vvv
})(this, function () {
  function SoundsList(list) {
    this.list = list;
    this.length = list.length;

    this.preloadedRandom;
    this.preloadedNext = -1;
    this.preloadedCache = {};

    this.randomPreload();
    this.nextPreload();
  }

  SoundsList.prototype.nextPreload = function () {
    this.preloadedNext += 1;
    if (!this.list[this.preloadedNext]) {
      this.preloadedNext = 0;
    }
    this._preaload(this.list[this.preloadedNext]);
  };

  SoundsList.prototype.randomPreload = function () {
    this.preloadedRandom = getRandom(this.list);
    this._preaload(this.preloadedRandom);
  };

  SoundsList.prototype.randomPlay = function () {
    var audio = new Audio(this.preloadedRandom);
    audio.play();
    this.randomPreload();
  };

  SoundsList.prototype.nextPlay = function () {
    var audio = new Audio(this.list[this.preloadedNext]);
    audio.play();
    this.nextPreload();
  };

  SoundsList.prototype._preaload = function (url) {
    if (!this.preloadedCache[url]) {
      this.preloadedCache[url] = fetch(url);
    }
  };

  function getRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  return SoundsList;
});
