export function composeClassName(cssClassList) {

  if(isEmptyClassName(cssClassList)) {
    return {};
  } else {
    return {
      className: cssClassList.split(' ').filter(cssClass => !isEmptyClassName(cssClass)).join(' ')
    };
  }
}

export function isEmptyClassName(cssClass) {
  if (cssClass.trim().length <= 0) {
    return true;
  } else {
    return false;
  }
}