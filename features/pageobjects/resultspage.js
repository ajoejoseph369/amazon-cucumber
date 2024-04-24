const {$} = require("@wdio/globals")

class ResultsPage{
    async checkPageUrl(product_details){
        const pageTitle = await browser.getTitle();
        // if(await expect(pageTitle).hasText(expect.stringContaining(product_details)))
        if(await expect(pageTitle).to.include(product_details))
            return true;
        else
            return false;
    }

}