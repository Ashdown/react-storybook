import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia = global.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  }
}
