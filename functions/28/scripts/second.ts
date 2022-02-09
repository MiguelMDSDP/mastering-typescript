function sendMail(
    to: string,
    subject: string = "No subject",
    from?: string
): void {
    console.log({
        to: to,
        subject: subject,
        from: from || "John Doe",
    });
}

sendMail("miguelmartinsdossantos@gmail.com", "Mastering Typescript", "Teste");