import type { LinksFunction } from '@remix-run/node';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesUrl },
  ];
};

export default function IndexRoute() {
  return (
    <div>
      <h1>Index Route</h1>
      <p>Here is the index route</p>
    </div>
  );
}
