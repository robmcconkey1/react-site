import React from 'react'; // TODO: check

var ToastContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
});
export default ToastContext;