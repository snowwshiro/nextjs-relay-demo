import React from 'react';
import { fetchQuery } from 'react-relay'
import { initEnvironment } from '../lib/relay'
import repositoryQuery from '../queries/repository'

export async function getServerSideProps() {
  const environment = initEnvironment()
  const queryProps = await fetchQuery(environment, repositoryQuery, {}).toPromise()
  return {
    props: {
      ...queryProps,
    },
  }
}

export default function Home(props) {
  return (
    <p>{props != null ? `Repository: ${props.repository.name}` : "Loading"}</p>
  )
}
