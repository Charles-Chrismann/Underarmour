// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/script.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var element = document.querySelector(".openCookie");
var cookie = document.querySelector(".footer_cookie");
var cookieClose = document.querySelector(".popclose");
console.log(element); // element.addEventListener ('click', event => {
//     console.log(event);
//  cookie.classList.toggle("hide")   
// })
// cookieClose.addEventListener ('click', event => {
//     console.log(event);
//     cookie.style.display='none';
// })
// let plusOuMoin = 0
// function afficherSousCat(event){
//     //document.querySelector('.contenu').classList.add('show')
//     let i2 = document.querySelector('.fa-plus')
//     console.log(i2)
//     plusOuMoin++
//     let isActive = document.querySelector('.fas.fa-minus')
//     if (plusOuMoin % 2 ==0){
//         i2.classList.remove('fa-plus')
//         i2.classList.add('fa-minus')
//     } else {
//         i2.classList.remove('fa-minus')
//         i2.classList.add('fa-plus')
//     }
// }
// listeCat = [".categorie_meilleurs_ventes", ".categorie_tendances_hommes", ".categorie_tendances_femmes", ".categorie_tendances"]
// //let titlesAccordeon = document.querySelectorAll(".accordeon div")
// for (let i=0; i < listeCat.length; i++){
//     console.log(i);
//     document.querySelector(listeCat[i]).addEventListener('click',afficherSousCat)
// }

function Menu() {
  var self = this;
  this.menus = [{
    id: 1,
    name: "Nouveatés",
    childrens: [{
      id: 1,
      name: "Hommes Nouveautés",
      cat_id: 1,
      childrens: []
    }, {
      id: 2,
      name: "Femmes Nouveautés",
      cat_id: 1,
      childrens: []
    }, {
      id: 3,
      name: "Enfants Nouveatés",
      cat_id: 1,
      childrens: []
    }]
  }, {
    id: 2,
    name: "Chaussures",
    childrens: [{
      id: 4,
      name: "Chaussures pour hommes",
      cat_id: 2,
      childrens: [{
        id: 11,
        name: "Tout afficher",
        cat_id: 4,
        childrens: false
      }, {
        id: 12,
        name: "Chaussures de course",
        cat_id: 4,
        childrens: false
      }, {
        id: 13,
        name: "Chaussures d'entraînement",
        cat_id: 4,
        childrens: false
      }, {
        id: 14,
        name: "Boots de randonnée et tactical",
        cat_id: 4,
        childrens: false
      }, {
        id: 15,
        name: " Chaussures sportstyle",
        cat_id: 4,
        childrens: false
      }, {
        id: 16,
        name: "Chaussures de golf",
        cat_id: 4,
        childrens: false
      }, {
        id: 17,
        name: "Claquettes et sandales",
        cat_id: 4,
        childrens: false
      }, {
        id: 18,
        name: "Chaussures de basket",
        cat_id: 4,
        childrens: false
      }, {
        id: 19,
        name: "Chaussures de foot",
        cat_id: 4,
        childrens: false
      }]
    }, {
      id: 5,
      name: "Chaussures pour femmes",
      cat_id: 2,
      childrens: [{
        id: 1,
        name: "Chaussures de foot",
        cat_id: 5,
        childrens: false
      }, {
        id: 20,
        name: "Tout afficher",
        cat_id: 5,
        childrens: false
      }, {
        id: 21,
        name: "Chaussures de course",
        cat_id: 5,
        childrens: false
      }, {
        id: 22,
        name: "Chaussures d’entraînement",
        cat_id: 5,
        childrens: false
      }, {
        id: 23,
        name: "Chaussures sportstyle",
        cat_id: 5,
        childrens: false
      }, {
        id: 24,
        name: "Claquettes et sandales",
        cat_id: 5,
        childrens: false
      }, {
        id: 25,
        name: "Chaussures de golf",
        cat_id: 5,
        childrens: false
      }]
    }, {
      id: 6,
      name: "Chaussures pour Enfants",
      cat_id: 2,
      childrens: []
    }, {
      id: 7,
      name: "Achetez chaussures",
      cat_id: 2,
      childrens: []
    }, {
      id: 8,
      name: "HOVR™ RUNNING",
      cat_id: 2,
      childrens: []
    }, {
      id: 9,
      name: "Chaussures de course",
      cat_id: 2,
      childrens: []
    }, {
      id: 10,
      name: "Chaussures d’entraînement",
      cat_id: 2,
      childrens: []
    }, {
      id: 11,
      name: "CHAUSSURES DE GOLF",
      cat_id: 2,
      childrens: []
    }, {
      id: 12,
      name: "Boots Tactical",
      cat_id: 2,
      childrens: []
    }]
  }, {
    id: 3,
    name: "Hommes",
    childrens: [{
      id: 4,
      name: "Hauts",
      cat_id: 3,
      childrens: []
    }, {
      id: 5,
      name: "Bas",
      cat_id: 3,
      childrens: []
    }, {
      id: 6,
      name: "Accesssoires",
      cat_id: 3,
      childrens: []
    }, {
      id: 7,
      name: "Sports",
      cat_id: 3,
      childrens: []
    }, {
      id: 8,
      name: "Collection hommes",
      cat_id: 3,
      childrens: false
    }, {
      id: 9,
      name: "Projet Rock",
      cat_id: 3,
      childrens: false
    }, {
      id: 10,
      name: "HOVR™ Running",
      cat_id: 3,
      childrens: false
    }, {
      id: 11,
      name: "Collection RUSH",
      cat_id: 3,
      childrens: false
    }, {
      id: 12,
      name: "Exclusivités UA",
      cat_id: 3,
      childrens: false
    }]
  }, {
    id: 4,
    name: "Femmes",
    childrens: [{
      id: 4,
      name: "Hauts",
      cat_id: 3,
      childrens: []
    }, {
      id: 5,
      name: "Bas",
      cat_id: 3,
      childrens: []
    }, {
      id: 6,
      name: "Accesssoires",
      cat_id: 3,
      childrens: []
    }, {
      id: 7,
      name: "Sports",
      cat_id: 3,
      childrens: []
    }, {
      id: 8,
      name: "Collection femmes",
      cat_id: 3,
      childrens: false
    }, {
      id: 9,
      name: "Projet Rock",
      cat_id: 3,
      childrens: false
    }, {
      id: 10,
      name: "HOVR™ Running",
      cat_id: 3,
      childrens: false
    }, {
      id: 11,
      name: "Collection RUSH",
      cat_id: 3,
      childrens: false
    }, {
      id: 12,
      name: "Exclusivités UA",
      cat_id: 3,
      childrens: false
    }]
  }, {
    id: 5,
    name: "Enfants",
    childrens: true
  }, {
    id: 6,
    name: "Bonnes affaires",
    childrens: [{
      id: 1,
      name: "Hommes Bonnes affaires",
      cat_id: 6,
      childrens: false
    }, {
      id: 2,
      name: "Femmes Bonnes affaires",
      cat_id: 6,
      childrens: false
    }, {
      id: 3,
      name: "Enfants Bonnes affaires",
      cat_id: 6,
      childrens: false
    }]
  }];
  this.menus[2].childrens.unshift(this.menus[1]);
  this.menus[3].childrens.unshift(this.menus[1]);
  var hamburger = document.querySelector('.hamburger');
  var header = document.querySelector('header');
  this.navigationMobile = this.createElementWithClass("navigation-mobile", 'div');
  var primaryNav = this.createElementWithClass("primary-nav", 'nav');
  var container = this.createElementWithClass("mobile-nav-container", 'div');
  var principalList = this.createUl('Mon compte', 'is-active', false, this.menus);
  container.appendChild(principalList);
  primaryNav.appendChild(container);
  this.navigationMobile.appendChild(primaryNav);
  header.appendChild(this.navigationMobile);
  hamburger.addEventListener('click', function (e) {
    var hamburgerIsActive = document.querySelector('.hamburger.is-active');

    if (!hamburgerIsActive) {
      hamburger.classList.add('is-active');
      self.navigationMobile.classList.add('mobile-nav-open');
      self.build(self.menus);
    } else {
      hamburger.classList.remove('is-active');
      self.navigationMobile.classList.remove('mobile-nav-open');
    }
  });
}

