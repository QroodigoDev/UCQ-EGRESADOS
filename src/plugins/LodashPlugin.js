import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import isObject from 'lodash/isObject'
import floor from 'lodash/floor'
import forEach from 'lodash/forEach'
import orderBy from 'lodash/orderBy'
import filter from 'lodash/filter'
import reverse from 'lodash/reverse'
import each from 'lodash/each'
import round from 'lodash/round'
import has from 'lodash/has'
import isUndefined from 'lodash/isUndefined'
import find from 'lodash/find'
import replace from 'lodash/replace'
import map from 'lodash/map'
import includes from 'lodash/includes'
import set from 'lodash/set'
import unset from 'lodash/unset'
import sortedUniq from 'lodash/sortedUniq'
import head from 'lodash/head'
import takeWhile from 'lodash/takeWhile'
import size from 'lodash/size'
import merge from 'lodash/merge'
import trim from 'lodash/trim'
import split from 'lodash/split'
import toUpper from 'lodash/toUpper'
import toNumber from 'lodash/toNumber'
import isNumber from 'lodash/isNumber'
import mapKeys from 'lodash/mapKeys'
import isString from 'lodash/isString'
import isFunction from 'lodash/isFunction'
import indexOf from 'lodash/indexOf'
import forOwn from 'lodash/forOwn'
import lowerCase from 'lodash/lowerCase'
import isEqual from 'lodash/isEqual'
import isNaN from 'lodash/isNaN'
import toString from 'lodash/toString'
import isNull from 'lodash/isNull'
import upperFirst from 'lodash/upperFirst'
import uniq from 'lodash/uniq'

// import _ from 'lodash'

const lodashPlugin = {
  install (Vue, options) {
    Vue.prototype.$_ = {
      isEmpty,
      isObject,
      isUndefined,
      isNumber,
      isFunction,
      get,
      floor,
      forEach,
      each,
      orderBy,
      filter,
      reverse,
      round,
      has,
      find,
      map,
      includes,
      set,
      unset,
      sortedUniq,
      head,
      takeWhile,
      size,
      merge,
      trim,
      split,
      toUpper,
      toNumber,
      mapKeys,
      replace,
      isString,
      indexOf,
      forOwn,
      lowerCase,
      isEqual,
      isNaN,
      toString,
      isNull,
      upperFirst,
      uniq
    }
  }
}

export default lodashPlugin
