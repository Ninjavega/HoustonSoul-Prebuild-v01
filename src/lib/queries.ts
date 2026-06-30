const baseUrl = process.env.WORDPRESS_URL;
import { gql, GraphQLClient } from "graphql-request";
import { Category } from "./types";

const client = new GraphQLClient(`${baseUrl}/graphql`);

export async function getCategories(): Promise<Category[]> {
  const query = gql`
    query getCategories {
        categories(first: 100) {
            nodes {
                id
                name
                slug
                description
                }
            }
        }
}
        `;

    const data: {categories: {nodes: Category[]} } = await client.request(query);
    return data.categories.nodes;
}