import { d as db, N as Newsletter } from './__QRq_72KW.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const data = await request.json();
  try {
    const { id, fullName, email } = data;
    if (!id || fullName == void 0 || !email) {
      return new Response(
        JSON.stringify({
          message: "Please povide all required fields",
          success: false
        }),
        {
          status: 404
        }
      );
    }
    const res = await db.insert(Newsletter).values({
      id,
      fullName,
      email
    });
    if (res) {
      return new Response(
        JSON.stringify({
          message: "Success",
          data: res,
          success: true
        }),
        {
          status: 200
        }
      );
    } else {
      throw new Error("There was a problem with the db response.");
    }
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: e,
        success: false
      }),
      {
        status: 404
      }
    );
  }
};

export { POST, prerender };
