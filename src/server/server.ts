import { createServer, Response } from "miragejs";

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      // Onboardingni tugatish
      this.post("/complete-onboarding", () => {
        localStorage.setItem("isOnboarded", "true");
        return new Response(200, {}, JSON.stringify({ message: "Onboarding completed successfully." }));
      });

      // Onboarding holatini olish
      this.get("/onboarding-status", () => {
        const isOnboarded = localStorage.getItem("isOnboarded") === "true";
        return { isOnboarded }; // Bu JSON formatda to'g'ri
      });

      // Onboardingni reset qilish
      this.delete("/reset-onboarding", () => {
        localStorage.removeItem("isOnboarded");
        return new Response(200, {}, JSON.stringify({ message: "Onboarding reset successfully." }));
      });
    },
  });
}
