import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json'; /// Importing team data from a JSON file

// Interface to define the structure of props expected by the TeamCard component
interface TeamProp {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

// Welcome component displays the header section
function Welcome() {
  return (
    <header className="App-header">
      <h1>Welcome to the NCAA Basketball</h1>
      <p>Find the basketball teams in all Colleges below</p>
    </header>
  );
}

// TeamCard class component displays information about a single basketball team
class TeamCard extends React.Component<TeamProp> {
  render() {
    const { school, name, city, state } = this.props;

    // Render a card with the team's information
    return (
      <div className="team-card">
        <h2>School : {school}</h2>
        <p>Mascot Name : {name}</p>
        <p>
          Location: {city}, {state}
        </p>
      </div>
    );
  }
}

// TeamCardList component renders a list of TeamCard components for each team
function TeamCardList() {
  return (
    <div>
      {teamsData.teams.map((theteam) => (
        <TeamCard key={theteam.tid} {...theteam} />
      ))}
    </div>
  );
}

// The main App component that renders the Welcome component and the list of team cards
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamCardList />
    </div>
  );
}

export default App;
