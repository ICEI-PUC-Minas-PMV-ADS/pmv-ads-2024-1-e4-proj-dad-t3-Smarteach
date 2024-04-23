import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request) {

        if (request.nextUrl.pathname.startsWith("/alunos")
            && request.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(
                new URL("/auth", request.url)
            )
        }

        if (request.nextUrl.pathname.startsWith("/alunos")
            && request.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(
                new URL("/", request.url)
            )
        }

        if (request.nextUrl.pathname.startsWith("/turmas")
            && request.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(
                new URL("/", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

export const config = {
    matcher: ["/", "/alunos", "/turmas"]
}