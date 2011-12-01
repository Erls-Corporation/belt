

# Belt - NodeJS Utility (belt) Functions

### Installation

```bash
$ npm install belt
```

### Example Code

```javascript

var belt = require('belt');

// array to RegExp method
var pattern = belt.arrayToRegExp(['these','are','test','items']);
console.log(pattern);
	=> /these/are/test/items/i

// better typeof method
var type = belt.TypeOf(pattern);
console.log(type);
	=> 'regexp'

/* EOF */
```
