export const printReport = (pages) => {
    console.log("Report is starting...")

    const entries = Object.entries(pages)

    entries.sort((a, b) => b[1] - a[1])

    const sortedObj = Object.fromEntries(entries)

    console.log(sortedObj, );

    for (const [key, value] of Object.entries(sortedObj)) {
        console.log(`Found ${value} internal links to ${key}`)
    }
}