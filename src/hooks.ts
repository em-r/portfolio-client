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

type ContactResponse = {
  success: boolean;
  message: string;
};

export const usePost = async (
  email: string,
  message: string
): Promise<ContactResponse | null> => {
  const payload = JSON.stringify({ email, message });
  const params = {
    method: "POST",
    body: payload,
    headers: { "content-type": "application/json" },
  };
  try {
    const req = await fetch("/api/contact", params);
    const res = await req.json();
    return res;
  } catch (e) {
    return null;
  }
};
