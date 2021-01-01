const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
/**
 * 命令执行入口
 */
var extract_Run = () => {
    yargs(hideBin(process.argv))
        .commandDir('commands')
        .demand(1)
        .help()
        .alias('h', 'help')
        .locale('en')
        .showHelpOnFail(true, '使用--help查看有效选项')
        .epilog('copyright 2020 LunnLew')
        .argv;
}
module.exports = {
    run: extract_Run
}