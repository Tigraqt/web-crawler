import { crawlPage } from './crawl.js'
import { printReport } from './report.js'

async function main(){
    if (process.argv.length < 3){
        console.log('no website provided')
    } else if (process.argv.length > 3){
        console.log('too many arguments provided')
    } else {
        const baseURL = process.argv[2]
        console.log(`starting crawl of: ${baseURL}...`)

        const pages = await crawlPage(baseURL, baseURL, {});

        printReport(pages)
    }
}

main()