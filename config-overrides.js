const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const createRewireHost = require('react-app-rewire-host');

module.rules = [
    {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
            {
                loader: 'style-loader'
            }, {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread', "import", {
                        "libraryName": "antd",
                        "libraryDirectory": "es",
                        "style": "css"
                    }],
                }
            }]
    }
];

module.exports = function override(config, env) {
    config = rewireReactHotLoader(config, env);
    return config
}

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            /** All default located here: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less */
            '@primary-color': '#68AD45', // primary color for all components
            '@link-color': '#1890ff', // link color
            '@success-color': '#52c41a', // success state color
            '@warning-color': '#faad14', // warning state color
            '@error-color': '#f5222d', // error state color
            '@font-size-base': '14px', // major text font size
            '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
            '@text-color': 'rgba(0, 0, 0, 0.65)', // major text color
            '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
            '@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
            '@border-radius-base': '4px', // major border radius
            '@border-color-base': '#d9d9d9', // major border color
            '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
        },
    }),
);