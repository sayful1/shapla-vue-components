/*!
 * Shapla Columns v1.0.0
 * (c) 2021 Sayful Islam
 * Released under the MIT License.
 */

import ShaplaColumns from './ShaplaColumns.vue';
import ShaplaColumn from './ShaplaColumn.vue';

const Grid = {
  row: ShaplaColumns,
  col: ShaplaColumn
}

export {ShaplaColumns, ShaplaColumn, ShaplaColumns as Columns, ShaplaColumn as Column}
export default Grid;
