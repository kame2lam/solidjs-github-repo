import { createSignal } from "solid-js";
import RepoCard from "../components/RepoCard";

const reposFromLocalStorage =JSON.parse(localStorage.getItem('savedRepos') || '[]')
const [savedRepos, setSavedRepos] = createSignal(reposFromLocalStorage)

function SavedRepos() {
  return (
    <div>
      <h2>SavedRepos</h2>
      <For each={savedRepos()}>
        {(repo) => <RepoCard repo={repo} />}
      </For>
    </div>
  )
}

export {setSavedRepos, savedRepos}
export default SavedRepos;