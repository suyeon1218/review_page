import { UpDownIcon } from '@chakra-ui/icons';
import { Menu, MenuList, Radio, Tooltip } from '@chakra-ui/react';
import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MENU_OPTIONS } from '~/constants';
import { RootState, setSort } from '~/store';
import type { Sort } from '~/types';
import * as S from './index.style';

function isSortKey(key: string): key is Sort {
  return Object.keys(MENU_OPTIONS.DATE_SORT).some((viewKey) => viewKey === key);
}

const MenuSort = () => {
  const { sort } = useSelector((state: RootState) => state.sort);
  const dispatch = useDispatch();

  const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (event.target instanceof Element) {
      const { menuKey } = event.currentTarget.dataset;

      if (menuKey && isSortKey(menuKey)) {
        dispatch(setSort({ sort: menuKey }));
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
          <S.StyledMenuItem
            data-menu-key={menuKey}
            onClick={handleClickMenu}
            key={menuKey}>
            <Radio
              value={menuKey}
              isChecked={menuKey === sort}
            />
            <div>{menuValue}</div>
          </S.StyledMenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuSort;
