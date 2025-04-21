import { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'joshua-ndereba';

export const useGithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        const data = await response.json();
        
        const repoDetails = await Promise.all(
          data.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url);
            const languages = await languagesResponse.json();
            
            return {
              id: repo.id,
              name: repo.name,
              description: repo.description || 'No description available',
              html_url: repo.html_url,
              homepage: repo.homepage,
              topics: repo.topics || [],
              languages: Object.keys(languages),
              stars: repo.stargazers_count,
              forks: repo.forks_count
            };
          })
        );

        setRepos(repoDetails);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
};
