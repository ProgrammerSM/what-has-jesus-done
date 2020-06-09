const breakpoints = {
  'small': [0, 640],
  'medium': [641, 1024],
  'mediumUp': [641],
  'mediumDown': [1024],
  'large': [1025, 1440],
  'largeUp': [1025],
}

Object.keys(breakpoints).map(key => (
  breakpoints[key] = breakpoints[key].length !== 2
    ? key.includes('Up')
      ? `@media screen and (min-width: ${breakpoints[key][0]}px)`
      : `@media screen and (max-width: ${breakpoints[key][0]}px)`
    : `@media screen and (min-width: ${breakpoints[key][0]}px) and (max-width: ${breakpoints[key][1]}px)`
))

export { breakpoints }
