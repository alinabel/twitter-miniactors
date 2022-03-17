import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('vdrmota/twitter-scraper', {
        ...input,
        searchMode: "video",
        mode: "replies",
        maxIdleTimeoutSecs: 60,
    });
});