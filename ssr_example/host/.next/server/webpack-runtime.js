/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"node_modules_next_dynamic_js":"a285a196a69b815c","node_modules_next_link_js":"bc45938e838f457d","node_modules_next_script_js":"ad46791faf8516f6"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	!function() {
/******/ 		var chunkMapping = {};
/******/ 		var idToExternalAndNameMapping = {};
/******/ 		__webpack_require__.f.remotes = function(chunkId, promises) {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach(function(id) {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = function(error) {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_require__.m[id] = function() {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = function(fn, arg1, arg2, d, next, first) {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then(function(result) { return next(result, d); }, onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = function(external, _, first) { return external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError(); };
/******/ 					var onInitialized = function(_, external, first) { return handleFunction(external.get, data[1], getScope, 0, onFactory, first); };
/******/ 					var onFactory = function(factory) {
/******/ 						data.p = 1;
/******/ 						__webpack_require__.m[id] = function(module) {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = function(msg) { return typeof console !== "undefined" && console.warn && console.warn(msg); };
/******/ 			var uniqueName = "host";
/******/ 			var register = function(name, version, factory, eager) {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = function(id) {
/******/ 				var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("next/dynamic", "13.3.0", function() { return __webpack_require__.e("node_modules_next_dynamic_js").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/dynamic.js */ "./node_modules/next/dynamic.js"); }; }); });
/******/ 					register("next/link", "13.3.0", function() { return __webpack_require__.e("node_modules_next_link_js").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/link.js */ "./node_modules/next/link.js"); }; }); });
/******/ 					register("next/script", "13.3.0", function() { return __webpack_require__.e("node_modules_next_script_js").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/script.js */ "./node_modules/next/script.js"); }; }); });
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup entrypoint */
/******/ 	!function() {
/******/ 		__webpack_require__.X = function(result, chunkIds, fn) {
/******/ 			// arguments: chunkIds, moduleId are deprecated
/******/ 			var moduleId = chunkIds;
/******/ 			if(!fn) chunkIds = result, fn = function() { return __webpack_require__(__webpack_require__.s = moduleId); };
/******/ 			return Promise.all(chunkIds.map(__webpack_require__.e, __webpack_require__)).then(function() {
/******/ 				var r = fn();
/******/ 				return r === undefined ? result : r;
/******/ 			})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			"webpack-runtime": 0
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++) {
/******/ 				if(installedChunks[chunkIds[i]]) {
/******/ 					installedChunks[chunkIds[i]][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// load script equivalent for server side
/******/ 		__webpack_require__.l = function(url,callback,chunkId) {
/******/ 				if(!global.__remote_scope__) {
/******/ 					// create a global scope for container, similar to how remotes are set on window in the browser
/******/ 					global.__remote_scope__ = {
/******/ 					_config: {},
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				  function executeLoad(url, callback, name) {
/******/ 				    if(!name) {
/******/ 				      throw new Error('__webpack_require__.l name is required for ' + url);
/******/ 				    }
/******/ 		
/******/ 				    if (typeof global.__remote_scope__[name] !== 'undefined') return callback(global.__remote_scope__[name]);
/******/ 		
/******/ 				    const vm = require('vm');
/******/ 				    (global.webpackChunkLoad || global.fetch || require("node-fetch"))(url).then(function (res) {
/******/ 				      return res.text();
/******/ 				    }).then(function (scriptContent) {
/******/ 				      try {
/******/ 				        // TODO: remove conditional in v7, this is to prevent breaking change between v6.0.x and v6.1.x
/******/ 				        const vmContext = typeof URLSearchParams === 'undefined' ?
/******/ 				          {exports, require, module, global, __filename, __dirname, URL, console, process,Buffer, ...global, remoteEntryName: name} :
/******/ 				          {exports, require, module, global, __filename, __dirname, URL, URLSearchParams, console, process,Buffer, ...global, remoteEntryName: name};
/******/ 		
/******/ 				        const remote = vm.runInNewContext(scriptContent + '\nmodule.exports', vmContext, {filename: 'node-federation-loader-' + name + '.vm'});
/******/ 				        const foundContainer = remote[name] || remote
/******/ 		
/******/ 				        if(!global.__remote_scope__[name]) {
/******/ 				          global.__remote_scope__[name] = {
/******/ 				            get: foundContainer.get,
/******/ 				            init: function(initScope, initToken) {
/******/ 				              try {
/******/ 				                foundContainer.init(initScope, initToken)
/******/ 				              } catch (e) {
/******/ 				                // already initialized
/******/ 				              }
/******/ 				            }
/******/ 				          };
/******/ 				          global.__remote_scope__._config[name] = url;
/******/ 				        }
/******/ 				        callback(global.__remote_scope__[name]);
/******/ 				      } catch (e) {
/******/ 				        console.error('executeLoad hit catch block');
/******/ 				        e.target = {src: url};
/******/ 				        callback(e);
/******/ 				      }
/******/ 				    }).catch((e) => {
/******/ 				      e.target = {src: url};
/******/ 				      callback(e);
/******/ 				    });
/******/ 				  }
/******/ 				executeLoad(url,callback,chunkId)
/******/ 		}
/******/ 		// ReadFile + VM.run chunk loading for javascript
/******/ 		__webpack_require__.f.readFileVm = function(chunkId, promises) {
/******/ 		
/******/ 			var installedChunkData = installedChunks[chunkId];
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 				// array of [resolve, reject, promise] means "currently loading"
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if("webpack-runtime" != chunkId) {
/******/ 						// load the chunk and return promise to it
/******/ 						var promise = new Promise(async function(resolve, reject) {
/******/ 							installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							var filename = require('path').join(__dirname, "" + __webpack_require__.u(chunkId));
/******/ 							var fs = require('fs');
/******/ 							if(fs.existsSync(filename)) {
/******/ 								fs.readFile(filename, 'utf-8', function(err, content) {
/******/ 									if(err) return reject(err);
/******/ 									var chunk = {};
/******/ 									require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 									installChunk(chunk);
/******/ 								});
/******/ 							} else {
/******/ 		
/******/ 								  function loadScript(url, cb, chunkID) {
/******/ 								    if (global.webpackChunkLoad) {
/******/ 								      global.webpackChunkLoad(url).then(function (resp) {
/******/ 								        return resp.text();
/******/ 								      }).then(function (rawData) {
/******/ 								        cb(null, rawData);
/******/ 								      }).catch(function (err) {
/******/ 								        console.error('Federated Chunk load failed', error);
/******/ 								        return cb(error)
/******/ 								      });
/******/ 								    } else {
/******/ 								      //TODO https support
/******/ 								      let request = (url.startsWith('https') ? require('https') : require('http')).get(url, function (resp) {
/******/ 								        if (resp.statusCode === 200) {
/******/ 								          let rawData = '';
/******/ 								          resp.setEncoding('utf8');
/******/ 								          resp.on('data', chunk => {
/******/ 								            rawData += chunk;
/******/ 								          });
/******/ 								          resp.on('end', () => {
/******/ 								            cb(null, rawData);
/******/ 								          });
/******/ 								        } else {
/******/ 								          cb(resp);
/******/ 								        }
/******/ 								      });
/******/ 								      request.on('error', error => {
/******/ 								        console.error('Federated Chunk load failed', error);
/******/ 								        return cb(error)
/******/ 								      });
/******/ 								    }
/******/ 								  }
/******/ 		
/******/ 		
/******/ 								var remotes = {"microfrontend1":"http://localhost:8081/_next/static/ssr/microfrontend1.js"};
/******/ 								Object.assign(global.__remote_scope__._config, remotes)
/******/ 								const remoteRegistry = global.__remote_scope__._config
/******/ 		
/******/ 		
/******/ 		
/******/ 		
/******/ 		
/******/ 								var requestedRemote = remoteRegistry["host"]
/******/ 		
/******/ 								if(typeof requestedRemote === 'function'){
/******/ 								                    requestedRemote = await requestedRemote()
/******/ 								                  }
/******/ 		
/******/ 								var scriptUrl = new URL(requestedRemote);
/******/ 		
/******/ 								var chunkName = __webpack_require__.u(chunkId);
/******/ 		
/******/ 								var fileToReplace = require('path').basename(scriptUrl.pathname);
/******/ 								scriptUrl.pathname = scriptUrl.pathname.replace(fileToReplace, chunkName);
/******/ 		
/******/ 								loadScript(scriptUrl.toString(), function(err, content) {
/******/ 		
/******/ 									if(err) {console.error('error loading remote chunk', scriptUrl.toString(),'got',content,'with error', err); return reject(err);}
/******/ 									var chunk = {};
/******/ 									try {
/******/ 									require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 									} catch (e) {
/******/ 									console.error('runInThisContext threw', e)
/******/ 									}
/******/ 									installChunk(chunk);
/******/ 								}, chunkId);
/******/ 							}
/******/ 						});
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		module.exports = __webpack_require__;
/******/ 		__webpack_require__.C = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	
/******/ })()
;