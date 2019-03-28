export function capitalize(val) {
  if ('string' === typeof val) {
    // set all lowercase.
    let lowercase = val.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
  }

  return val;
}


