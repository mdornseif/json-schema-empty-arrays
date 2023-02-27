![NPM License](https://img.shields.io/npm/l/json-schema-empty-arrays)
[![NPM Version](https://img.shields.io/npm/v/json-schema-empty-arrays)](https://www.npmjs.com/package/json-schema-empty-arrays)
[![Last Commit](https://img.shields.io/github/last-commit/mdornseif/json-schema-empty-arrays)](https://github.com/mdornseif/json-schema-empty-arrays)

# json-schema-empty-arrays

Set [] for all missing arrays.

Generate empty arrays for all [JSON-Schema](https://json-schema.org) array properties.

For a given schema `jsonEmptyArrays()` generates an object containing `[]` for all properties of `type: array`.

The output can easily [merged](https://www.npmjs.com/package/lodash.merge) with your existing data to get empty strings instead of missing properties.

```js
import { jsonEmptyArrays } from 'json-schema-empty-arrays';
import merge from 'lodash.merge';

// carve! merge polbaby handles arrays differently than you think
const finalData = merge({}, jsonEmptyArrays(schema), inputData);
```

# See also:

- [json-schema-empty-strings](https://www.npmjs.com/package/json-schema-empty-strings)
- [json-schema-default](https://www.npmjs.com/package/json-schema-default)
- [json-schema-empty](https://www.npmjs.com/package/json-schema-empty)
