import { formatISO, formatDistanceToNowStrict, compareAsc, subDays,subSeconds } from 'date-fns';

export function compareDateToDateNow(date: Date | string): string {
  const difference = formatDistanceToNowStrict(
    formatDate(date.toString()))
    .split(' ');

    const veryTime = (time: string) => (
      difference[1].includes(time)
    );

  switch (true) {
    case veryTime('minute'):
      return `${difference[0]}m`
    case veryTime('hour'):
      return `${difference[0]}h`
    case veryTime('day'):
      return `${difference[0]}d`
    case veryTime('month'):
      return `${difference[0]}meses`
    case veryTime('year'):
      return `${difference[0]} ano`
    default:
        return '0m';
  }
}

export function compareTwoDate(dateLeft: string,dateRight: string): number {
  const diff = compareAsc(formatDate(dateLeft), formatDate(dateRight))
  return diff;
}

export function dateNow() {
  const date = formatISO(Date.now());
  return date;
}

export function formatDate(date: string): Date {
    const dateFormatted = formatISO(new Date(date));
    return new Date(dateFormatted);
}
export function subDate(date: Date) {
  const RandomInteger = () =>
    Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  
    const newDate = formatISO(
      subDays(
        subSeconds(date, RandomInteger()), RandomInteger())
);  
  return newDate;
}