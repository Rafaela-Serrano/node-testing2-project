const share = {
    client:'sqlite3',
    useNullAsDefualt:true,
    migration:{
        directory:'./data/migrations',
    },
    seeds:{
        directory:'./data/seeds',
    }
};

module.exports = {
    development:{
        ...share,
        connection:{
            filename:'./data/colors.db3',
        }
    },
    testing:{
        ...share,
        connection:{
            filename:'./data/test.db3',
        }
    },
};