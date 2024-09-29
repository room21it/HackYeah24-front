/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/Register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["RegisterUserCommand"];
                    "text/json": components["schemas"]["RegisterUserCommand"];
                    "application/*+json": components["schemas"]["RegisterUserCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Token/Generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["GetUserTokenQuery"];
                    "text/json": components["schemas"]["GetUserTokenQuery"];
                    "application/*+json": components["schemas"]["GetUserTokenQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: {
                    test?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Car": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: {
                    id?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["AddRenaultCommand"];
                    "text/json": components["schemas"]["AddRenaultCommand"];
                    "application/*+json": components["schemas"]["AddRenaultCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Errors/InnerExceptionCodes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": {
                            [key: string]: string;
                        };
                        "application/json": {
                            [key: string]: string;
                        };
                        "text/json": {
                            [key: string]: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Errors/Unauthorized": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Errors/NotFound": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Errors/Default": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Recipes/addbylink": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": string;
                    "text/json": string;
                    "application/*+json": string;
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": string;
                        "application/json": string;
                        "text/json": string;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Recipes/addbytext": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": string;
                    "text/json": string;
                    "application/*+json": string;
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": string;
                        "application/json": string;
                        "text/json": string;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Recipes/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Recipe"];
                        "application/json": components["schemas"]["Recipe"];
                        "text/json": components["schemas"]["Recipe"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/Recipes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    allergens?: components["schemas"]["EAllergenType"][];
                    searchPhrase?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["RecipeListRow"][];
                        "application/json": components["schemas"]["RecipeListRow"][];
                        "text/json": components["schemas"]["RecipeListRow"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/WeatherForecast": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["WeatherForecast"][];
                        "application/json": components["schemas"]["WeatherForecast"][];
                        "text/json": components["schemas"]["WeatherForecast"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AddRenaultCommand: {
            /** Format: int32 */
            id?: number;
        };
        Allergen: {
            /** Format: uuid */
            id?: string;
            allergenType?: components["schemas"]["EAllergenType"];
        };
        CookingStep: {
            /** Format: uuid */
            id?: string;
            title?: string | null;
            startCondition?: components["schemas"]["StartStepCondition"];
            /** Format: int32 */
            duration?: number;
            /** Format: int32 */
            order?: number;
        };
        /** @enum {string} */
        EAllergenType: "gluten" | "nuts" | "celery" | "crustaceans" | "egg" | "fish" | "lupin" | "milk" | "molluscs" | "mustard" | "peanuts" | "sesame" | "soya" | "sulphur";
        GetUserTokenQuery: {
            userName?: string | null;
            password?: string | null;
        };
        Ingredient: {
            /** Format: uuid */
            id?: string;
            name?: string | null;
            /** Format: double */
            amount?: number | null;
            unit?: string | null;
            allergenTypes?: components["schemas"]["EAllergenType"][] | null;
        };
        MacroElements: {
            /** Format: uuid */
            id?: string;
            protein?: components["schemas"]["MacroValues"];
            carbohydrate?: components["schemas"]["MacroValues"];
            fat?: components["schemas"]["MacroValues"];
        };
        MacroValues: {
            /** Format: uuid */
            id?: string;
            /** Format: double */
            gramms?: number;
        };
        Nutriens: {
            /** Format: uuid */
            id?: string;
            /** Format: double */
            calories?: number;
            macroElements?: components["schemas"]["MacroElements"];
        };
        Recipe: {
            /** Format: uuid */
            id?: string;
            name?: string | null;
            /** Format: int32 */
            duration?: number;
            cuisine?: string | null;
            thumbnailUrl?: string | null;
            nutriens?: components["schemas"]["Nutriens"];
            ingredients?: components["schemas"]["Ingredient"][] | null;
            steps?: components["schemas"]["CookingStep"][] | null;
            allergens?: components["schemas"]["Allergen"][] | null;
        };
        RecipeListRow: {
            /** Format: uuid */
            id?: string;
            name?: string | null;
            cuisine?: string | null;
            thumbnailUrl?: string | null;
            /** Format: int32 */
            duration?: number;
            allergens?: components["schemas"]["EAllergenType"][] | null;
        };
        RegisterUserCommand: {
            userName?: string | null;
            password?: string | null;
        };
        StartStepCondition: {
            /** Format: uuid */
            id?: string;
            prerequisiteStepIds?: string[] | null;
        };
        WeatherForecast: {
            /** Format: date */
            date?: string;
            /** Format: int32 */
            temperatureC?: number;
            /** Format: int32 */
            readonly temperatureF?: number;
            summary?: string | null;
            /** Format: int32 */
            myProperty?: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
