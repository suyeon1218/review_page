import { ViewIcon } from '@chakra-ui/icons';
import { Menu, MenuList, Radio, Tooltip } from '@chakra-ui/react';
import { MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { MENU_OPTIONS } from '~/constants';
import { RootState, setView } from '~/store';
import { View } from '~/types';
import * as S from './index.style';

function isViewKey(key: string): key is View {
  return Object.keys(MENU_OPTIONS.VIEW_TYPE).some((viewKey) => viewKey === key);
}

const MenuView = () => {
  const { view } = useSelector((state: RootState) => state.view);
  const dispatch = useDispatch();

  const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (event.target instanceof Element) {
      const { menuKey } = event.currentTarget.dataset;

      if (menuKey && isViewKey(menuKey)) {
        dispatch(setView({ view: menuKey }));
      }
    }
  };

  return (
    <Menu closeOnSelect={false}>
      <Tooltip label='보기 변경'>
        <S.StyledMenuButton>{<ViewIcon />}</S.StyledMenuButton>
      </Tooltip>
      <MenuList>
        {Object.entries(MENU_OPTIONS.VIEW_TYPE).map(([menuKey, menuValue]) => (
          <S.StyledMenuItem
            data-menu-key={menuKey}
            onClick={handleClickMenu}
            key={menuKey}>
            <Radio
              value={menuKey}
              isChecked={menuKey === view}
            />
            <div>{menuValue}</div>
          </S.StyledMenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuView;
