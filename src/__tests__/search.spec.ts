import { describe, expect, it } from 'vitest'
import { performSearch } from '../utilities'
import { listOfCapitals } from '../data/cities'

describe('search', () => {
  it('empty data', () => {
    const { exact, fuzzy } = performSearch('manila', [])
    expect(exact).toHaveLength(0)
    expect(fuzzy).toHaveLength(0)
  })

  it('empty search string', () => {
    const { exact, fuzzy } = performSearch('', listOfCapitals)
    expect(exact).toHaveLength(0)
    expect(fuzzy).toHaveLength(0)
  })

  it('short search string', () => {
    const { exact, fuzzy } = performSearch('ma', listOfCapitals)
    expect(exact).toHaveLength(0)
    expect(fuzzy).toHaveLength(0)
  })

  it('multiple matches', () => {
    const { exact, fuzzy } = performSearch('man', listOfCapitals)
    expect(exact).toHaveLength(3)
    expect(fuzzy).toHaveLength(10)
  })

  it('single match', () => {
    const { exact, fuzzy } = performSearch('manila', listOfCapitals)
    expect(exact).toHaveLength(1)
    expect(fuzzy).toHaveLength(10)
  })
})
