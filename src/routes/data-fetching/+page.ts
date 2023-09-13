import { randomNumber } from "$lib/utils/random";

export function load() {
  return {
    title: 'Load Page',
    value: randomNumber(),
  }
}
