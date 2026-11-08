
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  console.log(
    `[API EJECUTADA] ${request.method} ${request.nextUrl.pathname}`
  );

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
