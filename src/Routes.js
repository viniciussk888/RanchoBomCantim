import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  NewProduct as NewProductView,
  ClientList as ClientListView,
  NewClient as NewClientView,
  UserList as UserListView,
  NewMachine as NewMachineView,
  NewAnimal as NewAnimalView,
  MachineList as MachineListView,
  AnimalList as AnimalListView,
  NewUser as NewUserView,
  FinancialMov as FinancialMovView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={NewUserView}
        exact
        layout={MainLayout}
        path="/newuser"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={NewProductView}
        exact
        layout={MainLayout}
        path="/newproduct"
      />
      <RouteWithLayout
        component={ClientListView}
        exact
        layout={MainLayout}
        path="/clients"
      />
      <RouteWithLayout
        component={NewClientView}
        exact
        layout={MainLayout}
        path="/newclient"
      />
      <RouteWithLayout
        component={MachineListView}
        exact
        layout={MainLayout}
        path="/machines"
      />
      <RouteWithLayout
        component={NewMachineView}
        exact
        layout={MainLayout}
        path="/newmachine"
      />
      <RouteWithLayout
        component={AnimalListView}
        exact
        layout={MainLayout}
        path="/animals"
      />
      <RouteWithLayout
        component={NewAnimalView}
        exact
        layout={MainLayout}
        path="/newanimal"
      />
      <RouteWithLayout
        component={FinancialMovView}
        exact
        layout={MainLayout}
        path="/financialmov"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
