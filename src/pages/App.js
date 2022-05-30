import React from 'react';
import {GlobalStyle} from '../styles/GlobalStyle';
import Dashboard from './Dashboard';
import WelcomePage from './WelcomePage';
import ProfilePage from "./ProfilePage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import ProjectList from '../components/Project/ProjectList';
import Projects from './Projects';
import CompetenceList from '../components/Competences/CompetenceList';
import Competences from './Competences';
import RolesList from '../components/Roles/RolesList';
import Roles from './Roles';
import NewCompetence from '../components/Competences/NewCompetence';
import NewCompetenceView from './NewCompetenceView';
import DepartmentList from '../components/Department/DepartmentList';
import Department from './Department';
import NewDepartment from '../components/Department/NewDepartment';
import NewDepartmentView from './NewDepartmentView';
import TeamList from '../components/Team/TeamList';
import Team from './Team';
import NewTeam from '../components/Team/NewTeam';
import NewTeamView from './NewTeamView';
import RoleList from '../components/Role/RoleList';
import Role from './Role';
import NewRole from '../components/Role/NewRole';
import NewRoleView from './NewRoleView';
function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Switch>
          <Route exact path="/" component={WelcomePage}>
            <Redirect to="/welcome" />
          </Route>
          <Route exact path="/welcome" component={WelcomePage}>
            <WelcomePage/>
          </Route>
          <Route exact path="/dashboard" component={Dashboard}>
            <Dashboard/>
          </Route>
          <Route exact path="/profile" component={ProfilePage}>        
            <ProfilePage/>
          </Route>
          <Route exact path="/projectList" component={ProjectList}>
            <Projects/>
          </Route>
          <Route exact path="/competenceList" component={CompetenceList}>
            <Competences/>
          </Route>   
          <Route exact path="/roleList" component={RolesList}>
            <Roles/>
          </Route>      
          <Route exact path="/newCompetence" component={NewCompetence}>
            <NewCompetenceView/>
          </Route>
          <Route exact path="/departmentList" component={DepartmentList}>
            <Department/>
          </Route>
          <Route exact path="/newDepartment" component={NewDepartment}>
            <NewDepartmentView/>
          </Route>
          <Route exact path="/teamList" component={TeamList}>
            <Team/>
          </Route>
          <Route exact path="/newTeam" component={NewTeam}>
            <NewTeamView/>
          </Route>
          <Route exact path="/roleList" component={RoleList}>
            <Role/>
          </Route>
          <Route exact path="/newRole" component={NewRole}>
            <NewRoleView/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
