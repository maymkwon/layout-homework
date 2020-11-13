import React from "react";
import { GridPageSection } from "../layouts";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import styled from "styled-components";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import ComputerIcon from "@material-ui/icons/Computer";
import {
  Link as RouterLink,
  NavLink,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
// 3번영역
// 메뉴정보만 props으로 받아서 리스팅하였습니다.

const MenuBottomDiv = styled.div`
  width: 100%;
  height: 71px;
  border-top: 1px solid #eee;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
`;
const Nav = styled.nav`
  height: 100%;
  overflow: auto;
  margin-bottom: 70px;
`;

interface ListItemLinkProps {
  icon: any;
  primary: string;
  to: string;
}
function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef<any, any>((linkProps, ref) => (
        <NavLink
          ref={ref}
          to={to}
          {...linkProps}
          activeStyle={{
            fontWeight: "bold",
            color: "#3f51b5",
            backgroundColor: "rgb(63, 81, 181,.2)",
          }}
        />
      )),
    [to]
  );
  return (
    <li>
      <ListItem button component={CustomLink} variant="primary">
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

interface Props {
  menus: any[];
}
const Menu: React.FC<Props & RouteComponentProps> = ({ menus, ...rest }) => {
  return (
    <GridPageSection direction="column" name="menu" enablePadding>
      <Nav>
        <List>
          {menus.map((menu, i) => {
            return (
              // {/* 아이콘은 임의로 고정함 */}
              <ListItemLink
                key={menu.name}
                primary={menu.name}
                to={menu.path}
                icon={
                  menu.name === "VM Instance" ? (
                    <ComputerIcon />
                  ) : menu.name === "Configuration" ? (
                    <SettingsIcon />
                  ) : (
                    <InboxIcon />
                  )
                }
              />
            );
          })}
        </List>
      </Nav>
      <MenuBottomDiv>
        <ListItem button style={{ height: "100%" }}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
          <ChevronRightIcon />
        </ListItem>
      </MenuBottomDiv>
    </GridPageSection>
  );
};

export default withRouter(Menu);
