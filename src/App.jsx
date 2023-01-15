import { Route, Routes } from 'solid-app-router'
import { createEffect ,createSignal} from 'solid-js';
import Nav from './components/Nav'
import Home from './pages/Home'
import SavedRepos from './pages/SavedRepos';

const [username, setUsername] = createSignal('kame2lam')
const [repos, setRepos] =createSignal([])

function App() {
  createEffect(async () => {
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
    setRepos(await res.json())
  })

  return (
    <div class='container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favrepos' element={<SavedRepos />}></Route>
      </Routes>
    </div>
  );
}

export {username, setUsername, repos}
export default App;
