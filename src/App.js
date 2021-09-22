import coverDark from './images/cover-dark.svg';
import coverLight from './images/cover-light.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={coverLight} className="App-logo" alt="logo" />
        <div className="content">
          <h3>ICS Student Council invites you to WebJam, a week-long competition where teams of students will create fully functional web applications! We'll be providing workshops throughout the week to help you get started, and awarding amazing prizes for the best projects out there!</h3>
          <h4 className="accent"><a href="#">Register</a></h4>
          <h4><a href="#">Join our Discord</a></h4>
        </div>
      </header>
      <div className="App-schedule">
        <h2>Event Schedule</h2>
        <div className="App-schedule-events">
          <Event name="Kickoff Ceremony" shortDate="11" info="Monday, Oct 11 • ICSSC" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <Event name="Kickoff Ceremony" shortDate="11" info="Monday, Oct 11 • ICSSC" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <Event name="Kickoff Ceremony" shortDate="11" info="Monday, Oct 11 • ICSSC" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
      </div>
    </div>
  );
}

function Event(props) {
  return (
    <div className="Event">
      <div className="Event-header">
        <div className="Event-date">
          <h4>{ props.shortDate }</h4>
        </div>
        <div className="Event-headerText">
          <h3>{ props.name }</h3>
          <h5>{ props.info }</h5>
        </div>
      </div>
      <p>{ props.description }</p>
    </div>
  )
}

export default App;
