export const explorePopularRepos = async (req, res) => {
  try {
    const { language } = req.params;
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const data = await response.json();

    res.status(200).json({ repos: data.items });
  } catch (error) {
    console.log(`Error in explorePopularRepos controller ${error}`);
    res.status(500).json({ error: error.message });
  }
};
