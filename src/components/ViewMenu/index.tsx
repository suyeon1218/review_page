import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuItem, MenuList } from '@chakra-ui/react';
import { MouseEvent } from 'react';
import { ViewType } from '~/types';
import * as S from './index.style';

interface ViewMenuProps {
  view: ViewType;
  onChange?: (props: ViewType) => void;
}

const tableView = {
  list: '리스트 뷰',
  card: '카드 뷰',
};

function isViewType(viewKey: string): viewKey is ViewType {
  return viewKey === 'list' || viewKey === 'card';
}

const ViewMenu = ({ view, onChange }: ViewMenuProps) => {
  const changeViewType = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement) {
      const { viewKey } = event.target.dataset;

      if (viewKey && onChange && isViewType(viewKey)) {
        onChange(viewKey);
      }
    }
  };

  return (
    <Menu>
      <S.StyledMenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}>
        {tableView[view]}
      </S.StyledMenuButton>
      <MenuList onClick={changeViewType}>
        <MenuItem
          data-view-key={'list'}
          value={tableView.list}>
          리스트 뷰
        </MenuItem>
        <MenuItem
          data-view-key={'card'}
          value={tableView.card}>
          카드 뷰
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ViewMenu;
