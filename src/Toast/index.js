import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const centerPosition = {
  position: toast.POSITION.TOP_CENTER
}

export function Toast() {
  function handleDefault(message) {
    toast(message, centerPosition);
  }

  function handleError(message) {
    toast.error(message, centerPosition);
  }

  function handleWarning(message) {
    toast.warning(message, centerPosition);
  }

  function handleSuccess(message) {
    toast.success(message, centerPosition);
  }

  function handleInfo(message) {
    toast.info(message, centerPosition)
  }

  return {
    handleDefault,
    handleError,
    handleWarning,
    handleSuccess,
    handleInfo
  }  
}