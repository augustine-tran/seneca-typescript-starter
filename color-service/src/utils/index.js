// @flow
import { Result } from 'true-myth'

const iife = async fn => {
  await fn()
}

const _try = async fn => {
  try {
    const r = await fn()
    return Result.ok(r)
  } catch (e) {
    return Result.err(e)
  }
}

module.exports = {
  iife,
  _try
}
