import { HamburgerIcon } from '@chakra-ui/icons';
import { Checkbox, Menu, MenuList, Tooltip } from '@chakra-ui/react';
import { MouseEvent, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MENU_OPTIONS } from '~/constants';
import { RootState, setCategory } from '~/store';
import { Filter } from '~/types';
import * as S from './index.style';

function isFilterKey(key: string): key is Filter {
  return Object.keys(MENU_OPTIONS.CATEGORY_FILTER).some(
    (viewKey) => viewKey === key
  );
}

const MenuFilter = () => {
  const { category } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const selectedFilter = useMemo(() => {
    return new Set(category);
  }, [category]);

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
        dispatch(setCategory({ category: [...selectedFilter] }));
      }
    }
  };

  return (
    <Menu closeOnSelect={false}>
      <Tooltip label='필터'>
        <S.StyledMenuButton>{<HamburgerIcon />}</S.StyledMenuButton>
      </Tooltip>
      <MenuList>
        {Object.entries(MENU_OPTIONS.CATEGORY_FILTER).map(
          ([menuKey, menuValue]) => (
            <S.StyledMenuItem
              data-menu-key={menuKey}
              onClick={handleClickMenu}
              key={menuKey}>
              <Checkbox
                value={menuKey}
                isChecked={isFilterKey(menuKey) && selectedFilter.has(menuKey)}
              />
              <div>{menuValue}</div>
            </S.StyledMenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default MenuFilter;
