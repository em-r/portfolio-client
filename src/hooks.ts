// interface ResponseError {
//   success: false;
//   message: string;
// }

type endpoint = "blog" | "blogs" | "project" | "projects" | "skills";
type variables = { [key: string]: string | number } | undefined;

export const useFetch = async <T>(
  endpoint: endpoint,
  variables: variables = undefined
): Promise<T | null> => {
  let base: string = `/api/${endpoint}`;
  if (endpoint === "blog") {
    const { id } = variables as any;
    base += `/${id}`;
  }

  try {
    const response = await fetch(base);
    const body = await response.json();
    return body;
  } catch (e) {
    return null;
  }
};
