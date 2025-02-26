const emailTemplate = (recipient_name) => {
  return `

  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Thank you for contacting</title>
          <style>
              body {
                  font-family: "system-ui", -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", sans-serif;
                  background-color: #f8f9fa;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 650px;
                  margin: 50px auto;
                  background-color: #ffffff;
                  border-radius: 10px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
              }
              .header {
                  background-color: #2A9D8F;
                  color: #ffffff;
                  text-align: center;
                  padding: 20px 0;
              }
              .header h1 {
                  margin: 0;
                  font-size: 24px;
              }
              .content {
                  padding: 30px;
                  color: #333333;
              }
              .content p {
                  line-height: 1.6;
                  margin: 10px 0;
              }
              .footer {
                  background-color: #e9ecef;
                  text-align: center;
                  padding: 10px 0;
                  font-size: 14px;
                  color: #6c757d;
              }
              .footer a {
                  color: #2A9D8F;
                  text-decoration: none;
              }
              .footer a:hover {
                  text-decoration: underline;
              }
              a {
                  color: #2A9D8F;
                  text-decoration: none;
              }
              a:hover {
                  text-decoration: underline;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Thank You for Contacting!</h1>
              </div>
              <div class="content">
                  <p>Dear ${recipient_name},</p>
                  <p>
                      Thank you for reaching out. I have received your message and
                      will get back to you as soon as possible.
                  </p>
                  <p>
                      I appreciate your interest and patience. If your inquiry is
                      urgent, please use the contact details provided below
                      for immediate assistance.
                  </p>
                  <p>Best regards,</p>
                  <p>Bhuvan A R</p>
              </div>
              <div class="footer">
                  <div>
                      <table cellpadding="0" cellspacing="0" width="100%"
                          style="max-width:600px">
                          <tbody>
                              <tr>
                                  <td style="padding:12px 0">
                                      <table cellpadding="0" cellspacing="0"
                                          style="width:100%">
                                          <tbody>
                                              <tr>
                                                  <td class="DISPLAYPICTURE"
                                                      style="width:160px"
                                                      width="160">
                                                      <div
                                                          style="margin:0;line-height:0;text-align:center">
                                                          <img width="110px"
                                                              style="max-width:110px;height:auto;border:3px solid #2A9D8F;border-radius:50%"
                                                              src="https://firebasestorage.googleapis.com/v0/b/image-sharing-app-61874.appspot.com/o/images%2FBhuvan-Bitmoj-Photo.png?alt=media&token=a2e0f873-891f-419e-b34a-5ce2898cdaef">
                                                      </div>
                                                  </td>
                                                  <td
                                                      style="width:180px;padding-right:20px"
                                                      width="180">
                                                      <table cellpadding="0"
                                                          cellspacing="0"
                                                          style="width:100%">
                                                          <tbody>
                                                              <tr>
                                                                  <td>
                                                                      <p
                                                                          style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;font-size:20px;color: #2A9D8F;font-weight:700;text-transform:uppercase;margin:0">Bhuvan
                                                                          A R</p>
                                                                      <p
                                                                          style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;font-size:14px;color:grey;margin:5px 0 0"></p>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td
                                                                      style="padding:8px 0 0">
                                                                      <p
                                                                          style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;font-size:14px;margin:0;padding-top:6px;height:30px">
                                                                          <a
                                                                              class="LINKEDINURL"
                                                                              href="https://www.linkedin.com/in/bhuvan-a-r"
                                                                              target="_blank"
                                                                              style="display:inline-block;line-height:0;margin-right:5px"><img
                                                                                  alt="LinkedIn"
                                                                                  width="20"
                                                                                  style="max-width:20px;height:auto;border:0"
                                                                                  src="https://icon-icons.com/icons2/99/PNG/512/linkedin_socialnetwork_17441.png"></a>
                                                                          <a
                                                                              class="GITHUBURL"
                                                                              href="https://www.github.com/bhuvan-a-r"
                                                                              target="_blank"
                                                                              style="display:inline-block;line-height:0;margin-right:5px"><img
                                                                                  alt="LinkedIn"
                                                                                  width="20"
                                                                                  style="max-width:20px;height:auto;border:0"
                                                                                  src="https://icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"></a>
                                                                          <a
                                                                              class="TWITTERURL"
                                                                              href="https://x.com/bhuvan_a_r"
                                                                              target="_blank"
                                                                              style="display:inline-block;line-height:0;margin-right:5px"><img
                                                                                  alt="Twitter"
                                                                                  width="20"
                                                                                  style="max-width:20px;height:auto;border:0"
                                                                                  src="https://cdn-icons-png.freepik.com/256/12107/12107622.png"></a>
                                                                      </p>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                                  <td
                                                      style="border-left:1px solid #a1a4aa;padding-left:20px">
                                                      <table cellpadding="0"
                                                          cellspacing="0"
                                                          style="width:100%">
                                                          <tbody>
                                                              <tr>
                                                                  <td
                                                                      style="line-height:1.6">
                                                                      <table
                                                                          cellpadding="0"
                                                                          cellspacing="0"
                                                                          style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;font-size:14px;width:100%">
                                                                          <tbody>
                                                                              <tr
                                                                                  class="EMAIL">
                                                                                  <td
                                                                                      style="padding:4px 0 0"><img
                                                                                          style="width:16px;height:auto;line-height:0"
                                                                                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjZlNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYWlsIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIi8+PHBhdGggZD0ibTIyIDctOC45NyA1LjdhMS45NCAxLjk0IDAgMCAxLTIuMDYgMEwyIDciLz48L3N2Zz4="></td>
                                                                                  <td><a
                                                                                          href="mailto:bhuvanamaravathi@gmail.com"
                                                                                          style="text-decoration:none; color: #475569">bhuvanamaravathi@gmail.com</a></td>
                                                                              </tr>
                                                                              <tr
                                                                                  class="PHONENUMBER">
                                                                                  <td
                                                                                      style="width:26px;padding:4px 0 0"><img
                                                                                          style="width:16px;height:auto;line-height:0"
                                                                                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjZlNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1waG9uZS1jYWxsIj48cGF0aCBkPSJNMjIgMTYuOTJ2M2EyIDIgMCAwIDEtMi4xOCAyIDE5Ljc5IDE5Ljc5IDAgMCAxLTguNjMtMy4wNyAxOS41IDE5LjUgMCAwIDEtNi02IDE5Ljc5IDE5Ljc5IDAgMCAxLTMuMDctOC42N0EyIDIgMCAwIDEgNC4xMSAyaDNhMiAyIDAgMCAxIDIgMS43MiAxMi44NCAxMi44NCAwIDAgMCAuNyAyLjgxIDIgMiAwIDAgMS0uNDUgMi4xMUw4LjA5IDkuOTFhMTYgMTYgMCAwIDAgNiA2bDEuMjctMS4yN2EyIDIgMCAwIDEgMi4xMS0uNDUgMTIuODQgMTIuODQgMCAwIDAgMi44MS43QTIgMiAwIDAgMSAyMiAxNi45MnoiLz48cGF0aCBkPSJNMTQuMDUgMmE5IDkgMCAwIDEgOCA3Ljk0Ii8+PHBhdGggZD0iTTE0LjA1IDZBNSA1IDAgMCAxIDE4IDEwIi8+PC9zdmc+"></td>
                                                                                  <td><a
                                                                                          href="tel:+918317462097"
                                                                                          style="text-decoration:none; color: #475569">
                                                                                          +91
                                                                                          8317462097
                                                                                      </a>
                                                                                  </td>
                                                                              </tr>
                                                                              <tr
                                                                                  class="ADDRESS">
                                                                                  <td
                                                                                      style="vertical-align:top;padding:4px 0 0"><img
                                                                                          style="width:16px;height:auto;line-height:0"
                                                                                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjZlNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXAtcGluIj48cGF0aCBkPSJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMyIvPjwvc3ZnPg=="></td>
                                                                                  <td>
                                                                                      <a
                                                                                          href="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9720644,77.4640846,11z/data=!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
                                                                                          style="text-decoration:none; color: #475569"
                                                                                          target="_blank">
  
                                                                                          Bengaluru,
                                                                                          Karnataka
                                                                                      </a>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  <p>
                      &copy; 2025 Bhuvan A R
                      All rights reserved.
                  </p>
              </div>
          </div>
      </body>
  </html>  
        `;
};

const emailTemplateForMe = (name, recipient, message) => {
  return `
        <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Request</title>
        <style>
            body {
                font-family: "system-ui", -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", sans-serif;
                background-color: #f8f9fa;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 650px;
                margin: 50px auto;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background-color: #2A9D8F;
                color: #ffffff;
                text-align: center;
                padding: 20px 0;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 30px;
                color: #333333;
            }
            .content p {
                line-height: 1.6;
                margin: 10px 0;
            }
            .footer {
                background-color: #e9ecef;
                text-align: center;
                padding: 10px 0;
                font-size: 14px;
                color: #6c757d;
            }
            .footer a {
                color: #2A9D8F;
                text-decoration: none;
            }
            .footer a:hover {
                text-decoration: underline;
            }
            a {
                color: #2A9D8F;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Request</h1>
            </div>
            <div class="content">
                <p>Name: ${name}</p>
                <p>Email: ${recipient}</p>
                <p>Message: ${message}</p>
            </div>
            <div class="footer">
                <p>
                    &copy; 2025 Bhuvan A R
                    All rights reserved.
                </p>
            </div>
        </div>
    </body>
</html>
    `;
};

export { emailTemplate, emailTemplateForMe };
