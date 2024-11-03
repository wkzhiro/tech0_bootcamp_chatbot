import { Readable } from 'stream';
import { ReadableStream } from 'stream/web';

export async function POST(request) {
    try {
        // クライアントからのJSONデータを取得
        const requestData = await request.json();

        // 環境変数からAPIのベースURLとAPIキーを取得
        const DIFY_APP_API_BASE_URL = `${process.env.DIFY_APP_API_BASE_URL}/workflows/run`;
        const DIFY_APP_API_KEY = process.env.DIFY_APP_API_KEY;

        console.log('DIFY_APP_API_BASE_URL', DIFY_APP_API_BASE_URL);

        // 外部APIに対してPOSTリクエストを送信
        const response = await fetch(DIFY_APP_API_BASE_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${DIFY_APP_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        console.log("Dify_response", response);

        // レスポンスが成功しているか確認
        if (!response.ok) {
            const errorText = await response.text();
            return new Response(JSON.stringify({ error: errorText }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // レスポンスのContent-Typeを確認
        const contentType = response.headers.get('Content-Type') || '';

        if (contentType.includes('application/json')) {
            // JSONレスポンスの場合、パースして返す
            const responseData = await response.json();
            return new Response(JSON.stringify(responseData), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            // その他のレスポンス（テキストなど）の場合、テキストとして返す
            const responseText = await response.text();
            return new Response(responseText, {
                status: 200,
                headers: { 'Content-Type': 'text/plain' }
            });
        }

    } catch (error) {
        console.error('Error processing POST request:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}