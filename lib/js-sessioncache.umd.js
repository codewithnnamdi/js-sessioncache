(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.createSessionCache = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.createSessionCache = factory();
  }
}(this, function () {
  'use strict';

  const createSessionCache = () => {
    const cache = new Map();

    const updateLocalStorage = () => {
      const cacheData = JSON.stringify(Array.from(cache.entries()));
      localStorage.setItem('cache', cacheData);
    };

    const initializeCacheFromLocalStorage = () => {
      const cacheData = localStorage.getItem('cache');
      if (cacheData) {
        try {
          const entries = JSON.parse(cacheData);
          entries.forEach(([key, value]) => {
            cache.set(key, value);
          });
        } catch (error) {
          console.error('Failed to parse cache data from localStorage:', error);
        }
      }
    };

    const setCache = (key, value) => {
      cache.set(key, value);
      updateLocalStorage();
    };

    const getCache = (key) => cache.get(key);

    const removeCache = (key) => {
      cache.delete(key);
      updateLocalStorage();
    };

    const clearCache = () => {
      cache.clear();
      updateLocalStorage();
    };

    const setCacheWithExpiry = (key, value, ttl) => {
      const now = new Date();
      const item = {
        value,
        expiry: now.getTime() + ttl,
      };

      setCache(key, item);
    };

    const getCacheWithExpiry = (key) => {
      const item = cache.get(key);
      if (!item) {
        return null;
      }

      const now = new Date();

      if (now.getTime() > item.expiry) {
        removeCache(key);
        return null;
      }

      return item.value;
    };

    initializeCacheFromLocalStorage();

    return {
      setCache,
      getCache,
      removeCache,
      clearCache,
      setCacheWithExpiry,
      getCacheWithExpiry,
    };
  };

  return createSessionCache;
}));
