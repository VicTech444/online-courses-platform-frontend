import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import * as jose from 'jose'
import { parse } from 'cookie'

export const middleware = async (req: NextRequest) => {
    let { pathname } = req.nextUrl;
    const userProtectedRoutes = ["/settings"]
    const courseProtectedRoutes = /^\/courses\/[^\/]+\/taken\/[^\/]+$/;
    const isFile = pathname.match(/\.[^\/]+$/);


    if (courseProtectedRoutes.test(pathname) && !isFile) {
        const cookieHeader = req.headers.get('cookie') || '';
        const cookies = parse(cookieHeader);

        console.log(cookies)
        // if (!loginCookie) return NextResponse.redirect(new URL('/log/', req.url));

        // try {
        //     const {payload} = await jose.jwtVerify(loginCookie.value, new TextEncoder().encode(process.env.JWT_SECRET));

        // } catch (error) {
        //     return NextResponse.redirect(new URL('/log', req.url))
        // }
    }
}
