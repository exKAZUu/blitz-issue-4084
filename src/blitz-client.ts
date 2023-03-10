import { AuthClientPlugin } from "@blitzjs/auth"
import { setupBlitzClient } from "@blitzjs/next"
import { BlitzRpcPlugin } from "@blitzjs/rpc"

export const authConfig = {
  cookiePrefix: "blitz-issue-4084"
}

export const { withBlitz } = setupBlitzClient({
  plugins: [
    AuthClientPlugin(authConfig),
    BlitzRpcPlugin({}),
  ],
})
