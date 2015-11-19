
var repository = 'http://fenixrepo.fao.org/cdn/';
var projectRoot = "http://www.fao.org/fenixrepo/cdn/projects/ghg/1.0.0/overview/";


require.config({

    config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                return true;
            }
        }
    },

    waitSeconds: 20,

    paths: {

        'domReady': repository + '/js/requirejs/plugins/domready/2.0.1/domReady',
        'i18n':  repository + '/js/requirejs/plugins/i18n/2.0.4/i18n',
        'text':  repository + '/js/requirejs/plugins/text/2.0.12/text',

        'jquery':  repository + 'js/jquery/1.10.2/jquery-1.10.2.min',
        'highcharts': repository + 'js/highcharts/4.0.4/js/highcharts',
        'highcharts-exporting' : repository + 'js/highcharts/4.0.4/js/modules/exporting',
        'handlebars': repository + 'js/handlebars/2.0.0/handlebars',
        'chosen': repository + 'js/chosen/1.2.0/chosen.jquery.min',
        'jshashtable': repository + 'js/jshashtable/0.0.1/jshashtable',

        'f3-ghg-chart': projectRoot + 'submodules/faostat-ui-ghg-overview/libs/f3-ghg-chart',
        'wide-table': projectRoot + 'submodules/faostat-ui-ghg-overview/libs/wide-table-min',

        'FAOSTAT_UI_GHG_OVERVIEW': projectRoot + 'submodules/faostat-ui-ghg-overview/src/js/ghg-overview',
        'faostat_ui_ghg_overview': projectRoot + 'submodules/faostat-ui-ghg-overview'

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

var placeholder = "fs-module",
    locale = document.getElementById(placeholder).getAttribute('data-lang'); //en, fr, es

switch(locale) {
    case 'en': locale = 'E'; break;
    case 'fr': locale = 'F'; break;
    case 'es': locale = 'S'; break;
    default: locale = 'E';
}

require.config({'locale': locale});

/* Bootstrap the application. */
require([
    'FAOSTAT_UI_GHG_OVERVIEW',
    'domReady!'
], function (MODULE) {

    var m = new MODULE();
    m.init({
        lang: locale,
        placeholder: '#' + placeholder,
        datasource: 'faostatdb', //'faostat/faostat2/faostatdb',
        url_wds: 'http://fenixapps2.fao.org/wds_5/rest'
    });
});