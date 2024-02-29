
# AntiP2W-npm

The AntiP2W-npm package was made to make your life easier using the AntiP2W API (DataBase). Join our discord to get access: https://discord.gg/antip2w

Documentation soon. For now, look at the example functions below!







## Usage/Examples

```javascript
const AntiP2W = require('antip2w-npm');

const P2WDB = new AntiP2W('API_KEY_HERE');

    P2WDB.getAllRealms() //Gets all realms
    .then(realms => {
        console.log(realms);
    })
    .catch(error => {
        console.error(error);
    });

    P2WDB.getRandomRealm() //Gets a random realm
    .then(realms => {
        console.log(realms);
    })
    .catch(error => {
        console.error(error);
    });

    P2WDB.getSuspiciousRealms() //Gets all realms that are marked as dangerous
    .then(realms => {
        console.log(realms);
    })
    .catch(error => {
        console.error(error);
    });

    P2WDB.deleteRealm('P2W_ID_HERE') //P2W_ID
    .then(realms => {
        console.log(realms);
    })
    .catch(error => {
        console.error(error);
    });

    P2WDB.searchRealmID('REALM_ID_HERE') //REALM_ID
    .then(realms => {
        console.log(realms);
    })
    .catch(error => {
        console.error(error);
    });

    P2WDB.searchDiscordName('DISCORD_NAME_HERE') //DISCORD_NAME
    .then(realms => {
        console.log(realms);
    })
    .catch(error => {
        console.error(error);
    });

    P2WDB.searchRealmCode('REALM_CODE_HERE') //REALM_CODE
    .then(realms => {
        console.log(realms);
    })
    .catch(error => {
        console.error(error);
    });
```

