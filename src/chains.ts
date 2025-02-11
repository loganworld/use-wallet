import { ChainUnknownError } from './errors'
import { ChainInformation, ChainType, Currency } from './types'

const ETH: Currency = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
}

const MATIC: Currency = {
  name: 'Matic Token',
  symbol: 'MATIC',
  decimals: 18,
}

const AVAX: Currency = {
  name: 'Avax',
  symbol: 'AVAX',
  decimals: 9,
}

const ONE: Currency = {
  name: 'ONE Token',
  symbol: 'ONE',
  decimals: 18,
}

const XDAI: Currency = {
  name: 'xDAI',
  symbol: 'xDAI',
  decimals: 18,
}

const BNB: Currency = {
  name: 'Binance Token',
  symbol: 'BNB',
  decimals: 18,
}

const TT: Currency = {
  name: 'Thunder Token',
  symbol: 'TT',
  decimals: 18,
}

const CELO: Currency = {
  name: 'Celo',
  symbol: 'CELO',
  decimals: 18,
}

const METIS: Currency = {
  name: 'METIS',
  symbol: 'METIS',
  decimals: 18,
}

const FTM: Currency = {
  name: 'FTM',
  symbol: 'FTM',
  decimals: 18,
}

const DEV: Currency = {
  name: 'DEV',
  symbol: 'DEV',
  decimals: 18,
}
const MOVR: Currency = {
  name: 'Moonriver',
  symbol: 'MOVR',
  decimals: 18,
}
const GLMR: Currency = {
  name: 'Glimmer',
  symbol: 'GLMR',
  decimals: 18,
}
const HECO: Currency = {
  name: 'HECO',
  symbol: 'HT',
  decimals: 18,
}
const EVMOS: Currency = {
  name: 'EVMOS',
  symbol: 'EVMOS',
  decimals: 18,
}
const MGB: Currency = {
  name: 'Mugambo',
  symbol: 'MGB',
  decimals: 18,
}
const NOVA: Currency = {
  name: 'NovaToken',
  symbol: 'NVT',
  decimals: 18,
}
const PHRON: Currency = {
  name: 'PhronToken',
  symbol: 'PHR',
  decimals: 18,
}

