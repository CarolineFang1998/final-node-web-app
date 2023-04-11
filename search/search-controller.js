import yelp from 'yelp-fusion';

const apiKey = 'Iv_abp1th6eEephLxCam5MBUu124TXnN0TKd5uAxFSQe3WZtismnqAhRBnAzUBIK5XF3CJIw5NqOxag1XQp'
               + '7c0fepysR1f0Bdc8ggZa0M9jDyCRzGSjXLYWpUWQjZHYx';
const client = yelp.client(apiKey);

function SearchController(app) {
    app.get('/api/search/:location/:param', (req, res) => {
        const location = req.params.location;
        const param = req.params.param;
        client.search({
                          term: param+'+dog+friendly',
                          location: location,
                          limit: '10',
                          categories: 'restaurants,bars',
                          open_now: true
                      }).then(response => {
            console.log(JSON.stringify(response.jsonBody));
            res.send(response.jsonBody.businesses);
        }).catch(e => {
            console.log(e);
        });
    })
    app.get('/api/detail/:id', (req, res) => {
        const id = req.params.id;
        client.business(id).then(response => {
            console.log(response.jsonBody.name);
            res.send(response.jsonBody);
        }).catch(e => {
            console.log(e);
        });
    })
}

export default SearchController;

