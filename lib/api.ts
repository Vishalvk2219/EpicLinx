import { useAuthStore } from "@/stores/useAuthStore";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(endpoint: string, options?: RequestInit) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      credentials: "include", // Send cookies including HttpOnly refresh/access tokens
    });

    if (!res.ok) {
      const errorBody = await res.json();
      const error = new Error(errorBody.message || "API error");
      // Attach extra fields to the error object
      (error as any).statusCode = errorBody.statusCode;
      (error as any).raw = errorBody.raw;
      (error as any).error = errorBody.error;
      throw error;
    }

    return res.json();
  } catch (e: any) {
    throw new Error(e?.message || "API error");
  }
}

export async function apiPost<T>(endpoint: string, body: any): Promise<T> {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });

    let responseBody: any = null;

    try {
      responseBody = await res.json();
    } catch (err) {
      throw new Error(`Unexpected error format from ${endpoint}`);
    }

    // if (!res.ok) {

    //   console.log(res)

    //   // Construct a custom error with extra details
    //   const error: any = new Error(responseBody.message || "API error");
    //   error.statusCode = responseBody.statusCode || res.status;
    //   error.statusText = responseBody.error || res.statusText;
    //   error.raw = responseBody;
    //   console.log("responseBody~~", responseBody)
    //   throw error;
    // }

    /*
    error: "Conflict"
    message: "Subscription already created"
    statusCode: 409
    */
    return responseBody;
  } catch (e: any) {
    throw new Error(e?.message || "API error");
  }
}

const CLOUDINARY_UPLOAD_PRESET = "epiclinx";
const CLOUDINARY_CLOUD_NAME = "dvfeogzjm";

export async function apiUpload(formData: FormData): Promise<string> {
  try {
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) throw new Error("Cloudinary upload failed");

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
}


export async function apiLogout() {
  await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
  localStorage.removeItem("token");
  document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  useAuthStore.getState().clearUser();
  localStorage.removeItem("LOCAL_KEY")

}