const CHAIN_INFORMATION = new Map<number, ChainInformation | ChainType>([
  [
    1,
    {
      id: 1,
      nativeCurrency: ETH,
      type: 'main',
      fullName: 'Ethereum Mainnet',
      shortName: 'Ethereum',
      explorerUrl: `https://etherscan.io`,
      testnet: false,
    },
  ],
  [
    3,
    {
      id: 3,
      nativeCurrency: ETH,
      type: 'ropsten',
      fullName: 'Ropsten Testnet',
      shortName: 'Ropsten',
      explorerUrl: `https://ropsten.etherscan.io`,
      testnet: true,
    },
  ],
  [
    4,
    {
      id: 4,
      nativeCurrency: ETH,
      type: 'rinkeby',
      fullName: 'Rinkeby Testnet',
      shortName: 'Rinkeby',
      explorerUrl: `https://rinkeby.etherscan.io`,
      testnet: true,
    },
  ],
  [
    5,
    {
      id: 5,
      nativeCurrency: ETH,
      type: 'goerli',
      fullName: 'Goerli Testnet',
      shortName: 'Goerli',
      explorerUrl: `https://goerli.etherscan.io`,
      testnet: true,
    },
  ],
  [
    42,
    {
      id: 42,
      nativeCurrency: ETH,
      type: 'kovan',
      fullName: 'Kovan Testnet',
      shortName: 'Kovan',
      explorerUrl: `https://kovan.etherscan.io`,
      testnet: true,
    },
  ],
  [
    43112,
    {
      id: 43112,
      nativeCurrency: AVAX,
      type: 'avalocal',
      shortName: 'Avalanche Local',
      fullName: 'Avalanche Local',
      testnet: true,
    },
  ],
  [
    43113,
    {
      id: 43113,
      nativeCurrency: AVAX,
      type: 'fuji',
      fullName: 'Avalanche Fuji',
      shortName: 'Fuji',
      explorerUrl: 'https://testnet.snowtrace.io/',
      testnet: true,
    },
  ],
  [
    43114,
    {
      id: 43114,
      nativeCurrency: AVAX,
      type: 'avalanche',
      fullName: 'Avalanche Mainnet',
      shortName: 'Avalanche',
      explorerUrl: 'https://snowtrace.io/',
      testnet: false,
    },
  ],
  [
    100,
    {
      id: 100,
      nativeCurrency: XDAI,
      type: 'xdai',
      fullName: 'xDAI',
      shortName: 'xDAI',
      explorerUrl: 'https://blockscout.com/xdai/mainnet/',
      testnet: false,
    },
  ],
  [
    137,
    {
      id: 137,
      nativeCurrency: MATIC,
      type: 'matic',
      fullName: 'Polygon Mainnet',
      shortName: 'Polygon',
      explorerUrl: `https://polygonscan.com`,
      testnet: false,
    },
  ],
  [
    80001,
    {
      id: 80001,
      nativeCurrency: MATIC,
      type: 'mumbai',
      fullName: 'Mumbai Testnet',
      shortName: 'Mumbai',
      explorerUrl: `https://mumbai.polygonscan.com`,
      testnet: true,
    },
  ],
  [
    250,
    {
      id: 250,
      nativeCurrency: FTM,
      type: 'fantom',
      fullName: 'Fantom Opera Mainnet',
      shortName: 'FTM',
      explorerUrl: `https://ftmscan.com/`,
      testnet: false,
    },
  ],
  [
    4002,
    {
      id: 4002,
      nativeCurrency: FTM,
      type: 'fantom',
      fullName: 'Fantom Opera Testnet',
      shortName: 'FTM',
      explorerUrl: `https://testnet.ftmscan.com/`,
      testnet: true,
    },
  ],
  [
    9000,
    {
      id: 9000,
      nativeCurrency: EVMOS,
      type: 'evmos',
      fullName: 'Evmos Testnet',
      shortName: 'EVMOS',
      explorerUrl: `https://eth.bd.evmos.dev:8545`,
      testnet: true,
    },
  ],
  [
    9001,
    {
      id: 9001,
      nativeCurrency: EVMOS,
      type: 'evmos',
      fullName: 'Evmos mainnet',
      shortName: 'EVMOS',
      explorerUrl: `https://eth.bd.evmos.org:8545`,
      testnet: false,
    },
  ],
  [
    1666600000,
    {
      id: 1666600000,
      nativeCurrency: ONE,
      type: 'harmony',
      fullName: 'Harmony ONE',
      shortName: 'Harmony',
      explorerUrl: `https://explorer.harmony.one/`,
      testnet: false,
    },
  ],
  [
    1666700000,
    {
      id: 1666700000,
      nativeCurrency: ONE,
      type: 'harmonyTest',
      fullName: 'Harmony ONE Testnet',
      shortName: 'Harmony Testnet',
      explorerUrl: `https://explorer.testnet.harmony.one/`,
      testnet: true,
    },
  ],
  [
    56,
    {
      id: 56,
      nativeCurrency: BNB,
      type: 'bsc',
      fullName: 'Binance Smart Chain',
      shortName: 'BSC',
      explorerUrl: `https://bscscan.com/`,
      testnet: false,
    },
  ],
  [
    97,
    {
      id: 97,
      nativeCurrency: BNB,
      type: 'bscTest',
      fullName: 'Binance Smart Chain Testnet',
      shortName: 'BSC Testnet',
      explorerUrl: `https://testnet.bscscan.com/`,
      testnet: true,
    },
  ],
  [
    108,
    {
      id: 108,
      nativeCurrency: TT,
      type: 'thundercore',
      fullName: 'ThunderCore Mainnet',
      shortName: 'ThunderCore',
      explorerUrl: `https://scan.thundercore.com/`,
      testnet: false,
    },
  ],
  [
    18,
    {
      id: 18,
      nativeCurrency: TT,
      type: 'thundercoreTest',
      fullName: 'ThunderCore Testnet',
      shortName: 'ThunderCore Testnet',
      explorerUrl: `https://scan-testnet.thundercore.com/`,
      testnet: true,
    },
  ],
  [
    421611,
    {
      id: 421611,
      nativeCurrency: ETH,
      type: 'arbitrumTest',
      fullName: 'Arbitrum Testnet',
      shortName: 'Arbitrum Testnet',
      explorerUrl: 'https://testnet.arbiscan.io/',
      testnet: true,
    },
  ],
  [
    42161,
    {
      id: 42161,
      nativeCurrency: ETH,
      type: 'arbitrum',
      fullName: 'Arbitrum Mainnet',
      shortName: 'Arbitrum',
      explorerUrl: 'https://arbiscan.io/',
      testnet: false,
    },
  ],
  [
    42220,
    {
      id: 42220,
      nativeCurrency: CELO,
      type: 'celo',
      fullName: 'Celo (Mainnet)',
      shortName: 'Celo',
      explorerUrl: 'https://explorer.celo.org/',
      testnet: false,
    },
  ],
  [
    44787,
    {
      id: 44787,
      nativeCurrency: CELO,
      type: 'celoTest',
      fullName: 'Celo (Alfajores Testnet)',
      shortName: 'Alfajores',
      explorerUrl: 'https://alfajores-blockscout.celo-testnet.org/',
      testnet: true,
    },
  ],
  [
    588,
    {
      id: 588,
      nativeCurrency: METIS,
      type: 'stardust',
      fullName: 'Metis Stardust Testnet',
      shortName: 'Stardust',
      explorerUrl: 'https://stardust-explorer.metis.io/',
      testnet: true,
    },
  ],
  [
    1088,
    {
      id: 1088,
      nativeCurrency: METIS,
      type: 'andromeda',
      fullName: 'Metis Andromeda',
      shortName: 'Andromeda',
      explorerUrl: 'https://andromeda-explorer.metis.io/',
      testnet: false,
    },
  ],
  [
    1313161555,
    {
      id: 1313161555,
      nativeCurrency: ETH,
      type: 'aurora',
      fullName: 'Aurora Testnet',
      shortName: 'AuroraTest',
      explorerUrl: 'https://explorer.testnet.aurora.dev/',
      testnet: true,
    },
  ],
  [
    1313161554,
    {
      id: 1313161554,
      nativeCurrency: ETH,
      type: 'aurora',
      fullName: 'Aurora Mainnet',
      shortName: 'Aurora',
      explorerUrl: 'https://explorer.mainnet.aurora.dev/',
      testnet: false,
    },
  ],
  [
    1287,
    {
      id: 1287,
      nativeCurrency: DEV,
      type: 'moonbase',
      fullName: 'moonbase',
      shortName: 'Moonbase Alphanet',
      explorerUrl: 'https://moonbase.moonscan.io/',
      testnet: true,
    },
  ],
  [
    1285,
    {
      id: 1285,
      nativeCurrency: MOVR,
      type: 'moonriver',
      fullName: 'Moonriver',
      shortName: 'Moonriver',
      explorerUrl: 'https://moonriver.moonscan.io/',
      testnet: false,
    },
  ],
  [
    1284,
    {
      id: 1284,
      nativeCurrency: GLMR,
      type: 'moonbeam',
      fullName: 'Moonbeam',
      shortName: 'Moonbeam',
      explorerUrl: 'https://moonbeam.moonscan.io/',
      testnet: false,
    },
  ],
  [
    1337,
    {
      id: 1337,
      type: 'local',
      testnet: true,
    },
  ],
  [
    5777,
    {
      id: 5777,
      type: 'ganache',
      testnet: true,
    },
  ],
  [
    128,
    {
      id: 128,
      nativeCurrency: HECO,
      type: 'main',
      fullName: 'HECO Mainnet',
      shortName: 'HECO',
      explorerUrl: `https://hecoscan.xyz/`,
      testnet: false,
    },
  ],
  [
    42161,
    {
      id: 42161,
      nativeCurrency: ETH,
      type: 'main',
      fullName: 'Arbitrum',
      shortName: 'Arbitrum',
      explorerUrl: `https://arbiscan.io/`,
      testnet: false,
    },
  ],
  [
    421613,
    {
      id: 421613,
      nativeCurrency: ETH,
      type: 'testnet',
      fullName: 'Arbitrum Goerli Testnet',
      shortName: 'Arbitrum',
      explorerUrl: `https://goerli.arbiscan.io/`,
      testnet: true,
    },
  ],
  [
    421614,
    {
      id: 421614,
      nativeCurrency: ETH,
      type: 'testnet',
      fullName: 'Arbitrum Sepolia Testnet',
      shortName: 'Arbitrum',
      explorerUrl: `https://sepolia-rollup.arbitrum.io/rpc`,
      testnet: true,
    },
  ],
  [
    11155111,
    {
      id: 11155111,
      nativeCurrency: ETH,
      type: 'testnet',
      fullName: 'Sepolia Testnet',
      shortName: 'Sepolia',
      explorerUrl: `https://sepolia.etherscan.io/`,
      testnet: true,
    },
  ],
  [
    351,
    {
      id: 351,
      nativeCurrency: MGB,
      type: 'testnet',
      fullName: 'Mugambo Testnet',
      shortName: 'Mugambo',
      explorerUrl: `https://test-explorer.Mugambo.org/`,
      testnet: true,
    },
  ],
  [
    8453,
    {
      id: 8453,
      nativeCurrency: ETH,
      type: 'main',
      fullName: 'Base Mainnet',
      shortName: 'Base',
      explorerUrl: `https://developer-access-mainnet.base.org`,
      testnet: true,
    },
  ],
  [
    84531,
    {
      id: 84531,
      nativeCurrency: ETH,
      type: 'testnet',
      fullName: 'Base Goerli Testnet',
      shortName: 'Base',
      explorerUrl: `https://goerli.base.org`,
      testnet: true,
    },
  ],
  [
    350,
    {
      id: 350,
      nativeCurrency: NOVA,
      type: 'main',
      fullName: 'Nova Mainnet',
      shortName: 'Nova',
      explorerUrl: `https://explorer.novatoken.fr/`,
      testnet: true,
    },
  ],
  [
    7744,
    {
      id: 7744,
      nativeCurrency: PHRON,
      type: 'testnet',
      fullName: 'Phron Testnet',
      shortName: 'Phron',
      explorerUrl: `https://testnet.phronscan.io/`,
      testnet: true,
    },
  ],
  [
    168587773,
    {
      id: 168587773,
      nativeCurrency: ETH,
      type: 'testnet',
      fullName: "blast sepolia chain",
      shortName: "blast sepolia",
      explorerUrl: "https://sepolia.blastscan.io/",
      testnet: true
    },
  ],
  [
    81457,
    {
      id: 81457,
      nativeCurrency: ETH,
      type: 'mainnet',
      fullName: "blast chain",
      shortName: "blast",
      explorerUrl: "https://blastscan.io/",
      testnet: false
    }
  ],
  [
    84532,
    {
      id: 84532,
      nativeCurrency: ETH,
      type: 'testnet',
      fullName: "base sepolia chain",
      shortName: "base sepolia",
      explorerUrl: "https://sepolia.basescan.org/",
      testnet: true
    }
  ],
])

