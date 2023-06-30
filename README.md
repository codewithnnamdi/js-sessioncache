# JavaScript Session Cache

The `js-sessioncache` is a JavaScript module that provides a session cache implementation for storing key-value pairs in the browser's local storage. It offers methods to set, get, remove, and clear cache values, as well as the ability to set cache values with an expiry time.

## Usage
To use the `js-sessioncache` module, you need to include the provided code in your JavaScript project. It can be used in various environments, such as AMD (Asynchronous Module Definition), CommonJS, or browser globals.

Here's an example of how to include and use the `js-sessioncache` module:

```javascript
// Create an instance of the session cache
const cache = createSessionCache();

// Use the cache methods
cache.setCache('key1', 'value1');
const value = cache.getCache('key1');
console.log(value); // Output: 'value1'
```
```javascript

### Example 2
const cache = createSessionCache();

cache.setCache('shoppingCart', {
  items: [
    {
      id: 1,
      name: 'Product 1',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 2,
    },
  ],
});

const shoppingCart = cache.getCache('shoppingCart');
```

## Methods

The `js-sessioncache` module provides the following methods:

### `setCache(key, value)`

This method sets a cache value for the given key. The value can be any JavaScript object.

```javascript
cache.setCache('key1', 'value1');
```

### `getCache(key)`

This method retrieves the cache value associated with the given key.

```javascript
const value = cache.getCache('key1');
```

### `removeCache(key)`

This method removes the cache value associated with the given key.

```javascript
cache.removeCache('key1');
```

### `clearCache()`

This method clears all the cache values stored in the session cache.

```javascript
cache.clearCache();
```

### `setCacheWithExpiry(key, value, ttl)`

This method sets a cache value for the given key with an expiry time. The `ttl` parameter specifies the time-to-live in milliseconds, after which the cache value will be automatically removed.

```javascript
cache.setCacheWithExpiry('key1', 'value1', 5000); // Expires in 5 seconds
```

### `getCacheWithExpiry(key)`

This method retrieves the cache value associated with the given key, considering its expiry time. If the cache value has expired, it will be automatically removed, and `null` will be returned.

```javascript
const value = cache.getCacheWithExpiry('key1');
```

## When to Use `js-sessioncache`

The `js-sessioncache` module can be useful in scenarios where you need to store temporary data or cache values during a user's session in a web application. Here are some situations where you might consider using it:



- **Caching API Responses:** If your application frequently makes API calls and the responses don't change frequently, you can cache the API responses using the session cache. This can help reduce the number of requests and improve performance.

- **Form Data Persistence:** When dealing with multi-step forms or form validations, you can use the session cache to store user input temporarily. This ensures that the entered data is not lost when navigating between different form sections or when errors occur.

- **Client-Side State Management:** If you need to maintain client-side state information, such as user preferences or temporary user selections, the session cache can be used as a lightweight storage solution.

- **Storing User Session Information:** When implementing user authentication and session management, you can store session-related data in the session cache to maintain user-specific information throughout their session.


It's important to note that the session cache

 provided by `js-sessioncache` is specific to each user's browser session and is not shared across different users or devices. It utilizes the browser's local storage, which has limitations on the amount of data that can be stored (typically around 5MB) and may vary across browsers.

Remember to consider the security implications when using a client-side cache. Avoid storing sensitive or confidential information in the cache, as it can be accessed and manipulated by users.
# js-sessioncache
