async function fetchGraphQL(text, variables) {
  const Token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${Token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;