import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import LinkedIn from "next-auth/providers/linkedin";



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),

    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: "/",
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("========== OAuth SUCCESS ==========");
      console.log("Provider:", account?.provider);
      console.log("Provider Account ID:", account?.providerAccountId);
      console.log("User:", user);
      console.log("Profile:", profile);
      return true;

      // Only process our OAuth providers
      if (
        account?.provider !== "google" &&
        account?.provider !== "facebook" &&
        account?.provider !== "linkedin"
      ) {
        return true;
      }

      try {
        const backendUrl = process.env.BACKEND_API_URL;

        console.log("BACKEND_API_URL:", backendUrl);

        if (!backendUrl) {
          console.error("BACKEND_API_URL is not configured");
          return false;
        }

        const response = await fetch(`${backendUrl}/api/auth/oauth`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            name: user.name,
            email: user.email,
            image: user.image,
            profile,
          }),
        });

        console.log("Backend OAuth status:", response.status);

        const responseText = await response.text();

        console.log("Backend OAuth response:", responseText);

        if (!response.ok) {
          console.error(
            "Backend OAuth login failed:",
            response.status,
            responseText,
          );

          return false;
        }

        const data = JSON.parse(responseText);

        console.log("Backend OAuth data:", data);

        // Temporarily just verify backend communication.
        // We'll add the CareerForge JWT after this works.
        return true;
      } catch (error) {
        console.error("OAuth backend request failed:", error);

        return false;
      }
    },
  },
});