var request = require('request');

var headers = {
    'cookie': 'language=en; mt.v=2.2026407179.1549125897039; session.present=1; session.ID=DC670B6AD2B04C699417A8FF1848BDC5; 49746=; gdprsettings={"performance":true,"remarketing":true,"social":true}; _ga=GA1.3.1398363735.1549125908; cto_lwid=d29d5d04-b5f7-425f-9c20-bae90cf1324f; popupSeen=1; userCountry=US; _gcl_au=1.1.1262729687.1549125909; _fbp=fb.2.1549125909212.1417994618; peerius_user=cuid:66112526156|1oyr0js3oDZYdYeh72JV01zMZUHGMi5rsY3EijWfNkQ; mt.menCategoryVisits=1; mt.assumedGender=man; mt.favouriteBrand=adidas_originals; trackingID=325988B5EE8847AA8A4F321CFEC4D43E; _taggstar_vid=0c90f0ad-270a-11e9-8cbc-03f7ffa3835b; sc.UserId=f21aef14-9870-492d-a066-d1d76ef220cc; ak_bmsc=3B8385F151FBF0614C031149CD5947436B0E20E75D0800001377575CE8704616~plmCjM86TGgvdTqwGA8L/pXOIqlT70TteUYVBV3IMYbb3BYx4Fpx3hCH1Ofui3pJyyCBMY9EW3Zjx4VXhvvFZzPwttDU7132Xu1p+O1gALYJTPzqQMnTZYjc68nBnuFzjGjGcw8sj6+j9xkjXQBi5Rg/BBmb2fgUVXa92GD9Vw8GE3fD/pGrlFL1dYGsbej+MYZGn1GIxz0rYWyJKD7iQw0zU2NSrEfYr31lUzfg4Viy4NAUKziI0EmDuyURR9asZA; _gid=GA1.3.2047295066.1549235992; redwp=_; sc.ASP.NET_SESSIONID=azfdcl5ta2w1qjrxkho1cmcy; peerius_sess=104217683206|sD97iZC7tczCpmPYNUlEsqvr8KvWJn8-2AE25A8ATzE; AKA_A2=A; _taggstar_ses=3c212af1-280a-11e9-b84b-9b048b9ac645; __atuvc=2%7C5%2C2%7C6; __atuvs=5c57772870116204001; mt.brandVisits=%7B%22adidas_originals%22:%7B%22brand%22:%22adidas_originals%22,%22timesVisited%22:2%7D,%22new_era%22:%7B%22brand%22:%22new_era%22,%22timesVisited%22:2%7D%7D; akavpau_VP1=1549236740~id=9cb3ec75e2638bc494e6a96f91078e4e; bm_sv=137E60D040EB7E399007D9D3415ECB57~F5k42iKabJOR4I7WjRnWvthXbm5UH5B/cdyffTaP5KNod+lzKlwOJJqehsZzkq/c/59eLVxl+H1KICBR0t885NfmpMJHCwv9ar4++0damwbCLdWRnXHcYyhqA0hd2MZU8wOJsb4mxD8Q4S5Tvu0kYDQkRyy9FtKVJTrUVlB+E4k=; _gat=1',
    'origin': 'https://www.jdsports.co.uk',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
    'content-type': 'application/json',
    'accept': '*/*',
    'referer': 'https://www.jdsports.co.uk/product/black-new-era-manchester-united-fc-9forty-cap-junior/1252958/',
    'authority': 'www.jdsports.co.uk',
    'x-requested-with': 'XMLHttpRequest'
};

var dataString = '{"customisations":[],"cartPosition":null,"recaptchaResponse":false,"quantityToAdd":1}';

var options = {
    url: 'https://www.jdsports.co.uk/cart/1252958.0193325708338/',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
