export function capitalize(val) {
  if ('string' === typeof val) {
    // set all lowercase.
    let lowercase = val.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
  }

  return val;
}

export function prettify(val) {
  if ('string' === typeof val) {
    let result = val.toLowerCase();

    let resultArray = result.split('-');
    if (resultArray.length > 1) {
      result = resultArray.reduce(
        (acc, val) => `${capitalize(acc)} ${capitalize(val)}`
      );
    } else {
      result = capitalize(resultArray[0]);
    }

    return result;
  }
}


