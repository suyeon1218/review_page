import { ViewIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  Tooltip,
} from '@chakra-ui/react';
import { MouseEvent } from 'react';
import { MENU_OPTIONS } from '~/constants';
import { View } from '~/types';

interface MenuViewProps {
  value: View;
  onChange: (value: View) => void;
}

function isViewKey(key: string): key is View {
  return Object.keys(MENU_OPTIONS.VIEW_TYPE).some((viewKey) => viewKey === key);
}

const MenuView = ({ value, onChange }: MenuViewProps) => {
  const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (event.target instanceof Element) {
      const { menuKey } = event.currentTarget.dataset;

      if (menuKey && isViewKey(menuKey)) {
        onChange(menuKey);
      }
    }
  };

  return (
    <Menu closeOnSelect={false}>
      <Tooltip label='보기 변경'>
        <MenuButton>{<ViewIcon />}</MenuButton>
      </Tooltip>
      <MenuList>
        {Object.entries(MENU_OPTIONS.VIEW_TYPE).map(([menuKey, menuValue]) => (
          <MenuItem
            data-menu-key={menuKey}
            onClick={handleClickMenu}
            key={menuKey}>
            <Radio
              value={menuKey}
              isChecked={menuKey === value}
            />
            <div>{menuValue}</div>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuView;
