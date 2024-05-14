export const prerender = false;
import type { APIRoute } from "astro";
import { Newsletter, db, eq } from "astro:db";

export const DELETE: APIRoute = async ({ params }) => {
  const id = String(params.id);

  if (!id) {
    return new Response(
      JSON.stringify({
        message: "Please provide all required fields.",
        success: false,
      }),
      {
        status: 404,
      }
    );
  }

  try {
    const res = await db.delete(Newsletter).where(eq(Newsletter.id, id));
    if (res) {
      return new Response(null, { status: 204 });
    } else {
      throw new Error("prob, bob");
    }
  } catch (e) {
    console.error(e);
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

export const PATCH: APIRoute = async ({ params, request }) => {
  const { fullName } = await request.json();
  const id = String(params.id);

  if (!id) {
    return new Response(
      JSON.stringify({
        message: "Please provide all required fields.",
        success: false,
      }),
      {
        status: 404,
      }
    );
  }

  try {
    const res = await db
      .update(Newsletter)
      .set({ fullName })
      .where(eq(Newsletter.id, id));

    if (res) {
      return new Response(
        JSON.stringify({
          message: "success",
          success: true,
        })
      );
    } else {
      throw new Error("prob, bob");
    }
  } catch (e) {
    console.error(e);
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
