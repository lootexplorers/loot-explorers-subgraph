## Subgraph for loot explorers

Subgraph can be accessible [here](https://thegraph.com/hosted-service/subgraph/lootexplorers/loot-explorers)

Public API can be accessible at https://api.thegraph.com/subgraphs/name/lootexplorers/loot-explorers

There are 3 main models that can be retrieved with this subgraph:

1. `owner` - All wallets that owns loot explorers
2. `explorers` - All explorers, along with its owner
3. `metadataIPFS` - Latest IPFS hash

### Sample Usage with axios

```
const subgraphUrl = "https://api.thegraph.com/subgraphs/name/lootexplorers/loot-explorers"

const { data } = await axios.post(getSubgraphBaseUrl(), {
  query: `
    {
      explorers(where: { owner: "0xff632D1a9ee6A4109b521Adb9503FfEf0587B9AA" }) {
        id
      }
      metadataIPFS(id: 1) {
        url
      }
    }
  `,
})

// Accessing the response
const explorers = data.data.explorers
const metadataIPFS = data.data.metadataIPFS
```