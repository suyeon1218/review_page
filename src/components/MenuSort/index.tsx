import { UpDownIcon } from '@chakra-ui/icons';
import { Menu, MenuItem, MenuList, Radio, Tooltip } from '@chakra-ui/react';
import { MouseEvent } from 'react';
import { MENU_OPTIONS } from '~/constants';
import { Sort } from '~/types';
import * as S from './index.style';

interface MenuSortProps {
  value: Sort;
  onChange: (value: Sort) => void;
}

function isSortKey(key: string): key is Sort {
  return Object.keys(MENU_OPTIONS.DATE_SORT).some((viewKey) => viewKey === key);
}

const MenuSort = ({ value, onChange }: MenuSortProps) => {
  const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (event.target instanceof Element) {
      const { menuKey } = event.currentTarget.dataset;

      if (menuKey && isSortKey(menuKey)) {
        onChange(menuKey);
      }
    }
  };

  return (
    <Menu closeOnSelect={false}>
      <Tooltip label='정렬'>
        <S.StyledMenuButton>{<UpDownIcon />}</S.StyledMenuButton>
      </Tooltip>
      <MenuList>
        {Object.entries(MENU_OPTIONS.DATE_SORT).map(([menuKey, menuValue]) => (
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

export default MenuSort;
