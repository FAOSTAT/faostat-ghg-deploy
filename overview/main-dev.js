
var repository = 'http://fenixrepo.fao.org/cdn/';
var projectRoot = 'submodules/';

require.config({

    waitSeconds: 20,

    paths: {

        'domReady': repository + '/js/requirejs/plugins/domready/2.0.1/domReady',
        'i18n':  repository + '/js/requirejs/plugins/i18n/2.0.4/i18n',
        'text':  repository + '/js/requirejs/plugins/text/2.0.12/text',
        'jquery':  repository + 'js/jquery/1.10.2/jquery-1.10.2.min',
        'highcharts': repository + 'js/highcharts/4.0.4/js/highcharts',
        'highcharts-exporting' : repository + 'js/highcharts/4.0.4/js/modules/exporting',
        'f3-ghg-chart': repository + 'faostat3/f3-ghg-chart/f3-ghg-chart',
        'wide-table': repository + 'faostat3/wide-table/wide-table-min',
        'handlebars': repository + 'js/handlebars/2.0.0/handlebars',
        'chosen': repository + 'js/chosen/1.2.0/chosen.jquery.min',
        'jshashtable': repository + 'js/jshashtable/0.0.1/jshashtable',
        'FAOSTAT_UI_GHG_OVERVIEW': projectRoot + 'faostat-ui-ghg-overview/src/js/ghg-overview',
        'faostat_ui_ghg_overview': projectRoot + 'faostat-ui-ghg-overview'

    },

    shim: {

        'highcharts': ['jquery'],
        'highcharts-exporting': ['highcharts'],
        'f3-ghg-chart': ['highcharts'],
        'chosen': ['jquery'],
        'handlebars': ['jquery'],
        'FAOSTAT_UI_COMMONS': ['jquery']

    }
});

var locale = "E"; //S, F

require.config({'locale': locale});

/* Bootstrap the application. */
require([
    'FAOSTAT_UI_GHG_OVERVIEW',
    'domReady!'
], function (MODULE) {

    var m = new MODULE();
    m.init({
            lang: locale,
            placeholder: '#fs-module',
            datasource: 'faostat' //'faostatdb'
        });
});