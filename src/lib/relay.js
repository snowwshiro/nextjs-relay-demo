import { useMemo } from 'react'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

let relayEnvironment

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;
  return fetch(process.env.NEXT_PUBLIC_RELAY_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => response.json())
}

function createEnvironment(initialRecords) {
  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  })
}

export function initEnvironment(initialRecords) {
  const environment = relayEnvironment ?? createEnvironment(initialRecords)

  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords))
  }
  if (typeof window === 'undefined') return environment
  if (!relayEnvironment) relayEnvironment = environment

  return relayEnvironment
}

export function useEnvironment(initialRecords) {
  const store = useMemo(() => initEnvironment(initialRecords), [initialRecords])
  return store
}