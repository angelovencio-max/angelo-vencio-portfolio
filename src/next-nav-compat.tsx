import { useLocation, useParams } from 'react-router-dom';

export function usePathname() {
  const location = useLocation();
  return location.pathname;
}

export function useParamsCompat() {
  return useParams();
}

export function notFound() {
  throw new Error('404 Not Found');
}
