import { DateTime } from 'luxon';

export const format_dd_mm_yyyy = n => DateTime.fromMillis(n).toFormat('dd.LL.yyyy');
