module.exports = function(config) {
    return {
        "query": async function(query, params) {
            const [rows] = await config.database.pool.promise().query(query, params);
            return rows;
        }
    }
};