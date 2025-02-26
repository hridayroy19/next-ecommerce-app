"use server";

import { getValidToken } from "@/lib/verifyToken";

export const createShop = async (data: FormData) => {
    const token = await getValidToken();
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`, {
            method: "POST",
            headers: {
                Authorization: token,
            },
            body: data,
        });

        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};