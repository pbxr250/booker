

import { startOfToday, addDays, subDays, format, isSameDay } from "date-fns";

const today = startOfToday()

export const _reserved = Array.from({ length: 3 }, (_, i) => {
    
    const startDate  = addDays(today, i)
  
    return {
      startDate,
      endDate: new Date(startDate)
    };
  });


_reserved.push( {startDate: addDays(today,10), endDate: addDays(today,10)} )

_reserved.push( {startDate: subDays(today,15), endDate: subDays(today,15)} )
_reserved.push( {startDate: addDays(today,20), endDate: addDays(today,20)} )
_reserved.push( {startDate: addDays(today,25), endDate: addDays(today,25)} )