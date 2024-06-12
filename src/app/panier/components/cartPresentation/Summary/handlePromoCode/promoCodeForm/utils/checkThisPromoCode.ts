export default async function checkThisPromoCode(promoCode: string) {
    const response = await fetch("/api/doesPromoCodeIsValid", {
        method: "POST",
        body: JSON.stringify({ code: promoCode }),
        headers: {
            "content-type": "application/json",
        },
    });

    const data: { codeIsValid: boolean } = await response.json();
    return data;
}
