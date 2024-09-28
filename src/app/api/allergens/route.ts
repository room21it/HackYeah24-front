import { listOfAllergens } from "./allergens"


export async function GET() {
    const allergens = listOfAllergens
   
    return Response.json({ allergens })
  }