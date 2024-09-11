'use client'

import useCharacter from "~/hooks/useCharacter"

export const TibiaUsers = () => {
  const character = useCharacter();

  if (typeof character === "undefined") {
    return <div>loading...</div>
  }

  if (character == null) {
    return <div>can&apos;t find</div>
  }

  return <div>{character}</div>
}