import  { savedRepos,setSavedRepos } from "../pages/SavedRepos";

const saveRepo = (repo) => {
  setSavedRepos([repo, ...savedRepos()])
  localStorage.setItem('savedRepos', JSON.stringify(savedRepos()))
}

const unsavedRepo = (repoId) => {
  const nextState = savedRepos()?.filter(item => item.id !== repoId)
  setSavedRepos(nextState)
  localStorage.setItem('savedRepos', JSON.stringify(nextState))
}

const repoIsSaved = (repoId) => {
  const repo = savedRepos()?.filter(item => item.id == repoId)
  return repo?.length
}

function RepoCard({ repo }) {
  return (
    <div class="card">
      <div class="card-header">&#11088; star: {repo.stargazers_count}</div>
      <div class="card-body">
        <a href={repo.html_url} class='h4 card-title text-decoration-none' target="_blank" rel="noreferrer">
          <strong>{repo.owner?.login}</strong>/{repo.name}
        </a>
        <p class="card-text">{repo.description}</p>
        {repoIsSaved(repo.id) ? (
          <button class="btn btn-danger" onclick={()=>unsavedRepo(repo.id)}>Unsaved</button>
        ) : (
          <button class="btn btn-success" onclick={() => saveRepo(repo)}>Save</button>
        )}
      </div>
    </div>
  )
}

export default RepoCard;