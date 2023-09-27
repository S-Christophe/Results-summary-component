/** @type {import('next').NextConfig} */

// module.exports = (phase, {defaultConfig}) => {
//     if ('sassOptions' in defaultConfig) {
//         defaultConfig['sassOptions'] = {
//             includePaths: ['./src/app/styles'],
//             prependData: `@import "~@styles/fonts.scss"; @import "~@styles/variables.scss";`,
//         }
//     }
//     return defaultConfig;
// }

module.exports = {
    output: 'export',
    /* Add Your Scss File Folder Path Here */
    sassOptions: {
        includePaths: ['./src/app/styles'],
        prependData: `@import "~@styles/fonts.scss"; @import "~@styles/variables.scss";`,
    },
}