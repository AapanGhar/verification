'use strict'

export const watchTower = fn=>(request, response, next)=> Promise.resolve(fn(request, response, next)).catch(next)
