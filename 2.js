function is_username_valid(un) {
    const rule = /^[a-z.]{8}$/g;
    return rule.test(un)
}

function is_email_valid(mail) {
    const rule = /^[.a-zA-Z0-9]{4,}@[-a-zA-Z0-9]{3,}[.][a-zA-z]{2,}$/g
    return rule.test(mail)
}