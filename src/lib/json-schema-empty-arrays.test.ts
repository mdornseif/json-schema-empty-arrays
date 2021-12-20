/**
 * json-schema-empty-arrays.test.ts
 *
 * Created by Dr. Maximillian Dornseif 2021-12-20 in json-schema-empty-arrays 1.0.0
 * Copyright (c) 2021 Dr. Maximillian Dornseif
 */

import test from 'ava';
import { JSONSchema7 } from 'json-schema';

import { jsonEmptyArrays } from './json-schema-empty-arrays';

const schema: JSONSchema7 = {
  $id: 'https://huwawi3.hudora.de/schemata/H3Test',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Test data',
  type: 'object',
  required: ['s1'],
  properties: {
    s1: {
      title: 's1',
      type: 'string',
      default: 'foo',
    },
    sub: {
      type: 'array',
      items: {
        title: 's1',
        type: 'string',
        default: 'bar',
      },
    },
  },
};

test('handles simple schema', (t) => {
  t.deepEqual(jsonEmptyArrays(schema), {
    sub: [],
  });
});
