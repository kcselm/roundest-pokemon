import { number, z } from 'zod'
import { procedure, router } from '../trpc'

import { PokemonClient } from 'pokenode-ts'

export const appRouter = router({
  get_pokemon_by_id: procedure
    .input(
      z.object({
        pokemonId: z.number(),
      })
    )
    .query(async ({ input }) => {
      const api = new PokemonClient()
      const pokemon = await api.getPokemonById(input.pokemonId)
      return {
        pokemon,
      }
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
