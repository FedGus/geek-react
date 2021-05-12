const fs = require('fs');
const path = './server/db/messages';

module.exports = {
    async load(req,res) {
        try {
            const result = await fs.readFileSync(`${path}/${req.query.user}/${req.query.chat}.json`, 'UTF-8');
            if (result) {
                res.json(result);
            }
        }
        catch {
            res.sendStatus(500);
        }
    }
}