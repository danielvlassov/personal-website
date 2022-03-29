import routes, { home, projects, bookmarks, tools} from '@/data/routes';

import DesktopNav from '@/components/Navigation/DesktopNav';
import MobileNav from '@/components/Navigation/MobileNav';

export default function Navigation() {
  const desktopRoutes = [home, projects, bookmarks, tools];

  return (
    <>
      <MobileNav routes={routes} />
      <DesktopNav routes={desktopRoutes} />
    </>
  );
}
