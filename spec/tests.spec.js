const expect = chai.expect;

describe('Session Cache', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should set and get cache values correctly', () => {
    const cache = createSessionCache();
    cache.setCache('key1', 'value1');
    cache.setCache('key2', { name: 'John', age: 25 });

    expect(cache.getCache('key1')).to.equal('value1');
    expect(cache.getCache('key2')).to.deep.equal({ name: 'John', age: 25 });
  });

  it('should remove cache values correctly', () => {
    const cache = createSessionCache();
    cache.setCache('key1', 'value1');
    cache.setCache('key2', 'value2');
    cache.removeCache('key1');

    expect(cache.getCache('key1')).to.be.undefined;
    expect(cache.getCache('key2')).to.equal('value2');
  });

  it('should clear the cache correctly', () => {
    const cache = createSessionCache();
    cache.setCache('key1', 'value1');
    cache.setCache('key2', 'value2');
    cache.clearCache();

    expect(cache.getCache('key1')).to.be.undefined;
    expect(cache.getCache('key2')).to.be.undefined;
  });

  it('should set and get cache values with expiry correctly', (done) => {
    const cache = createSessionCache();
    cache.setCacheWithExpiry('key1', 'value1', 1000); // Expires in 1 second

    expect(cache.getCacheWithExpiry('key1')).to.equal('value1');

    // Wait for 2 seconds
    setTimeout(() => {
      expect(cache.getCacheWithExpiry('key1')).to.be.null;
    }, 2000);
    done();

  });
});
