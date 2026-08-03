import dotenv from "dotenv";

dotenv.config({
    path: ".env.local"
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import express from "express";
import path from "path";
import chatHandler from "./src/server/api/chat/POST.ts";
import healthHandler from "./src/server/api/health/GET.ts";
// import sourceMapperPlugin from "./source-mapper/src/index";
// import { devToolsPlugin } from "./dev-tools/src/vite-plugin";
// import { fullStoryPlugin } from "./fullstory-plugin";
// import apiRoutes from "vite-plugin-api-routes";

const allowedHosts: string[] = [];
if (process.env.FRONTEND_DOMAIN) {
	allowedHosts.push(
		process.env.FRONTEND_DOMAIN,
		`http://${process.env.FRONTEND_DOMAIN}`,
		`https://${process.env.FRONTEND_DOMAIN}`,
	);
}
if (process.env.ALLOWED_ORIGINS) {
	allowedHosts.push(...process.env.ALLOWED_ORIGINS.split(","));
}
if (process.env.VITE_PARENT_ORIGIN) {
	allowedHosts.push(process.env.VITE_PARENT_ORIGIN);
}
if (allowedHosts.length === 0) {
	allowedHosts.push("*");
}

export default defineConfig(({ mode }) => ({
	plugins: [
		react({
			// babel: {
			// 	plugins: [sourceMapperPlugin],
			// },
		}),
		{
			name: "gel-dev-api-routes",
			configureServer(server) {
				const withExpressResponse = (res: any) => {
					if (typeof res.status !== "function") {
						res.status = (code: number) => {
							res.statusCode = code;
							return res;
						};
					}

					if (typeof res.json !== "function") {
						res.json = (payload: unknown) => {
							if (!res.headersSent) {
								res.setHeader("Content-Type", "application/json; charset=utf-8");
							}
							res.end(JSON.stringify(payload));
							return res;
						};
					}

					return res;
				};

				server.middlewares.use(express.json());

				server.middlewares.use("/api/health", (req, res) => {
					if (req.method !== "GET") {
						res.setHeader("Allow", "GET");
						res.statusCode = 405;
						res.end(JSON.stringify({ success: false, error: "Method not allowed" }));
						return;
					}
					healthHandler(req as never, withExpressResponse(res) as never);
				});

				server.middlewares.use("/api/chat", (req, res) => {
					if (req.method !== "POST") {
						res.setHeader("Allow", "POST");
						res.statusCode = 405;
						res.end(JSON.stringify({ success: false, error: "Method not allowed" }));
						return;
					}
					chatHandler(req as never, withExpressResponse(res) as never);
				});
			},
		},
		// Temporarily disabled API routes to fix server restart issues
		// apiRoutes({
		// 	mode: "isolated",
		// 	configure: "src/server/configure.js",
		// 	dirs: [{ dir: "./src/server/api", route: "" }],
		// 	forceRestart: mode === "development",
		// }),
		// ...(mode === "development"
		// 	? [devToolsPlugin() as Plugin, fullStoryPlugin()]
		// 	: []),
	],

	resolve: {
		alias: {
			nothing: "/src/fallbacks/missingModule.ts",
			"@/api": path.resolve(__dirname, "./src/server/api"),
			"@": path.resolve(__dirname, "./src"),
		},
	},

	server: {
		host: "0.0.0.0",
		port: parseInt(process.env.PORT || "5173"),
		strictPort: !!process.env.PORT,
		allowedHosts,
		cors: {
			origin: allowedHosts,
			credentials: true,
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			allowedHeaders: ["Content-Type", "Authorization", "Accept", "User-Agent"],
		},
		hmr: {
			overlay: false,
		},
	},

	build: {
		rollupOptions: {
			// No external dependencies - bundle everything
		},
	},
}));
