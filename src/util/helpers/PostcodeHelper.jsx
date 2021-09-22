const postCodeRegex = /^([g][i][r][0][a][a])$|^((([a-pr-uwyz]{1}([0]|[1-9]\d?))|([a-pr-uwyz]{1}[a-hk-y]{1}([0]|[1-9]\d?))|([a-pr-uwyz]{1}[1-9][a-hjkps-uw]{1})|([a-pr-uwyz]{1}[a-hk-y]{1}[1-9][a-z]{1}))[ ]*(\d[abd-hjlnp-uw-z]{2})?)$/i
const fullPostCodeRegex = /^([g][i][r][0][a][a])$|^((([a-pr-uwyz]{1}([0]|[1-9]\d?))|([a-pr-uwyz]{1}[a-hk-y]{1}([0]|[1-9]\d?))|([a-pr-uwyz]{1}[1-9][a-hjkps-uw]{1})|([a-pr-uwyz]{1}[a-hk-y]{1}[1-9][a-z]{1}))[ ]*(\d[abd-hjlnp-uw-z]{2}))$/i // as above, but last capture group optional

const isPostcode = regex => (testString = '') => !!(testString.length && regex.test(testString))

export default {
    isPostcode: isPostcode(postCodeRegex),
    isFullPostcode: isPostcode(fullPostCodeRegex),
}
