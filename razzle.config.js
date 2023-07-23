module.exports = {
    modifyPaths({

        paths
    }) {
        console.log(paths)
        return {
            ...paths,
            appServerIndexJs: './src',
            appClientIndexJs: './src/client/client.js',
        };
    },
}