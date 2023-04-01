import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { ClientModule } from '@docusaurus/types';

const module: ClientModule = {
  onRouteDidUpdate({location, previousLocation}) {
    if (ExecutionEnvironment.canUseDOM) {
      const now = new Date();
      if (now.getMonth() === 3 && now.getDate() === 1) {
        document.querySelector('nav .navbar__title').innerText = 'I Know Everything';
      }
    }
  }
}

export default module