Menu.prototype.build = function (menus) {
  var self = this;
  var listIsActive = this.navigationMobile.querySelector('.is-active');
  var childrens = listIsActive.children;

  _toConsumableArray(childrens).forEach(function (item) {
    item.addEventListener('click', function (e) {
      var cat_id = e.target.closest('li').getAttribute('id');

      if (cat_id) {
        var menu = menus.find(function (menu) {
          return menu.id == cat_id;
        });
        var ifNextIdUl = item.closest('ul').getAttribute('id');
        var menu_title = '< Menu Principal';

        if (ifNextIdUl) {
          var _menu = self.menus.find(function (menu) {
            return menu.id == ifNextIdUl;
          });

          menu_title = '< ' + _menu.name;
        }

        var lists = self.createUl(menu_title, 'list-item', e.target, menu.childrens);
        insertAfter(listIsActive, lists);
        setTimeout(function () {
          item.closest('ul').className = 'is-prev';
          item.closest('ul').nextElementSibling.className = "is-active";
          self.build(menu.childrens);
        }, 100);
        lists.querySelector('.mobile-nav-user').addEventListener('click', function (e) {
          e.target.closest('ul').previousElementSibling.classList.remove('is-prev');
          e.target.closest('ul').previousElementSibling.classList.add('is-active');
          e.target.closest('ul').remove('is-active');
        });
      }
    });
  });
};

Menu.prototype.createElementWithClass = function (className, type) {
  var div = document.createElement(type);
  div.setAttribute('class', className);
  return div;
};

Menu.prototype.navigationHead = function (title) {
  var div = this.createElementWithClass('mobile-nav-user', 'div');
  var li = document.createElement('li');
  var a = document.createElement('a');
  div.textContent = title;
  li.appendChild(div);
  return li;
};

Menu.prototype.createUl = function (title, className, firstTitle, arr) {
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  var a = document.createElement('a');
  li.className = "mobile-nav-user";
  a.textContent = title;
  li.appendChild(a);
  ul.appendChild(li);

  if (firstTitle) {
    ul.setAttribute('id', firstTitle.closest('li').getAttribute('id'));
    var liTitle = document.createElement('li');
    var clone = firstTitle.cloneNode(true);
    liTitle.appendChild(clone);
    ul.appendChild(liTitle);
  }

  ul.setAttribute('class', className);
  arr.forEach(function (item) {
    li = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = item.name;

    if (item.childrens) {
      li.setAttribute('id', item.id);
    }

    li.appendChild(a);
    ul.appendChild(li);
  });
  return ul;
};

function insertAfter(element, newElement) {
  element.parentNode.insertBefore(newElement, element.nextSibling);
}

new Menu(); // en-tête //

var caret = document.getElementsByClassName("caret");
caret.addEventListener("click", function (event) {
  carte;
});
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52166" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map