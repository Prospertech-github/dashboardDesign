import './App.css';
import IconText from './components/iconText/IconText';
import ThunderIcon from '../src/assets/icons/thunderIcon.svg'
import TaskCard from './components/taskCard/TaskCard';
import { Icons } from './components/icons/Icons';

function App() {
  return (
		<>
			<IconText iconName={ThunderIcon} text="Dashboard" space={6} />

			<TaskCard />

			<Icons/>
		</>
  );
}

export default App;
