export const FOCUS_POKEMON = 'FOCUS_POKEMON'

export const focusPokemon = (pokemon) => {
  return {
    type: FOCUS_POKEMON,
    pokemon
  }
}
