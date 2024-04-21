import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const middleware = (request) => {
    const token = request.nextauth.token
    const isPrivateRoutes = request.nextUrl.pathname.startsWith('/')

    if (isPrivateRoutes && !token ) {
        return NextResponse.rewrite(new URL('/auth'))
    }
}

const callbackOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
    matcher: ["/", "/alunos"]
}