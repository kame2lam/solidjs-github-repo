import {repos, setUsername, username} from '../App'
import { For,createEffect } from "solid-js";
import RepoCard from '../components/RepoCard';

function Home() {
  const refreshWithUesername = (event) => {
    event.preventDefault()
    const usernameInput = document.querySelector('#usernameInput')
    setUsername(usernameInput.value)
  }

  return (
    <div>
      <form class='mb-3' onSubmit={(event) => refreshWithUesername(event)}>
        <input type="text" class='p-1 align-middle' id="usernameInput" required />
        <button class='btn btn-dark ms-3 w-auto'>Fetch</button>
      </form>
      <h3>GitHub repos for {username()}</h3>
      
      <For each={repos()}>
        {(repo) => <RepoCard repo={repo} />}
      </For>
    </div>
  )
}

export default Home;