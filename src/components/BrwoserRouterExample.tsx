import { Link, NavLink, useParams, useSearchParams } from 'react-router';
import GoBackToHome from './GoBacktoHome';

export const A = () => {
  return (
    <div><GoBackToHome />A</div>
  )
}

export const B = () => {
  const { id, feature } = useParams();
  const [searchParams] = useSearchParams(),
    from = searchParams.get('from'),
    to = searchParams.get('to')
  // console.log(searchParams, from, to);

  return (
    <div><GoBackToHome />B --  id: {id} - feature: {feature} - from: {from} - to: {to}</div>
  )
}

export const BrwoserRouterExample = () => {
  return (
    <>
      <GoBackToHome />
      <h1>BrwoserRouterExample</h1>
      <Link to="/Route-A">Route-A</Link>
      <NavLink to="/Route-B/8789/share?from=profile&to=tiktok">Route-B</NavLink>
    </>
  )
}