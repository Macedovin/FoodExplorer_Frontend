import { toast } from 'react-toastify';

export function Toast() {
  function handleDefault(message) {
    toast(message);
  }

  function handleError(message) {
    toast.error(message);
  }

  function handleWarning(message) {
    toast.warning(message);
  }

  function handleSuccess(message) {
    toast.success(message);
  }

  function handleInfo() {
    toast.info(message);
  }

  return {
    handleDefault,
    handleError,
    handleWarning,
    handleSuccess,
    handleInfo
  }  
}