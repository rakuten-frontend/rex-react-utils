export function composeClassName(cssClassList) {
  return {
    className: cssClassList.filter(cssClass => !isEmptyClassName(cssClass)).join(' ')
  };
}

export function isEmptyClassName(cssClass) {
  if (cssClass.trim().length <= 0) {
    return true;
  } else {
    return false;
  }
}