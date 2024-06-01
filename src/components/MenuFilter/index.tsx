import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Checkbox,
} from '@chakra-ui/react';
import { MENU_OPTIONS } from '~/constants';

const MenuFilter = () => {
  return (
    <Menu>
      <MenuButton>{<HamburgerIcon />}</MenuButton>
      <MenuList>
        {Object.entries(MENU_OPTIONS.VIEW_TYPE).map(([key, value]) => (
          <MenuItem>
            <Checkbox value={key} />
            <div>{value}</div>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuFilter;
