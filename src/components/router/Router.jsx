import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../atoms/pages/Top";
import { Users } from "../atoms/pages/Users";
import { DefaultLayout } from "../templates/DefaultLayout";
import { HeaderOnly } from "../templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
