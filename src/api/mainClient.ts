import createClient from "openapi-fetch";

import { paths } from "~/types/api";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

if (!baseUrl) {
  throw new Error("Base url are empty string or undefined. Fix it!");
}

const client = createClient<paths>({ baseUrl: baseUrl });

export default client;
