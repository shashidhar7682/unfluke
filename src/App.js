import Leaderboard from "./pages/Leaderboard.jsx";
import './App.css';
import NavigationBar from "./components/NavigationBar.jsx";
import ProfileNavBar from "./components/ProfileNavBar.jsx";
import Temp from "./Temp.jsx";
function App() {
  return (
    <div className="App">
      <ProfileNavBar />
      <NavigationBar />
      <div className="h-4/5">
        <Leaderboard />
        <Temp/>
      </div>
    </div>
  );
}

export default App;