import { describe, expect, it } from 'vitest'
import { pluralize } from '../utilities'

describe('pluralize', () => {
  it('empty data', () => {
    const plural = pluralize(0, '')
    expect(plural).toEqual('s')
  })

  it('single item', () => {
    const plural = pluralize(1, 'cat')
    expect(plural).toEqual('cat')
  })

  it('multiple items', () => {
    const plural = pluralize(5, 'cat')
    expect(plural).toEqual(`cats`)
  })

  it('with explicit plural', () => {
    const plural = pluralize(999, 'cat', 'catastrophe')
    expect(plural).toEqual(`catastrophe`)
  })
})
