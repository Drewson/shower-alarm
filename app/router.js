import {
  createRouter,
} from '@expo/ex-navigation';

import Alarm from './alarm/alarm';
import Clock from './clock/clock';

const Router = createRouter(() => ({
  alarm: () => Alarm,
  clock: () => Clock
}));

export default Router;