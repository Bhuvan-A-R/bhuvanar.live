const emailTemplate = (recipient_name) => {
  return `
        <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank you for contacting</title>
        <style>
            :root {
                --background: hsl(var(--background));
                --foreground: hsl(var(--foreground));
                --card: hsl(var(--card));
                --card-foreground: hsl(var(--card-foreground));
                --popover: hsl(var(--popover));
                --popover-foreground: hsl(var(--popover-foreground));
                --primary: hsl(var(--primary));
                --primary-foreground: hsl(var(--primary-foreground));
                --secondary: hsl(var(--secondary));
                --secondary-foreground: hsl(var(--secondary-foreground));
                --tertiary: hsl(var(--tertiary));
                --muted: hsl(var(--muted));
                --muted-foreground: hsl(var(--muted-foreground));
                --muted-foreground-2: hsl(var(--muted-foreground-2));
                --accent: hsl(var(--accent));
                --accent-foreground: hsl(var(--accent-foreground));
                --destructive: hsl(var(--destructive));
                --destructive-foreground: hsl(var(--destructive-foreground));
                --border: hsl(var(--border));
                --input: hsl(var(--input));
                --ring: hsl(var(--ring));
                --radius: var(--radius);
            }

            body {
                font-family: "system-ui", -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", sans-serif;
                background-color: var(--background);
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 650px;
                margin: 50px auto;
                background-color: var(--card);
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background-color: var(--primary);
                color: var(--primary-foreground);
                text-align: center;
                padding: 20px 0;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 30px;
                color: var(--foreground);
            }
            .content p {
                line-height: 1.6;
                margin: 10px 0;
            }
            .footer {
                background-color: var(--muted);
                text-align: center;
                padding: 10px 0;
                font-size: 14px;
                color: var(--muted-foreground);
            }
            .footer a {
                color: var(--primary);
                text-decoration: none;
            }
            .footer a:hover {
                text-decoration: underline;
            }
            a {
                color: var(--primary);
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
                                                            style="max-width:110px;height:auto;border:3px solid #FF6E58;border-radius:50%"
                                                            src="https://media.licdn.com/dms/image/v2/D5603AQE7TI8HQb1NaQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710529304549?e=1731542400&amp;v=beta&amp;t=Sbd8oxCiUp80jIliajgQRqxttgeTrYahHeJ6fakZGQ8">
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
                                                                        style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;font-size:20px;color: #FF6E58;font-weight:700;text-transform:uppercase;margin:0">Bhuvan
                                                                        S A</p>
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
                                                                            href="https://www.linkedin.com/in/bhuvansa"
                                                                            target="_blank"
                                                                            style="display:inline-block;line-height:0;margin-right:5px"><img
                                                                                alt="LinkedIn"
                                                                                width="20"
                                                                                style="max-width:20px;height:auto;border:0"
                                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDc3YjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saW5rZWRpbiI+PHBhdGggZD0iTTE2IDhhNiA2IDAgMCAxIDYgNnY3aC00di03YTIgMiAwIDAgMC0yLTIgMiAyIDAgMCAwLTIgMnY3aC00di03YTYgNiAwIDAgMSA2LTZ6Ii8+PHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjkiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMiIvPjwvc3ZnPg=="></a>
                                                                        <a
                                                                            class="GITHUBURL"
                                                                            href="https://www.github.com/bhuvansa"
                                                                            target="_blank"
                                                                            style="display:inline-block;line-height:0;margin-right:5px"><img
                                                                                alt="LinkedIn"
                                                                                width="20"
                                                                                style="max-width:20px;height:auto;border:0"
                                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1naXRodWIiPjxwYXRoIGQ9Ik0xNSAyMnYtNGE0LjggNC44IDAgMCAwLTEtMy41YzMgMCA2LTIgNi01LjUuMDgtMS4yNS0uMjctMi40OC0xLTMuNS4yOC0xLjE1LjI4LTIuMzUgMC0zLjUgMCAwLTEgMC0zIDEuNS0yLjY0LS41LTUuMzYtLjUtOCAwQzYgMiA1IDIgNSAyYy0uMyAxLjE1LS4zIDIuMzUgMCAzLjVBNS40MDMgNS40MDMgMCAwIDAgNCA5YzAgMy41IDMgNS41IDYgNS41LS4zOS40OS0uNjggMS4wNS0uODUgMS42NS0uMTcuNi0uMjIgMS4yMy0uMTUgMS44NXY0Ii8+PHBhdGggZD0iTTkgMThjLTQuNTEgMi01LTItNy0yIi8+PC9zdmc+"></a>
                                                                        <a
                                                                            class="TWITTERURL"
                                                                            href="https://x.com/bhuvan_s_a"
                                                                            target="_blank"
                                                                            style="display:inline-block;line-height:0;margin-right:5px"><img
                                                                                alt="Twitter"
                                                                                width="20"
                                                                                style="max-width:20px;height:auto;border:0"
                                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTM4OS4yIDQ4aDcwLjZMMzA1LjYgMjI0LjIgNDg3IDQ2NEgzNDVMMjMzLjcgMzE4LjYgMTA2LjUgNDY0SDM1LjhMMjAwLjcgMjc1LjUgMjYuOCA0OEgxNzIuNEwyNzIuOSAxODAuOSAzODkuMiA0OHpNMzY0LjQgNDIxLjhoMzkuMUwxNTEuMSA4OGgtNDJMMzY0LjQgNDIxLjh6Ii8+PC9zdmc+"></a>
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
                                                                                class="WEBSITE">
                                                                                <td
                                                                                    style="padding:4px 0 0"><img
                                                                                        style="width:16px;height:auto;line-height:0"
                                                                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjZlNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1nbG9iZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTIgMmExNC41IDE0LjUgMCAwIDAgMCAyMCAxNC41IDE0LjUgMCAwIDAgMC0yMCIvPjxwYXRoIGQ9Ik0yIDEyaDIwIi8+PC9zdmc+"></td>
                                                                                <td><a
                                                                                        href="https://www.bhuvansa.com"
                                                                                        target="_blank"
                                                                                        style="text-decoration:none; color: #475569">https://www.bhuvansa.com</a></td>
                                                                            </tr>
                                                                            <tr
                                                                                class="EMAIL">
                                                                                <td
                                                                                    style="padding:4px 0 0"><img
                                                                                        style="width:16px;height:auto;line-height:0"
                                                                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjZlNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYWlsIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIi8+PHBhdGggZD0ibTIyIDctOC45NyA1LjdhMS45NCAxLjk0IDAgMCAxLTIuMDYgMEwyIDciLz48L3N2Zz4="></td>
                                                                                <td><a
                                                                                        href="mailto:bhuvanamaravathi@gmail.com"
                                                                                        style="text-decoration:none; color: #475569">bhuvansa@bhuvansa.com</a></td>
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
                                                                                        8050158461
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
                </div>
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
            :root {
                --background: hsl(var(--background));
                --foreground: hsl(var(--foreground));
                --card: hsl(var(--card));
                --card-foreground: hsl(var(--card-foreground));
                --popover: hsl(var(--popover));
                --popover-foreground: hsl(var(--popover-foreground));
                --primary: hsl(var(--primary));
                --primary-foreground: hsl(var(--primary-foreground));
                --secondary: hsl(var(--secondary));
                --secondary-foreground: hsl(var(--secondary-foreground));
                --tertiary: hsl(var(--tertiary));
                --muted: hsl(var(--muted));
                --muted-foreground: hsl(var(--muted-foreground));
                --muted-foreground-2: hsl(var(--muted-foreground-2));
                --accent: hsl(var(--accent));
                --accent-foreground: hsl(var(--accent-foreground));
                --destructive: hsl(var(--destructive));
                --destructive-foreground: hsl(var(--destructive-foreground));
                --border: hsl(var(--border));
                --input: hsl(var(--input));
                --ring: hsl(var(--ring));
                --radius: var(--radius);
            }

            body {
                font-family: "system-ui", -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", sans-serif;
                background-color: var(--background);
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 650px;
                margin: 50px auto;
                background-color: var(--card);
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background-color: var(--primary);
                color: var(--primary-foreground);
                text-align: center;
                padding: 20px 0;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 30px;
                color: var(--foreground);
            }
            .content p {
                line-height: 1.6;
                margin: 10px 0;
            }
            .footer {
                background-color: var(--muted);
                text-align: center;
                padding: 10px 0;
                font-size: 14px;
                color: var(--muted-foreground);
            }
            .footer a {
                color: var(--primary);
                text-decoration: none;
            }
            .footer a:hover {
                text-decoration: underline;
            }
            a {
                color: var(--primary);
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
