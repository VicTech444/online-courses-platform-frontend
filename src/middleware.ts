import { NextRequest, NextResponse } from "next/server"

export const middleware = async (req: NextRequest) => {
    let { pathname } = req.nextUrl

    let redirectedRoutes = ['/courses']
    let protectedRoutes = [];
    
    if (redirectedRoutes.includes(pathname)){
        return NextResponse.redirect(new URL('/all-courses/', req.url))
    }
}
