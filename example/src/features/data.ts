import { PublicKey } from '@solana/web3.js'
import BN from 'bn.js'

export const pool = {
  type: 'Standard',
  programId: '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8',
  id: '21r2zeCacmm5YvbGoPZh9ZoGREuodhcbQHaP5tZmzY14',
  lpMint: {
    chainId: 101,
    address: 'AsDuPg9MgPtt3jfoyctUCUgsvwqAN6RZPftqoeiPDefM',
    programId: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
    logoURI: '',
    symbol: 'FTT-SRM',
    name: 'Raydium LP Token V4 (FTT-SRM)',
    decimals: 6,
    tags: [],
    extensions: {},
  },
  marketId: 'CDvQqnMrt9rmjAxGGE6GTPUdzLpEhgNuNZ1tWAvPsF3W',
  mintA: {
    chainId: 101,
    address: 'AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3',
    programId: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
    logoURI: 'https://img.raydium.io/icon/AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3.png',
    symbol: '',
    name: '',
    decimals: 6,
    tags: [],
    extensions: {
      coingeckoId: 'ftx-token',
    },
  },
  mintB: {
    chainId: 101,
    address: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    programId: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
    logoURI: 'https://img.raydium.io/icon/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt.png',
    symbol: 'SRM',
    name: 'Serum',
    decimals: 6,
    tags: [],
    extensions: {
      coingeckoId: 'serum',
    },
  },
  mintAmountA: 6.685989,
  mintAmountB: 216.088983,
  price: 32.31967372366302,
  lpPrice: 1.2802421403105244,
  lpAmount: 11.604058,
  tvl: 14.856004050207464,
  feeRate: 0.0025,
  openTime: 0,
  rewardDefaultInfos: [],
  day: {
    volume: 0,
    volumeQuote: 0,
    volumeFee: 0,
    apr: 0,
    feeApr: 0,
    priceMin: 32.31967372366302,
    priceMax: 32.31967372366302,
    rewardApr: [],
  },
  week: {
    volume: 0.8625190868502911,
    volumeQuote: 26.608969,
    volumeFee: 0.002156297717125728,
    apr: 0.0076,
    feeApr: 0.0076,
    priceMin: 26.120830169181026,
    priceMax: 28.911202240100177,
    rewardApr: [],
  },
  month: {
    volume: 10.3190036094476,
    volumeQuote: 253.85957600000003,
    volumeFee: 0.025797509023619002,
    apr: 0.0211,
    feeApr: 0.0211,
    priceMin: 18.396075881371747,
    priceMax: 28.911202240100177,
    rewardApr: [],
  },
  pooltype: [],
  farmUpcomingCount: 0,
  farmOngoingCount: 0,
  farmFinishedCount: 0,
}

export const rewards = [
  {
    rewardMint: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    rewardPerSecond: '17',
    rewardOpenTime: '1698127080',
    rewardEndTime: '1698731880',
    rewardType: 'Standard SPL',
  },
]

export const position = {
  bump: 252,
  nftMint: new PublicKey('DxJHQLdJqUAzfSRRJLXrtLjJxFdbqHeQciC4ZFpQRjGX'),
  poolId: new PublicKey('Enfoa5Xdtirwa46xxa5LUVcQWe7EUb2pGzTjfvU7EBS1'),
  tickLower: -21120,
  tickUpper: -19080,
  liquidity: new BN('507631955'),
  feeGrowthInsideLastX64A: new BN('116579978490887900'),
  feeGrowthInsideLastX64B: new BN('15878802686810160'),
  tokenFeesOwedA: new BN('0'),
  tokenFeesOwedB: new BN('0'),
  rewardInfos: [],
}

export const farm = {
  programId: 'EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q',
  id: 'HUDr9BDaAGqi37xbQHzxCyXvfMCKPTPNF8g9c9bPu1Fu',
  symbolMints: [
    {
      chainId: 101,
      address: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
      programId: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      logoURI: 'https://img.raydium.io/icon/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R.png',
      symbol: 'RAY',
      name: 'Raydium',
      decimals: 6,
      tags: [],
      extensions: {
        coingeckoId: 'raydium',
      },
    },
    {
      chainId: 101,
      address: 'So11111111111111111111111111111111111111112',
      programId: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      logoURI: 'https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png',
      symbol: 'SOL',
      name: 'Wrapped Solana',
      decimals: 9,
      tags: [],
      extensions: {
        coingeckoId: 'wrapped-solana',
      },
    },
  ],
  lpMint: {
    chainId: 101,
    address: '89ZKE4aoyfLBe2RuV6jM3JGNhaV18Nxh8eNtjRcndBip',
    programId: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
    logoURI: '',
    symbol: 'RAY-SOL',
    name: 'Raydium LP Token V4 (RAY-SOL)',
    decimals: 6,
    tags: [],
    extensions: {},
  },
  tvl: 1503376.3558951588,
  lpPrice: 1.3721224589286634,
  apr: 0.04478728878475776,
  tags: ['Farm'],
  rewardInfos: [
    {
      mint: {
        chainId: 101,
        address: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
        programId: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
        logoURI: 'https://img.raydium.io/icon/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R.png',
        symbol: 'RAY',
        name: 'Raydium',
        decimals: 6,
        tags: [],
        extensions: {
          coingeckoId: 'raydium',
        },
      },
      type: 'Standard SPL',
      perSecond: 13197.5,
      apr: 0.04478728878475776,
    },
  ],
  farmName: 'RAY/SOL',
  isOngoing: true,
  type: 'Raydium',
  version: 3,
}