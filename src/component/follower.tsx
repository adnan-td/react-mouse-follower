import useMouseStore from '../store/index.js';
import { FollowerInitialiserComponent } from './follower_init.js';

export function Follower() {
  const { options } = useMouseStore((state) => ({ options: state.curSettings }));
  return <FollowerInitialiserComponent options={options} />;
}