/**
 * This method checks whether a particular chain id is known.
 *
 * @param {number} chainId chain id to check
 * @returns {boolean} true if chain is known
 */
export function isKnownChain(chainId: number): boolean {
  return CHAIN_INFORMATION.has(chainId)
}

/**
 *
 * @param {number} chainId chain id to retrieve information for
 * @throws {ChainUnknownError} if chain is unknown
 * @returns {boolean} information for specified chain
 */
export function getChainInformation(
  chainId: number
): ChainInformation | ChainType {
  const chainInfo = CHAIN_INFORMATION.get(chainId)
  if (!chainInfo) throw new ChainUnknownError(`Unknown chain id: ${chainId}`)
  return chainInfo
}

/**
 * This is a getter method to returns the chain ids of all known chains.
 *
 * @returns {number[]} array of chain Ids
 */
export function getKnownChainsIds(): number[] {
  return Array.from(CHAIN_INFORMATION.keys())
}

/**
 * This is a getter method to return all information available for each known chain.
 *
 * @returns {ChainInformation | ChainType[]} An array containing information for
 * each known chain
 */
export function getKnownChainInformation(): ChainInformation | ChainType[] {
  return Array.from(CHAIN_INFORMATION.values())
}

export function getDefaultChainId(): number {
  return 1
}
