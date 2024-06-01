import { UpDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList, Radio } from '@chakra-ui/react';
import { MENU_OPTIONS } from '~/constants';

const MenuSort = () => {
  return (
    <Menu>
      <MenuButton>{<UpDownIcon />}</MenuButton>
      <MenuList>
        {Object.entries(MENU_OPTIONS.DATE_SORT).map(([key, value]) => (
          <MenuItem>
            <Radio value={key} />
            <div>{value}</div>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuSort;
