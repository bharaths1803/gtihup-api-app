import Repo from "./Repo";

const Repos = ({ repos, alwaysFullWidth = false }) => {
  const className = alwaysFullWidth ? "w-full" : "lg:w-2/3 w-full";
  return (
    <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-s border-gray-200">
        {repos.map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
        {repos.length === 0 && (
          <p className="h-32 flex justify-center items-center">
            No repos found
          </p>
        )}
      </ol>
    </div>
  );
};

export default Repos;
