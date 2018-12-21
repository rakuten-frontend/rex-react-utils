export function composeClassName(cssClassList) {
  const list = cssClassList.filter(cssClass => !isEmptyClassName(cssClass)).join(' ');

  return (list.length > 0) ? list : null;
}

export function isEmptyClassName(cssClass) {
  if (cssClass.trim().length <= 0) {
    return true;
  } else {
    return false;
  }
}