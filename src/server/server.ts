// src/server/server.ts
import { createServer, Response } from "miragejs";

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      // Onboarding holatini olish
      this.get("/onboarding-status", () => {
        const isOnboarded = localStorage.getItem("isOnboarded") === "true";
        return { isOnboarded };
      });

      // Onboardingni tugatish
      this.post("/complete-onboarding", () => {
        localStorage.setItem("isOnboarded", "true");
        return new Response(200, {}, { message: "Onboarding completed successfully." });
      });
    },
  });
}
