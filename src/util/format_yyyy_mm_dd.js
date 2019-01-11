import { DateTime } from 'luxon';

// accepts an Int and returns yyyy-mm-dd
export const format_yyyy_mm_dd = n => DateTime.fromMillis(n).toFormat('yyyy.LL.dd');
