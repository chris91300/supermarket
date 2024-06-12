import { NextRequest, NextResponse } from "next/server";
import { test } from "ramda";

export async function POST(req: NextRequest) {
    const { code } = await req.json();
    const codeIsValid = test(/^gratuit$/, code) ? true : false;

    return NextResponse.json({ codeIsValid });
}
