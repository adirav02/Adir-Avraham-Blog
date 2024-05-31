import { Resend } from 'resend';

const prerender = false;
const resend = new Resend("re_T3cgFGnz_8YVY7zb7Mfsbx2kUHPx51gui");
const POST = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;
  if (!to || !from || !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: "Did not provide the right data"
    });
  }
  const send = await resend.emails.send({
    to,
    from,
    html,
    subject,
    text
  });
  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
};

export { POST, prerender };
