import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from '@chakra-ui/react';
import { MouseEvent, useMemo } from 'react';
import { MENU_OPTIONS } from '~/constants';
import { Filter } from '~/types';

interface MenuFilterProps {
  value: Filter[];
  onChange: (value: Filter[]) => void;
}

function isFilterKey(key: string): key is Filter {
  return Object.keys(MENU_OPTIONS.CATEGORY_FILTER).some(
    (viewKey) => viewKey === key
  );
}

const MenuFilter = ({ value, onChange }: MenuFilterProps) => {
  const selectedFilter = useMemo(() => {
    return new Set(value);
  }, [value]);
  const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (event.target instanceof Element) {
      const { menuKey } = event.currentTarget.dataset;

      if (menuKey && isFilterKey(menuKey)) {
        if (selectedFilter.has(menuKey)) {
          selectedFilter.delete(menuKey);
        } else {
          selectedFilter.add(menuKey);
        }
        onChange([...selectedFilter]);
      }
    }
  };

  return (
    <Menu closeOnSelect={false}>
      <Tooltip label='필터'>
        <MenuButton>{<HamburgerIcon />}</MenuButton>
      </Tooltip>
      <MenuList>
        {Object.entries(MENU_OPTIONS.CATEGORY_FILTER).map(
          ([menuKey, menuValue]) => (
            <MenuItem
              data-menu-key={menuKey}
              onClick={handleClickMenu}
              key={menuKey}>
              <Checkbox
                value={menuKey}
                isChecked={isFilterKey(menuKey) && selectedFilter.has(menuKey)}
              />
              <div>{menuValue}</div>
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default MenuFilter;
