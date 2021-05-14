
import './App.css';
import Upload from "./components/upload";
import GetItem from "./components/getItem";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Toolbar from "./components/toolbar";

function App() {
  return (
      <Router>
          <div className="body">
              <div>
                  <div>
                      <Toolbar/>
                  </div>
              </div>
              <Switch>
                  <Route path='/home'>
                      <div className='uploadBox'>
                          <Upload/>
                      </div>
                  </Route>
                  <Route path='/getitem'>
                      <div>
                          <GetItem/>
                      </div>
                  </Route>

              </Switch>


          </div>
      </Router>

  );
}

export default App;
