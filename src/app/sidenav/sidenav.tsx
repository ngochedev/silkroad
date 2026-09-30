import {SideNav, SideNavItem, SideNavItemContent, SideNavItemLink} from '@react-spectrum/s2/SideNav';
import {style} from '@react-spectrum/s2/style' with {type: 'macro'};
import { RoutedSideNav } from './RoutedSideNav';

export default function AppSideNav() {
  const navStyles = style({
    // height:120,
    width: 210
  });

  return (
    <>
    <RoutedSideNav defaultSelectedRoute="/guidelines">
  {({selectedRoute}) => (
    <SideNav
      aria-label="Files"
      selectedRoute={selectedRoute}
      styles={navStyles}
      defaultExpandedKeys={['guidelines', 'color']}>
      <SideNavItem href="/guidelines" id="guidelines" textValue="Guidelines" >
        <SideNavItemContent><SideNavItemLink>Guidelines</SideNavItemLink></SideNavItemContent>
        <SideNavItem href="/style" id="style" textValue="Style" >
          <SideNavItemContent><SideNavItemLink>Style</SideNavItemLink></SideNavItemContent>
        </SideNavItem>
        <SideNavItem href="/color" id="color" textValue="Color" >
          <SideNavItemContent><SideNavItemLink>Color</SideNavItemLink></SideNavItemContent>
          <SideNavItem href="/background-layers" id="background-layers" textValue="Background Layers" >
            <SideNavItemContent><SideNavItemLink>Background Layers</SideNavItemLink></SideNavItemContent>
          </SideNavItem>
        </SideNavItem>
      </SideNavItem>
      <SideNavItem id="support" textValue="Support" >
        <SideNavItemContent><SideNavItemLink>Support</SideNavItemLink></SideNavItemContent>
        <SideNavItem href="/contact-us" id="contact-us" textValue="Contact Us" >
          <SideNavItemContent><SideNavItemLink>Contact Us</SideNavItemLink></SideNavItemContent>
        </SideNavItem>
      </SideNavItem>
    </SideNav>
  )}
</RoutedSideNav>
    </>
  );
}


