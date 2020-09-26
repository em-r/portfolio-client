type endpoint =
  | "blog"
  | "blogs"
  | "project"
  | "projects"
  | "skills"
  | "contact";
type variables = { [key: string]: string | number } | undefined;

export const useFetch = async <T>(
  endpoint: endpoint,
  variables: variables = undefined
): Promise<T | null> => {
  let base: string = `https://iammehdi.herokuapp.com/api/${endpoint}`;
  if (endpoint === "blog") {
    const { id } = variables as any;
    base += `/${id}`;
  }

  try {
    const response = await fetch(base, { mode: "cors" });
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
  const token = localStorage.getItem("JWT_TOKEN");
  const payload = JSON.stringify({ email, message });
  const params: RequestInit = {
    method: "POST",
    body: payload,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
  };
  try {
    const res = await fetch(
      "https://iammehdi.herokuapp.com/api/contact",
      params
    );
    const resBody = await res.json();
    if (res.status === 400) {
      const success = false;
      const {
        message: { email, message },
      } = resBody;
      if (email) return { success, message: "Email address is required" };
      else if (message) return { success, message: "Message is required" };
    }
    return resBody;
  } catch (e) {
    return null;
  }
};
