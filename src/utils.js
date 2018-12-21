export function composeClassName(cssClassList) {

  let list = [];

  if (Array.isArray(cssClassList)) {
    list = filterListClassName(cssClassList);
  }

  return createClassName(list);
}

function filterListClassName(cssClassList) {
  return cssClassList.filter(cssClass => isValidClassName(cssClass));
}

function createClassName(list) {
  if (list.length > 0) {
    return {
      className: list.join(' ')
    }
  } else {
    return null;
  }
}

export function isValidClassName(cssClass) {
  let isValid = false;

  if(typeof cssClass === 'string') {
    if (cssClass.trim().length > 0) {
      isValid = true;
    }
  }

  return isValid;
}
