import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import RepoScreen from './components/RepoScreen';
import CommitScreen from './components/CommitScreen';

const MainNavigator = createStackNavigator({
  Repos: {screen: RepoScreen},
  Commits: {screen: CommitScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
