import React, { useRef } from "react";
import { GridPageLayout } from "./common/layouts";
import { PageHeader, Menu } from "./common/components";
import ConfigPage from "./pages/config";
import VmPage from "./pages/vm";
import useBreakpoint from "./common/utils/useBreakpoint";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const routes = [
  {
    path: "/config",
    name: "Configuration",
  },
  {
    path: "/vm",
    name: "VM Instance",
  },
  {
    path: "/more",
    name: "More",
  },
];
function App() {
  const rootRef = useRef(null);
  const morethan768 = useBreakpoint(rootRef);
  console.log(morethan768);
  return (
    <Router>
      <GridPageLayout ref={rootRef}>
        <PageHeader title="kubernetes Engine" />
        {morethan768 && <Menu menus={routes} />}
        <Switch>
          {/* 라우트 맵으로 메뉴이름 넘겨줄수도 있을것같음 */}
          <Route
            path="/vm"
            exact
            render={(props) => <VmPage morethan768={morethan768} {...props} />}
          />
          <Route
            path="/config"
            exact
            render={(props) => (
              <ConfigPage morethan768={morethan768} {...props} />
            )}
          />
        </Switch>
      </GridPageLayout>
    </Router>
  );
}

export default App;
