import { ChainId, WETH, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.EVMOS, '0x60154b6844ED3B8CbD4636244bdE43Bb06a0e68D') // DAI
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.EVMOS, '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A')
    expect(token.decimals).toEqual(9)
  })

  it('Pair', async () => {
    const token = new Token(ChainId.EVMOS, '0x60154b6844ED3B8CbD4636244bdE43Bb06a0e68D', 18) // DAI
    const pair = await Fetcher.fetchPairData(WETH[ChainId.EVMOS], token)
    expect(pair.liquidityToken.address).toEqual('0x8B22F85d0c844Cf793690F6D9DFE9F11Ddb35449')
  })
})
