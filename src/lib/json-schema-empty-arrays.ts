/*
 * json-schema-empty-arrays.ts
 *
 * Created by Dr. Maximillian Dornseif 2021-11-10 in huWaWi3 24.0.2
 * Copyright (c) 2021, 2023 Dr. Maximillian Dornseif
 */

import { JSONSchema7 } from 'json-schema'
import traverse from 'json-schema-traverse'

/** Returns an Object containing [] for each array
 * */
export function jsonEmptyArrays(schema: JSONSchema7): Record<string, unknown> {
  const ret: Record<string, any> = {}
  traverse(
    schema,
    {},
    (
      sch: { type: string },
      jsonPtr: string,
      _root: any,
      parentJsonPtr: string,
      _parentKeyword: any,
      _parentSchema: any,
      indexProperty: string | number | undefined
    ) => {
      if (jsonPtr.startsWith('/properties/')) {
        // for Nesting
        if (sch.type === 'object' && indexProperty) {
          ret[indexProperty] = {}
        }

        let destination = ret
        if (parentJsonPtr) {
          for (const subSch of parentJsonPtr.replace(/\/properties/g, '').split('/')) {
            if (subSch === '') {
              continue
            }
            destination[subSch] = destination?.[subSch] || {}
            destination = destination[subSch]
          }
        }
        if (sch.type === 'array' && indexProperty !== undefined) {
          destination[indexProperty] = []
        }
      }
    }
  )
  return ret
}
