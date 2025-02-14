"use server"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"

export const registerUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        return res.json()
    } catch (error) {
        console.error(error)
    }


}

export const loginUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        const result = await res.json()
        if (result.success) {
            (await cookies()).set("accessToken", result.data.accessToken)
        }

        //   console.log(result);
        return result
    } catch (error) {
        console.error(error)
    }


}

export const currentUser = async () => {

    const accessToken = (await cookies()).get("accessToken")!.value;
    let decodedData = null
    if (accessToken) {
        decodedData = await jwtDecode(accessToken);
        return decodedData;
    }
    else {
        return null
    }
}