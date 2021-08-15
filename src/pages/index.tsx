import React, { useState, useEffect } from 'react';
import fetchGraphQL from '../lib/fetchGraphQL';

const Home = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query RepositoryNameQuery {
        repository(owner: "snowwshiro" name: "snowwshiro") {
          name
        }
      }
    `).then(response => {
      if (!isMounted) {
        return;
      }
      const data = response.data;
      setName(data.repository.name);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);

  return (
    <p>{name != null ? `Repository: ${name}` : "Loading"}</p>
  )
}

export default Home
