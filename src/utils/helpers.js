import { toast } from 'react-toastify';

export const successNotification = (message) => toast.success(message);
export const errorNotification = (message) => toast.error(message);
