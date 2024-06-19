import {driver} from '@wdio/globals'

async function scrollscreen (fromY, toY) {
    await driver
    .action('pointer')
    .move({x:360, y: fromY})
    .down()
    .pause(1000)
    .move({duration: 200, x: 360, y: toY})
    .up()
    .perform()
}

export default scrollscreen