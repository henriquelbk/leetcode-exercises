// 929. Unique Email Addresses

var numUniqueEmails = function(emails) {
    const uniqueEmails = new Set()

    for (const email of emails) {
        const [local, domain] = email.split('@')
        const cleanLocal = local.split('+')[0].replace(/\./g, '')
        uniqueEmails.add(`${cleanLocal}@${domain}`)
    }
    return uniqueEmails.size
}

