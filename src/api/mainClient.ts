import createClient from "openapi-fetch";

import { paths } from "~/types/tibiastalker";

const client = createClient<paths>({ baseUrl: "https://api.tibiastalker.pl/" });

export default client;
