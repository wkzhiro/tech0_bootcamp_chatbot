![simple-chat-webui-for-dify](public/readme/sample.png)
This project is a very simple web UI made with Next.js for Dify.
It is responsive and supports smartphones.

I am currently learning programming, so please don't expect too much :P

## Getting Started

### Setting up the .env file
Please configure at least the following two items, referring to the screenshot:

```
DIFY_APP_API_BASE_URL=https://xxxxx.xxxx.xxx/v1
DIFY_APP_API_KEY=app-XXXXXXXXXXXXXX
```
![api_screen_shot](public/readme/api.png)

### Running locally
You can start it in two steps:
```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to check.

## Customization
You can customize it with the .env file.
![customize](public/readme/customize.png)

## BASIC Authentication
```
AUTH_MODE="BASIC"
BASIC_AUTH_USER="basic_user"
BASIC_AUTH_PASSWORD="basic_pass"
```
By setting `AUTH_MODE` to `BASIC`, you can enable BASIC authentication.
If authentication is not needed, leave it empty.

## Deploy on Vercel
Since Server-Sent Events are used, it also works on Vercel.
However, in the free plan, the chat may be interrupted due to time limitations.

## Heartfelt Thanks to the Dify Development Team
Thank you very much for developing such a wonderful application.
I sincerely appreciate it.