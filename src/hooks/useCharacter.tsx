import { useEffect, useState } from "react"
import mainClient from "~/api/mainClient"

const useCharacter = () => {
  const [character, setCharacter] = useState<string | undefined | null>(undefined);

  useEffect(function fetchCharacters() {
    const request = async () => {
      const { data, error } = await mainClient.GET("/api/tibia-stalker/v1/characters/{characterName}", {
        params: {
          path: {
            characterName: "bobeek"
          }
        }
      });

      if (data) {
        setCharacter(`Character ${data.name}, ${ data.level } lvl from ${ data.world }`)
      }

      if (error) {
        setCharacter(null)
      }
    }

    request();
  })

  return character
}

export default useCharacter;