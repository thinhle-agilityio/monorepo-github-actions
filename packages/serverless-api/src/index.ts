/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler deploy src/index.ts --name my-worker` to deploy your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { parse } from "cookie";

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	USERS: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		let requestHeaders = JSON.stringify([...request.headers]);
		console.log(requestHeaders);
		console.log('env', env);
		console.log('ctx', ctx);
		const accept = request.headers.get("Accept");
		console.log('accept', accept);

		const cookie = parse(request.headers.get("Cookie") || "");
		console.log('cookie', cookie);

		const userId = 'test-user-9';

		await env.USERS.put('userId', userId, {
			metadata: { someMetadataKey: "someMetadataValue" },
		});

		const getKVvalue = await env.USERS.get('userId');
		console.log('getKVvalue', getKVvalue);

		return new Response(JSON.stringify({
			url: request.url,
			headers: requestHeaders,
			body: request.body,
			cookie,
		}), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
				// "Location": "/home",
				"Set-Cookie": `userId=${userId}`,
      },
			status: 301,
    });
	},
};
