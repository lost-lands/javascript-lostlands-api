# Lost Lands API Javascript Library

## Getting Started

#### Include in your HTML
```html
<script src="https://cdn.jsdelivr.net/gh/lost-lands/javascript-lostlands-api@1.2/api.js"></script>
```

#### Initialize the API
```javascript
var v1 = new lostlandsAPI.v1();
```
## API
#### Example Call

```javascript
const uuid = "0713189b-ba9f-4b30-b772-d17e7bd402f9";
v1.player(uuid, function(err, player) {
    if (err) {
        console.error(err);
    } else {
        //player is an array of all documented player data
        console.log(player);
    }
});
````
#### Documentation
Documentation for all API calls can be found under the v1 documentation on the Lost Lands developer docs.
https://developer.lostlands.co/

