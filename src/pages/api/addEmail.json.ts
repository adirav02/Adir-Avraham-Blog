import type { APIRoute } from "astro";
import { Newsletter, db } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  try {
    const { id, fullName, email } = data;
    if (!id || fullName == undefined || !email) {
      return new Response(
        JSON.stringify({
          message: "Please povide all required fields",
          success: false,
        }),
        {
          status: 404,
        }
      );
    }
    const res = await db.insert(Newsletter).values({
      id: id,
      fullName: fullName,
      email: email,
    });

    if (res) {
      return new Response(
        JSON.stringify({
          message: "Success",
          data: res,
          success: true,
        }),
        {
          status: 200,
        }
      );
    } else {
      throw new Error("There was a problem with the db response.");
    }
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: e,
        success: false,
      }),
      {
        status: 404,
      }
    );
  }
};
